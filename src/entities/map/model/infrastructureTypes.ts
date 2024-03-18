import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";

export interface InfrastructureItemType {
  name: string;
  point: CoordinatesType;
}
export interface InfrastructureType {
  count: number;
  items: InfrastructureItemType[];
}
export interface InfrastuctureListType {
  "продуктовый магазин": InfrastructureType;
  достопримечательность: InfrastructureType;
  кафе: InfrastructureType;
  "детский сад": InfrastructureType;
  школа: InfrastructureType;
  "фитнес-клуб": InfrastructureType;
  поликлиника: InfrastructureType;
  тц: InfrastructureType;
  кинотеатр: InfrastructureType;
}
