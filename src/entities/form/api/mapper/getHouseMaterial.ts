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
    houseMaterial: HouseMaterialType
): HouseMaterialTypeReversed {
    return houseMaterials[houseMaterial.toLowerCase()]
        ? houseMaterials[houseMaterial.toLowerCase()]
        : "brc";
}
