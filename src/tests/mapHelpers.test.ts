import { getAllPositions } from "@/widgets/map/helpers/getAllPositions.ts";
import { expect, test } from "vitest";
import AiResultType from "@/widgets/mainForm/model/responseType.ts";

const data: AiResultType = {
  price: 13584311,
  latitude: 59.938846,
  longitude: 30.314808,
  house_info: {
    year: null,
    count_entrances: null,
    gas: null,
    hot_water: null,
  },
  infrastructure: {
    landmarks: {
      count: 5,
      items: [
        {
          name: "Исаакиевский собор, государственный музей-памятник",
          point: [59.933912, 30.305704],
        },
        {
          name: "Адмиралтейство",
          point: [59.93722, 30.306509],
        },
        {
          name: "Памятник Петру I",
          point: [59.936416, 30.302204],
        },
        {
          name: "Иорданская лестница",
          point: [59.941306, 30.31402],
        },
        {
          name: "Зимний дворец",
          point: [59.940937, 30.313062],
        },
      ],
    },
    cafes: {
      count: 1,
      items: [
        {
          name: "Mariospizza, ресторан",
          point: [59.936159, 30.317188],
        },
      ],
    },
    kindergartens: {
      count: 1,
      items: [
        {
          name: "Детский сад №27 Центрального района",
          point: [59.936777, 30.313477],
        },
      ],
    },
    schools: {
      count: 2,
      items: [
        {
          name: "Средняя общеобразовательная школа №225 Адмиралтейского района",
          point: [59.938923, 30.30898],
        },
        {
          name: "Лицей №211 им. Пьера Де Кубертена Центрального района",
          point: [59.931541, 30.317827],
        },
      ],
    },
    polyclinics: {
      count: 2,
      items: [
        {
          name: "Поликлиника №1 ГУ МВД России по г. Санкт-Петербургу и Ленинградской области",
          point: [59.935219, 30.312315],
        },
        {
          name: "НИИ акушерства, гинекологии и репродуктологии им. Д.О. Отта, Консультативно-диагностическое отделение",
          point: [59.942945, 30.300397],
        },
      ],
    },
    shopping_malls: {
      count: 2,
      items: [
        {
          name: "У Красного Моста. Au Pont Rouge, универмаг",
          point: [59.93336, 30.314184],
        },
        {
          name: "Адмирал, торгово-развлекательный комплекс",
          point: [59.936025, 30.31465],
        },
      ],
    },
    cinemas: {
      count: 2,
      items: [
        {
          name: "Angleterre cinema lounge, кинотеатр",
          point: [59.933651, 30.308605],
        },
        {
          name: "Дом Н. И. Чичерина",
          point: [59.936145, 30.31798],
        },
      ],
    },
  },
  similar_objects: [
    {
      id: 68994,
      region: "spb",
      price: 12999000,
      rooms: 3,
      cnt_rooms: 3,
      area: 59.1,
      dist_to_center: 0.9212332623651288,
      house_material: "blc",
      repair: "0;0",
      object_type: 2,
      floor: 9,
      parking_type: "0",
      has_lift: false,
      floors: 15,
      hot_water: "Закрытая с приготовлением горячей воды на ЦТП",
      year: 1989,
      count_entrances: 2,
      gas: "Отсутствует",
      latitude: 59.9339756,
      longitude: 30.3284024,
      address: "Санкт-Петербург, р-н Невский, Рыбацкое, Рыбацкий проспект, 15",
    },
    {
      id: 74888,
      region: "spb",
      price: 13600000,
      rooms: 2,
      cnt_rooms: 2,
      area: 60,
      dist_to_center: 0.5468400120118596,
      house_material: "0",
      repair: "1;0",
      object_type: 2,
      floor: 10,
      parking_type: "und",
      has_lift: false,
      floors: 13,
      hot_water: "Теплообменник",
      year: 2021,
      count_entrances: 6,
      gas: "Нет информации",
      latitude: 59.9339027,
      longitude: 30.3139724,
      address:
        "Санкт-Петербург, р-н Приморский, Юнтолово, м. Комендантский проспект, Планерная улица, 93",
    },
    {
      id: 72802,
      region: "spb",
      price: 8990000,
      rooms: 2,
      cnt_rooms: 2,
      area: 54.2,
      dist_to_center: 0.5468400120118596,
      house_material: "0",
      repair: "1;0",
      object_type: 2,
      floor: 9,
      parking_type: "0",
      has_lift: true,
      floors: 24,
      hot_water: "Центральное",
      year: 1955,
      count_entrances: 2,
      gas: "Иное",
      latitude: 59.9339027,
      longitude: 30.3139724,
      address:
        "Санкт-Петербург, р-н Выборгский, мкр. Парголово, Парнас, м. Парнас, Заречная улица, 17",
    },
    {
      id: 64196,
      region: "spb",
      price: 10990000,
      rooms: 2,
      cnt_rooms: 2,
      area: 56.7,
      dist_to_center: 0.9678021040579204,
      house_material: "0",
      repair: "1;0",
      object_type: 2,
      floor: 15,
      parking_type: "0",
      has_lift: true,
      floors: 22,
      hot_water: "Кольцевая или с закольцованными вводами",
      year: 2020,
      count_entrances: 5,
      gas: "Нет информации",
      latitude: 59.9451706,
      longitude: 30.326732954120263,
      address:
        "Санкт-Петербург, р-н Красногвардейский, Пороховые, м. Ладожская, улица Лагоды, 5",
    },
    {
      id: 56945,
      region: "spb",
      price: 9980000,
      rooms: 2,
      cnt_rooms: 2,
      area: 62.2,
      dist_to_center: 0.5468400120118596,
      house_material: "mnl",
      repair: "0;0",
      object_type: 1,
      floor: 12,
      parking_type: "0",
      has_lift: false,
      floors: 22,
      hot_water: "Тупиковая",
      year: 1970,
      count_entrances: 1,
      gas: "Центральное",
      latitude: 59.9339027,
      longitude: 30.3139724,
      address:
        "Санкт-Петербург, р-н Приморский, Лахта-Ольгино, м. Комендантский проспект, улица Ивинская, 17",
    },
  ],
};
const ans = {
  "О доме": [
    {
      position: [30.314808, 59.938846],
      text: "Ваша квартира",
    },
  ],
  Инфраструктура: [
    {
      text: "Исаакиевский собор, государственный музей-памятник",
      position: [30.305704, 59.933912],
    },
    {
      text: "Адмиралтейство",
      position: [30.306509, 59.93722],
    },
    {
      text: "Памятник Петру I",
      position: [30.302204, 59.936416],
    },
    {
      text: "Иорданская лестница",
      position: [30.31402, 59.941306],
    },
    {
      text: "Зимний дворец",
      position: [30.313062, 59.940937],
    },
    {
      text: "Mariospizza, ресторан",
      position: [30.317188, 59.936159],
    },
    {
      text: "Детский сад №27 Центрального района",
      position: [30.313477, 59.936777],
    },
    {
      text: "Средняя общеобразовательная школа №225 Адмиралтейского района",
      position: [30.30898, 59.938923],
    },
    {
      text: "Лицей №211 им. Пьера Де Кубертена Центрального района",
      position: [30.317827, 59.931541],
    },
    {
      text: "Поликлиника №1 ГУ МВД России по г. Санкт-Петербургу и Ленинградской области",
      position: [30.312315, 59.935219],
    },
    {
      text: "НИИ акушерства, гинекологии и репродуктологии им. Д.О. Отта, Консультативно-диагностическое отделение",
      position: [30.300397, 59.942945],
    },
    {
      text: "У Красного Моста. Au Pont Rouge, универмаг",
      position: [30.314184, 59.93336],
    },
    {
      text: "Адмирал, торгово-развлекательный комплекс",
      position: [30.31465, 59.936025],
    },
    {
      text: "Angleterre cinema lounge, кинотеатр",
      position: [30.308605, 59.933651],
    },
    {
      text: "Дом Н. И. Чичерина",
      position: [30.31798, 59.936145],
    },
  ],
  "Похожие дома": [
    {
      position: [30.3284024, 59.9339756],
      text: "Санкт-Петербург, р-н Невский, Рыбацкое, Рыбацкий проспект, 15",
    },
    {
      position: [30.3139724, 59.9339027],
      text: "Санкт-Петербург, р-н Приморский, Юнтолово, м. Комендантский проспект, Планерная улица, 93",
    },
    {
      position: [30.3139724, 59.9339027],
      text: "Санкт-Петербург, р-н Выборгский, мкр. Парголово, Парнас, м. Парнас, Заречная улица, 17",
    },
    {
      position: [30.326732954120263, 59.9451706],
      text: "Санкт-Петербург, р-н Красногвардейский, Пороховые, м. Ладожская, улица Лагоды, 5",
    },
    {
      position: [30.3139724, 59.9339027],
      text: "Санкт-Петербург, р-н Приморский, Лахта-Ольгино, м. Комендантский проспект, улица Ивинская, 17",
    },
  ],
};
test("Get all positions", () => {
  expect(
    getAllPositions({
      houseCenter: [data.longitude, data.latitude],
      infrastructure: data.infrastructure,
      similarObjects: data.similar_objects,
    }),
  ).toEqual(ans);
});
