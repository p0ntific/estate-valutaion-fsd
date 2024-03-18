export type CoordinatesType = [number, number];
export interface PlacemarkType {
  position: CoordinatesType;
  text: string;
}

export type Variant =
  | "продуктовый магазин"
  | "достопримечательность"
  | "кафе"
  | "детский сад"
  | "школа"
  | "фитнес-клуб"
  | "поликлиника"
  | "тц"
  | "кинотеатр";
export type MapStatusType = "О доме" | "Похожие дома" | "Инфраструктура";

export interface allPositionsType {
  "О доме": PlacemarkType[];
  Инфраструктура: PlacemarkType[] | [];
  "Похожие дома": PlacemarkType[] | [];
}
