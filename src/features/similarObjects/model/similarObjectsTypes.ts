import { GetPriceDto } from "@/entities/form/api/dto/getPrice.dto.ts";
import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";

export interface SimilarObjectsType extends GetPriceDto {
  position: CoordinatesType;
  floors: number;
  price: number;
}
export interface SimilarObjectsInfoType {
  address: string;
  price: number;
}
