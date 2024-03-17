import { MapStatusType } from "./mapStatusType";

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
    mapStatus: MapStatusType;
};
