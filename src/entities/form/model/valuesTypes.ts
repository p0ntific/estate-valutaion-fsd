export type FormValuesType = {
    address: string;
    houseType: string;
    roofType: string;
    rooms: string;
    square: string;
    floor: string;
    floorTotal: string;
    hasLift: boolean;
    parkingOnRoof: boolean;
    parkingOnGround: boolean;
    parkingUnderGround: boolean;
};

export type HouseMaterialTypeReversed =
    | "brc"
    | "blc"
    | "mnl"
    | "pnl"
    | "wdn"
    | "stl"
    | "brm";

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

export type FormValuesWithRenovationType = {
    address: string;
    houseType: HouseMaterialType;
    roofType: "Первичка" | "Вторичка";
    rooms: string;
    square: string;
    floor: string;
    floorTotal: string;
    hasLift: boolean;
    parkingOnRoof: boolean;
    parkingOnGround: boolean;
    parkingUnderGround: boolean;
    renovation: RenovationsType;
};
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
