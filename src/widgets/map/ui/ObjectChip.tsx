import { Variant } from "@/entities/map/model/mapTypes.ts";
import getInfrastructureName from "@/widgets/map/helpers/getInfrastructureName.ts";

interface Props {
  variant: Variant;
  onClick: (target: Variant) => void;
}

function ObjectChip({ variant, onClick }: Props) {
  const color = {
    grocery_stores: "bg-green-400",
    landmarks: "bg-red-400",
    cafes: "bg-amber-400",
    kindergartens: "bg-purple-400",
    schools: "bg-slate-600",
    fitness_clubs: "bg-indigo-400 ",
    polyclinics: "bg-blue-400",
    shopping_malls: "bg-cyan-400",
    cinemas: " bg-lime-400 ",
  };
  const hoverColor = {
    grocery_stores: "hover:bg-green-600",
    landmarks: "hover:bg-red-600",
    cafes: "hover:bg-amber-600",
    kindergartens: "hover:bg-purple-600",
    schools: "hover:bg-slate-800",
    fitness_clubs: "hover:bg-indigo-600 ",
    polyclinics: "hover:bg-blue-600",
    shopping_malls: "hover:bg-cyan-600",
    cinemas: "hover:bg-lime-600 ",
  };
  return (
    <button
      type="button"
      className={`btn ${color[variant]} btn-sm  py-1 text-white px-4 rounded-xl ${hoverColor[variant]} transition`}
      onClick={() => onClick(variant)}
    >
      {getInfrastructureName(variant)}
    </button>
  );
}

export default ObjectChip;
