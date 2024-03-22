import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";

export interface InfrastructureItemType {
  name: string;
  point: CoordinatesType;
}
export interface InfrastructureType {
  count: number;
  items: InfrastructureItemType[];
}
export interface InfrastructureListType {
  grocery_stores?: InfrastructureType;
  landmarks?: InfrastructureType;
  cafes?: InfrastructureType;
  kindergartens?: InfrastructureType;
  schools?: InfrastructureType;
  fitness_clubs?: InfrastructureType;
  polyclinics?: InfrastructureType;
  shopping_malls?: InfrastructureType;
  cinemas?: InfrastructureType;
}
