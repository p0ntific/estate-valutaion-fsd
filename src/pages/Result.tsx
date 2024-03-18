import AiCost from "@/widgets/aiCost";
import MapComponent from "@/widgets/map/index.ts";
import Similar from "@/widgets/similar";
import { YMapComponentsProvider } from "ymap3-components";
import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";
import { InfrastuctureListType } from "@/entities/map/model/infrastructureTypes.ts";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";
import { HouseInfoType } from "@/entities/map/model/HouseInfoTypes.ts";
import { getAllPositions } from "@/widgets/map/helpers/getAllPositions.ts";

function Result() {
  const positionOnMap: CoordinatesType = [30.19, 59.57];
  const houseInfo: HouseInfoType = {
    year: 1970,
    count_entrances: 2,
    gas: "Центральное",
    hot_water: "Полное снабжение",
  };
  const similarObjects: SimilarObjectsType[] = [
    {
      house_material: "brc",
      object_type: 1,
      repair: "1;1",
      has_lift: 1,
      parking_type: "mlt",
      address: "Санкт-петербург, Ленинский проспект, 20",
      floor: 4,
      cnt_rooms: 2,
      floors: 9,
      area: 60.5,
      price: 32000000,
      text: "A spacious apartment with a great view.",
      position: [30.28028836784963, 59.62955410169639],
    },
    {
      house_material: "brc",
      object_type: 1,
      repair: "1;1",
      has_lift: 1,
      parking_type: "mlt",
      address: "Санкт-петербург, Ленинский проспект, 21",
      floor: 4,
      cnt_rooms: 2,
      floors: 9,
      price: 44000000,
      area: 60.5,
      text: "A spacious apartment with a great view.",
      position: [30.20977993612905, 59.58125501049825],
    },
    {
      house_material: "brc",
      object_type: 1,
      repair: "1;1",
      has_lift: 1,
      parking_type: "mlt",
      address: "Санкт-петербург, Ленинский проспект, 23",
      floor: 4,
      cnt_rooms: 2,
      floors: 9,
      price: 55000000,
      area: 60.5,
      text: "A spacious apartment with a great view.",
      position: [30.27323072173533, 59.62729409882009],
    },
  ];
  const price: number = 12000000;
  const infrastucture: InfrastuctureListType = {
    "продуктовый магазин": {
      count: 3,
      items: [
        { name: "Перекрёсток, супермаркет", point: [30.49, 59.27] },
        { name: "Перекрёсток, супермаркет2", point: [30.69, 59.4] },
        { name: "Перекрёсток, супермаркет3", point: [30.19, 59.5] },
      ],
    },
    достопримечательность: {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.196152694918894, 59.574543396784534],
        },
      ],
    },
    кафе: {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.260498653505692, 59.602520054867284],
        },
      ],
    },
    "детский сад": {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.217257807692235, 59.65290744734582],
        },
      ],
    },
    школа: {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.214701925309907, 59.61469962834495],
        },
      ],
    },
    "фитнес-клуб": {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.239852254372302, 59.6191821102839],
        },
      ],
    },
    поликлиника: {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.213568323169717, 59.63734795485887],
        },
      ],
    },
    тц: {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.222321891305523, 59.571911616055424],
        },
      ],
    },
    кинотеатр: {
      count: 3,
      items: [
        {
          name: "Перекрёсток, супермаркет",
          point: [30.241678607710085, 59.606308215388715],
        },
      ],
    },
  };
  console.log(
    getAllPositions({
      houseCenter: positionOnMap,
      infrastructure: infrastucture,
      similarObjects: similarObjects,
    }),
  );
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <YMapComponentsProvider apiKey={"4b2e38aa-c9fd-4138-aab0-fe2455374d9c"}>
        <AiCost cost={price} />
        <MapComponent
          houseInfo={houseInfo}
          houseCenter={positionOnMap}
          infrastructure={infrastucture}
          similarObjects={similarObjects}
        />
        <Similar similarObjects={similarObjects} />
      </YMapComponentsProvider>
    </div>
  );
}

export default Result;
