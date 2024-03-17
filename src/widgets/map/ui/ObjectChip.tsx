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

interface Props {
    variant: Variant;
    onClick: (target: Variant) => void;
}

function ObjectChip({ variant, onClick }: Props) {
    const color = {
        "продуктовый магазин": "bg-green-400",
        достопримечательность: "bg-red-400",
        кафе: "bg-amber-400",
        "детский сад": "bg-purple-400",
        школа: "bg-slate-600",
        "фитнес-клуб": "bg-indigo-400 ",
        поликлиника: "bg-blue-400",
        тц: "bg-cyan-400",
        кинотеатр: " bg-lime-400 ",
    };
    const hoverColor = {
        "продуктовый магазин": "hover:bg-green-600",
        достопримечательность: "hover:bg-red-600",
        кафе: "hover:bg-amber-600",
        "детский сад": "hover:bg-purple-600",
        школа: "hover:bg-slate-800",
        "фитнес-клуб": "hover:bg-indigo-600 ",
        поликлиника: "hover:bg-blue-600",
        тц: "hover:bg-cyan-600",
        кинотеатр: "hover:bg-lime-600 ",
    };
    return (
        <button
            type="button"
            className={`btn ${color[variant]} btn-sm  py-1 text-white px-4 rounded-xl ${hoverColor[variant]} transition`}
            onClick={() => onClick(variant)}
        >
            {variant}
        </button>
    );
}

export default ObjectChip;
