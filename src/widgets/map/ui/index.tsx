import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapDefaultMarker,
} from "ymap3-components";
import { Field, Formik } from "formik";
import { memo, useState } from "react";
import SimilarHouseChip from "./SimilarHouseChip.tsx";
// @ts-ignore
import { animateScroll } from "react-scroll";
import { Form } from "react-router-dom";
import DropdownInput from "@ui/DropdownInput.tsx";
import {
  CoordinatesType,
  MapStatusType,
  PlacemarkType,
} from "@/entities/map/model/mapTypes.ts";
import { InfrastructureListType } from "@/entities/map/model/infrastructureTypes.ts";
import {
  SimilarObjectsInfoType,
  SimilarObjectsType,
} from "@/features/similarObjects/model/similarObjectsTypes.ts";
import { HouseInfoType } from "@/entities/map/model/HouseInfoTypes.ts";
import { getAllPositions } from "@/widgets/map/helpers/getAllPositions.ts";
import { getSimilarObjectsInfo } from "@/widgets/map/helpers/getMapInfo.ts";
import HouseInfo from "@/widgets/map/ui/HouseInfo.tsx";
import InfrastructureChips from "@/widgets/map/ui/InfrastructureChips.tsx";

interface Props {
  houseCenter: CoordinatesType;
  houseInfo: HouseInfoType;
  infrastructure: InfrastructureListType;
  similarObjects: SimilarObjectsType[];
}

const MapComponent = memo(
  ({ houseCenter, houseInfo, infrastructure, similarObjects }: Props) => {
    const positions = getAllPositions({
      houseCenter,
      similarObjects,
      infrastructure,
    });
    const radioVariants: MapStatusType[] = ["О доме"];
    if (positions["Похожие дома"]?.length) radioVariants.push("Похожие дома");
    if (positions["Инфраструктура"]?.length)
      radioVariants.push("Инфраструктура");
    const [center, setCenter] = useState(houseCenter);
    const [zoom, setZoom] = useState(14);
    const [counter, setCounter] = useState(0);

    const similarHousesMinInfo = getSimilarObjectsInfo(similarObjects);

    const handleClickInfrastructure = (positions: CoordinatesType[]) => {
      setZoom(16);
      if (positions.length === 0) return;
      setCounter((prev: number) => (prev + 1) % positions.length);
      const local_counter = (counter + 1) % positions.length;
      if (positions[local_counter] != undefined)
        setCenter(positions[local_counter]);
    };

    const scrollToSimilarHouse = (id: number) => {
      animateScroll.scrollTo(800 + id * 120);
    };

    const setPosition = (mapStatus: MapStatusType) => {
      setZoom(15);
      if (positions[mapStatus][0].position)
        setCenter(positions[mapStatus][0].position);
      return [0, 0];
    };

    return (
      <Formik initialValues={{ mapStatus: "О доме" }} onSubmit={() => {}}>
        {({ values, setFieldValue }) => {
          const mapStatus = values.mapStatus;
          return (
            <Form className="w-full text-center flex flex-col gap-12">
              <h1 className="mt-6 prose-2xl">Информация о доме</h1>
              <div className="w-full flex flex-col gap-4 text-center bg-blue-50 border border-blue-500 rounded-xl py-8 px-4 sm:px-8">
                <div className="w-full flex lg:flex-row flex-col gap-6 text-start">
                  <div
                    className="w-full xl:w-2/3 flex-wrap flex gap-4 lg:justify-start justify-center"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    {radioVariants.map((el, index) => (
                      <label
                        key={index + "radio"}
                        className={`py-2 px-4  transition ${
                          mapStatus === el
                            ? " bg-blue-400 hover:bg-blue-400 text-white"
                            : "btn-ghost"
                        } cursor-pointer rounded-xl btn md:flex hidden`}
                      >
                        <Field
                          className="hidden"
                          onClick={() => setPosition(el)}
                          type="radio"
                          name="mapStatus"
                          value={el}
                        />
                        {el}
                      </label>
                    ))}
                    <div className="text-center w-full md:hidden">
                      <DropdownInput
                        className="w-full"
                        onClick={(variant: string) => {
                          setFieldValue("mapStatus", variant);
                        }}
                        placeholder={"О доме"}
                        items={radioVariants}
                      >
                        Фильтр
                      </DropdownInput>
                    </div>
                  </div>
                  <div className="w-full lg:w-[22rem] xl:w-[28rem] text-center lg:text-start">
                    <h2 className="prose-xl font-bold">
                      {mapStatus === "О доме"
                        ? "Информация о доме"
                        : mapStatus === "Инфраструктура"
                          ? "Ближайшие места"
                          : "Похожие квартиры"}
                    </h2>
                  </div>
                </div>

                <div className="w-full lg:flex-row flex-col flex gap-6">
                  <div className="xl:w-2/3 lg:w-full md:max-h-full lg:h-[20rem] h-[24rem] rounded-xl overflow-hidden">
                    <YMap
                      location={{
                        zoom: zoom,
                        center: center,
                      }}
                    >
                      <YMapDefaultSchemeLayer />
                      <YMapDefaultFeaturesLayer />
                      {
                        // @ts-ignore
                        positions[mapStatus].map(
                          (el: PlacemarkType, index: number) => (
                            <YMapDefaultMarker
                              title={el.text}
                              color="#60a5fa"
                              key={index + "marker"}
                              coordinates={el.position}
                            />
                          ),
                        )
                      }
                    </YMap>
                  </div>
                  <div className="w-full lg:max-w-[24rem]  flex flex-col gap-8 ">
                    {mapStatus === "Инфраструктура" ? (
                      <InfrastructureChips
                        handleClickInfrastructure={handleClickInfrastructure}
                        infrastructure={infrastructure}
                        positions={positions}
                      />
                    ) : mapStatus === "Похожие дома" ? (
                      <div className="flex flex-col gap-4">
                        {similarHousesMinInfo.map(
                          (el: SimilarObjectsInfoType, index) => (
                            <SimilarHouseChip
                              key={index + "similar"}
                              address={el.address}
                              cost={el.price}
                              onClick={() => scrollToSimilarHouse(index)}
                            />
                          ),
                        )}
                      </div>
                    ) : (
                      <HouseInfo houseInfo={houseInfo} />
                    )}
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  },
);

export default MapComponent;
