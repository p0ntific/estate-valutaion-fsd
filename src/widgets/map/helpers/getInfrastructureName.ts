import { Variant } from "@/entities/map/model/mapTypes.ts";

export default function getInfrastructureName(enName: Variant) {
  if (enName === "grocery_stores") return "Продуктовые магазины";
  if (enName === "landmarks") return "Достопримечательности";
  if (enName === "cafes") return "Кафе";
  if (enName === "kindergartens") return "Детские сады";
  if (enName === "schools") return "Школы";
  if (enName === "fitness_clubs") return "Фитнес-клубы";
  if (enName === "polyclinics") return "Поликлиники";
  if (enName === "shopping_malls") return "Торговые центры";
  if (enName === "cinemas") return "Кинотеатры";
}
