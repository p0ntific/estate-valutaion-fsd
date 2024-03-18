import {
  SimilarObjectsInfoType,
  SimilarObjectsType,
} from "@/features/similarObjects/model/similarObjectsTypes.ts";

export function getSimilarObjectsInfo(
  similarObjects: SimilarObjectsType[],
): SimilarObjectsInfoType[] {
  return similarObjects.map((el: SimilarObjectsType) => ({
    address: el?.address,
    price: el?.price,
  }));
}
