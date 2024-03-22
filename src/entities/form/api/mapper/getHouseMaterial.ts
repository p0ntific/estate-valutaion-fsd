import {
  HouseMaterialType,
  HouseMaterialTypeReversed,
} from "../../model/valuesTypes";

export const houseMaterials = {
  кирпичный: "brc",
  блочный: "blc",
  монолитный: "mnl",
  панельный: "pnl",
  деревянный: "wdn",
  сталинский: "stl",
  "кирпично-монолитный": "brm",
};

export function getHouseMaterial(
  houseMaterial: HouseMaterialType,
): HouseMaterialTypeReversed {
  // @ts-ignore
  return houseMaterials[houseMaterial.toLowerCase()]
    ? // @ts-ignore
      houseMaterials[houseMaterial.toLowerCase()]
    : "brc";
}
