import { HouseInfoType } from "@/entities/map/model/HouseInfoTypes.ts";
import { InfrastructureListType } from "@/entities/map/model/infrastructureTypes.ts";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";

export default interface AiResultType {
  price: number;
  latitude: number;
  longitude: number;
  house_info: HouseInfoType;
  infrastructure: InfrastructureListType;
  similar_objects: SimilarObjectsType[];
}
