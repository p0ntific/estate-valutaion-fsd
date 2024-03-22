import {
  allPositionsType,
  CoordinatesType,
  PlacemarkType,
} from "@/entities/map/model/mapTypes.ts";
import {
  InfrastructureItemType,
  InfrastructureListType,
} from "@/entities/map/model/infrastructureTypes.ts";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";

interface Positions {
  houseCenter: CoordinatesType;
  infrastructure: InfrastructureListType;
  similarObjects: SimilarObjectsType[];
}

function getSimilarObjectsPositions(
  similarObjects: SimilarObjectsType[],
): PlacemarkType[] {
  return similarObjects.map((el) => ({
    position: [el?.longitude, el?.latitude],
    text: el?.address,
  }));
}
function getAllInfrastructurePositions(
  infrastructure: InfrastructureListType,
): PlacemarkType[] {
  const positions: PlacemarkType[] = [];
  for (const key in infrastructure) {
    // @ts-ignore
    infrastructure[key].items.forEach((el: InfrastructureItemType) =>
      positions.push({
        text: el.name,
        position: [el.point[1], el.point[0]],
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
