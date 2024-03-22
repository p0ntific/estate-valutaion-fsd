export type CoordinatesType = [number, number];
export interface PlacemarkType {
  position: CoordinatesType;
  text: string;
}

export type Variant =
  | "grocery_stores"
  | "landmarks"
  | "cafes"
  | "kindergartens"
  | "schools"
  | "fitness_clubs"
  | "polyclinics"
  | "shopping_malls"
  | "cinemas";
export type MapStatusType = "О доме" | "Похожие дома" | "Инфраструктура";

export interface allPositionsType {
  "О доме": PlacemarkType[];
  Инфраструктура: PlacemarkType[] | [];
  "Похожие дома": PlacemarkType[] | [];
}
