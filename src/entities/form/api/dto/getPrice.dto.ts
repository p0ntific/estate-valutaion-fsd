import {
  HouseMaterialTypeReversed,
  ParkingsTypeReversed,
  RenovationsTypeReversed,
} from "../../model/valuesTypes";

export type GetPriceDto = {
  address: string;
  area: number;
  cnt_rooms: number;
  floor: number;
  floors: number;
  has_lift: 1 | 0;
  house_material: HouseMaterialTypeReversed;
  object_type: 1 | 2;
  parking_type: ParkingsTypeReversed;
  repair: RenovationsTypeReversed;
  text: string;
};
