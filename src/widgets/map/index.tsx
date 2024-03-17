import {
    YMap,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapDefaultMarker,
} from "ymap3-components";
import { Field, Formik } from "formik";
import { memo, useMemo, useState } from "react";
import ObjectChip, { Variant } from "./ui/ObjectChip";
import SimilarHouseChip from "./ui/SimilarHouseChip";
import { animateScroll } from "react-scroll";
import { MapStatusType } from "@/entities/form/model/mapStatusType";
import { Form } from "react-router-dom";
import DropdownInput from "@/shared/ui/DropdownInput";

const MapComponent = memo(() => {
    const radioVariants: MapStatusType[] = [
        "О доме",
        "Похожие дома",
        "Инфраструктура",
    ];
    const houseCenter = JSON.parse(localStorage.getItem("positionOnMap"));
    const houseInfo = JSON.parse(localStorage.getItem("houseInfo"));
    const infrastructureData = JSON.parse(
        localStorage.getItem("infrastucture")
    );
    const similarHouses = JSON.parse(localStorage.getItem("similar_objects"));
    const similarHousesPositions = similarHouses.map(
        (el: { position: number[]; address: string }) => ({
            position: el?.position,
            text: el?.address,
        })
    );
    interface SimilarHouseType {
        address: string;
        price: number;
    }
    const similarHousesMinInfo: SimilarHouseType[] = similarHouses.map(
        (el: SimilarHouseType) => ({
            address: el?.address,
            price: el?.price,
        })
    );
    const shop = infrastructureData["продуктовый магазин"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const shoppingCentre = infrastructureData["тц"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const attraction = infrastructureData["достопримечательность"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const cafe = infrastructureData["кафе"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const kindergarten = infrastructureData["детский сад"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const school = infrastructureData["школа"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const fitnessClub = infrastructureData["фитнес-клуб"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const hospital = infrastructureData["поликлиника"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );
    const cinema = infrastructureData["кинотеатр"]?.items.map(
        (el: { name: string; point: number[] }) => ({
            position: el.point,
            text: el?.name,
        })
    );

    interface Infrastructure {
        name: Variant;
        positions: PlacemarkType[];
    }

    const infrastucture: Infrastructure[] = useMemo(() => {
        return [
            {
                name: "продуктовый магазин",
                positions: shop,
            },
            {
                name: "тц",
                positions: shoppingCentre,
            },
            {
                name: "достопримечательность",
                positions: attraction,
            },
            {
                name: "кафе",
                positions: cafe,
            },
            {
                name: "детский сад",
                positions: kindergarten,
            },
            {
                name: "фитнес-клуб",
                positions: fitnessClub,
            },
            {
                name: "поликлиника",
                positions: hospital,
            },
            {
                name: "кинотеатр",
                positions: cinema,
            },
            {
                name: "школа",
                positions: school,
            },
        ];
    }, [
        attraction,
        cafe,
        cinema,
        fitnessClub,
        hospital,
        kindergarten,
        school,
        shop,
        shoppingCentre,
    ]);
    interface PlacemarkType {
        position: number[];
        text: string;
    }
    const allInfrastructurePositions: PlacemarkType[] = useMemo(() => {
        const arr: PlacemarkType[] = [];
        infrastucture.forEach((el) => {
            el.positions.forEach((pos) => {
                arr.push(pos);
            });
        });
        return arr;
    }, [infrastucture]);
    const positions = {
        "О доме": [{ position: [...houseCenter], text: "Ваш дом" }],
        "Похожие дома": similarHousesPositions,
        Инфраструктура: allInfrastructurePositions,
    };
    const [center, setCenter] = useState(houseCenter);
    const [zoom, setZoom] = useState(9);
    const [counter, setCounter] = useState(0);

    const handleClickInfrastructure = (positions: PlacemarkType[]) => {
        const positionsWithoutText = positions.map((el) => el?.position);
        setZoom(14);
        if (positionsWithoutText.length === 0) return;
        setCounter((prev: number) => (prev + 1) % positionsWithoutText.length);
        const local_counter = (counter + 1) % positionsWithoutText.length;
        if (positionsWithoutText[local_counter] != undefined)
            setCenter(positionsWithoutText[local_counter]);
    };

    const scrollToSimilarHouse = (id: number) => {
        animateScroll.scrollTo(800 + id * 120);
    };

    const setPosition = (mapStatus: MapStatusType) => {
        setZoom(11);
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
                            <div className="w-full flex lg:flex-row flex-col gap-8 text-start">
                                <div
                                    className="w-full flex-wrap flex gap-4 lg:justify-start justify-center"
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
                                                setFieldValue(
                                                    "mapStatus",
                                                    variant
                                                );
                                            }}
                                            placeholder={"О доме"}
                                            items={radioVariants}
                                        >
                                            Фильтр
                                        </DropdownInput>
                                    </div>
                                </div>
                                <div className="w-full lg:w-[28rem] text-center">
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
                                <div className="lg:w-2/3 md:max-h-full lg:h-[20rem] h-[24rem] rounded-xl overflow-hidden">
                                    <YMap
                                        location={{
                                            zoom: zoom,
                                            center: center,
                                        }}
                                    >
                                        <YMapDefaultSchemeLayer />
                                        <YMapDefaultFeaturesLayer />
                                        {positions[mapStatus].map(
                                            (
                                                el: PlacemarkType,
                                                index: number
                                            ) => (
                                                <YMapDefaultMarker
                                                    title={el.text}
                                                    color="#60a5fa"
                                                    key={index + "marker"}
                                                    coordinates={el.position}
                                                />
                                            )
                                        )}
                                    </YMap>
                                </div>
                                <div className="w-full lg:w-[28rem] flex flex-col gap-8 ">
                                    {mapStatus === "Инфраструктура" ? (
                                        <div className="w-full gap-2 flex md:gap-4 flex-wrap">
                                            {infrastucture.map(
                                                ({ name, positions }) => (
                                                    <ObjectChip
                                                        key={name}
                                                        variant={name}
                                                        onClick={() => {
                                                            handleClickInfrastructure(
                                                                positions
                                                            );
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                    ) : mapStatus === "Похожие дома" ? (
                                        <div className="flex flex-col gap-4">
                                            {similarHousesMinInfo.map(
                                                (
                                                    el: SimilarHouseType,
                                                    index
                                                ) => (
                                                    <SimilarHouseChip
                                                        key={index + "similar"}
                                                        address={el.address}
                                                        cost={el.price}
                                                        onClick={() =>
                                                            scrollToSimilarHouse(
                                                                index
                                                            )
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <div className="flex gap-4 flex-col text-start">
                                            <div className=" prose-md">
                                                <span className="mr-2 font-bold">
                                                    Год строительства:
                                                </span>
                                                {houseInfo?.year
                                                    ? houseInfo?.year
                                                    : "неизвестно"}
                                            </div>
                                            <div className=" prose-md">
                                                <span className="mr-2 font-bold">
                                                    Есть газ:{" "}
                                                </span>
                                                {houseInfo?.gas
                                                    ? houseInfo?.gas
                                                    : "неизвестно"}
                                            </div>
                                            <div className=" prose-md">
                                                <span className="mr-2 font-bold">
                                                    Есть горячее водоснабжение:{" "}
                                                </span>
                                                {houseInfo?.hot_water
                                                    ? houseInfo?.hot_water
                                                    : "неизвестно"}
                                            </div>
                                            <div className=" prose-md">
                                                <span className="mr-2 font-bold">
                                                    Количество подьездов:{" "}
                                                </span>
                                                {houseInfo?.count_entrances
                                                    ? houseInfo?.count_entrances
                                                    : "неизвестно"}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
});

export default MapComponent;
