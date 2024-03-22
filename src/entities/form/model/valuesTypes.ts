export type FormValuesType = {
  address: string;
  houseType: HouseMaterialType;
  roofType: "Первичка" | "Вторичка";
  rooms: RoomsType;
  square: string;
  floor: string;
  floorTotal: string;
  hasLift: boolean;
  parkingOnRoof: boolean;
  parkingOnGround: boolean;
  parkingUnderGround: boolean;
};
export interface FormValuesWithRenovationType extends FormValuesType {
  renovation: RenovationsType;
}

export type RoomsType =
  | "1-комнатная"
  | "2-комнатная"
  | "3-комнатная"
  | "4-комнатная"
  | "5-комнатная"
  | "Студия";

export type HouseMaterialTypeReversed =
  | "brc"
  | "blc"
  | "mnl"
  | "pnl"
  | "wdn"
  | "stl"
  | "brm"
  | "0";

export type HouseMaterialType =
  | "Кирпичный"
  | "Блочный"
  | "Монолитный"
  | "Панельный"
  | "Деревянный"
  | "Сталинский"
  | "Кирпично-монолитный";

export type ParkingsType = {
  parkingOnRoof: boolean;
  parkingOnGround: boolean;
  parkingUnderGround: boolean;
};

export type ParkingsTypeReversed = "0" | "mlt" | "grn" | "orf" | "und";

export type RenovationsTypeReversed =
  | "3;2"
  | "2;2"
  | "1;2"
  | "0;2"
  | "3;1"
  | "2;1"
  | "1;1"
  | "0;1"
  | "2;0"
  | "1;0"
  | "0;0";

export type RenovationsType =
  | "С ремонтом и мебелью дизайнерский ремонт"
  | "С ремонтом и мебелью евроремонт"
  | "С ремонтом и мебелью косметический ремонт"
  | "С ремонтом и мебелью старый ремонт"
  | "С ремонтом и без мебели дизайнерский ремонт"
  | "С ремонтом и без мебели евроремонт"
  | "С ремонтом и без мебели косметический ремонт"
  | "С ремонтом и без мебели старый ремонт"
  | "Без ремонта предчистовая отделка"
  | "Без ремонта средняя отделка"
  | "Без ремонта черновая отделка";
