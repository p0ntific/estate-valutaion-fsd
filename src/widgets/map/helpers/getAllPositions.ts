import {
  allPositionsType,
  CoordinatesType,
  PlacemarkType,
} from "@/entities/map/model/mapTypes.ts";
import {
  InfrastructureItemType,
  InfrastuctureListType,
} from "@/entities/map/model/infrastructureTypes.ts";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";

interface Positions {
  houseCenter: CoordinatesType;
  infrastructure: InfrastuctureListType;
  similarObjects: SimilarObjectsType[];
}

function getSimilarObjectsPositions(
  similarObjects: SimilarObjectsType[],
): PlacemarkType[] {
  return similarObjects.map((el) => ({
    position: el?.position,
    text: el?.address,
  }));
}
function getAllInfrastructurePositions(
  infrastructure: InfrastuctureListType,
): PlacemarkType[] {
  const positions: PlacemarkType[] = [];
  for (let key in infrastructure) {
    // @ts-ignore
    infrastructure[key].items.forEach((el: InfrastructureItemType) =>
      positions.push({
        text: el.name,
        position: el.point,
      }),
    );
  }
  return positions;
}

export function getAllPositions({
  houseCenter,
  infrastructure,
  similarObjects,
}: Positions): allPositionsType {
  const infrastructurePositions = getAllInfrastructurePositions(infrastructure);
  const similarObjectsPositions = getSimilarObjectsPositions(similarObjects);
  return {
    "О доме": [
      {
        position: houseCenter,
        text: "Ваша квартира",
      },
    ],
    Инфраструктура: infrastructurePositions,
    "Похожие дома": similarObjectsPositions,
  };
}
