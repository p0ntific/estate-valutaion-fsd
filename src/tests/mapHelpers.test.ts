import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";
import { InfrastuctureListType } from "@/entities/map/model/infrastructureTypes.ts";
import { getAllPositions } from "@/widgets/map/helpers/getAllPositions.ts";
import { expect, test } from "vitest";

const positionOnMap: CoordinatesType = [30.19, 59.57];

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
const ans = {
  "О доме": [
    {
      position: [30.19, 59.57],
      text: "Ваша квартира",
    },
  ],
  Инфраструктура: [
    {
      text: "Перекрёсток, супермаркет",
      position: [30.49, 59.27],
    },
    {
      text: "Перекрёсток, супермаркет2",
      position: [30.69, 59.4],
    },
    {
      text: "Перекрёсток, супермаркет3",
      position: [30.19, 59.5],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.196152694918894, 59.574543396784534],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.260498653505692, 59.602520054867284],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.217257807692235, 59.65290744734582],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.214701925309907, 59.61469962834495],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.239852254372302, 59.6191821102839],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.213568323169717, 59.63734795485887],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.222321891305523, 59.571911616055424],
    },
    {
      text: "Перекрёсток, супермаркет",
      position: [30.241678607710085, 59.606308215388715],
    },
  ],
  "Похожие дома": [
    {
      position: [30.28028836784963, 59.62955410169639],
      text: "Санкт-петербург, Ленинский проспект, 20",
    },
    {
      position: [30.20977993612905, 59.58125501049825],
      text: "Санкт-петербург, Ленинский проспект, 21",
    },
    {
      position: [30.27323072173533, 59.62729409882009],
      text: "Санкт-петербург, Ленинский проспект, 23",
    },
  ],
};
test("Get all positions", () => {
  expect(
    getAllPositions({
      houseCenter: positionOnMap,
      infrastructure: infrastucture,
      similarObjects: similarObjects,
    }),
  ).toEqual(ans);
});
