import {
  HouseMaterialTypeReversed,
  ParkingsTypeReversed,
  RenovationsTypeReversed,
} from "@/entities/form/model/valuesTypes.ts";

export interface SimilarObjectsType {
  address: string;
  area: number;
  cnt_rooms: number;
  floor: number;
  floors: number;
  has_lift: boolean;
  house_material: HouseMaterialTypeReversed;
  object_type: 1 | 2;
  parking_type: ParkingsTypeReversed;
  repair: RenovationsTypeReversed;
  latitude: number;
  longitude: number;
  count_entrances: number;
  price: number;
  gas: string;
  hot_water: string;
  region: string;
  id: number;
  rooms: number;
  dist_to_center: number;
  year: number;
}
export interface SimilarObjectsInfoType {
  address: string;
  price: number;
}
