export const houseMaterials = {
    кирпичный: "brc",
    блочный: "blc",
    монолитный: "mnl",
    панельный: "pnl",
    деревянный: "wdn",
    сталинский: "stl",
    "кирпично-монолитный": "brm",
};

export function getHouseMaterial(houseMaterial: string): string {
    return houseMaterials[houseMaterial.toLowerCase()];
}
