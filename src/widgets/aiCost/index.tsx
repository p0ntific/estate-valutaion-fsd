import { memo } from "react";

const AiCost = memo(() => {
    const cost = localStorage.getItem("cost");

    return (
        <div className="flex flex-col gap-12 w-full items-center text-center justify-center">
            <h1 className="prose-2xl text-3xl font-bold">Результат оценки </h1>
            <div className="flex md:flex-row flex-col gap-8 w-full ">
                <div
                    className="tooltip  tooltip-top md:w-1/2"
                    data-tip="Рыночная цена отражает наилучший для вас исход сделки."
                >
                    <div className="hover:scale-110 transition bg-blue-50 border text-center border-blue-500 py-10 px-12 rounded-xl">
                        <h2 className="prose-2xl font-bold">
                            {cost == null
                                ? "не удалось получить цену"
                                : (+cost / 1000000).toFixed(1) + " млн. рублей"}
                        </h2>
                        <h3 className="prose-lg font-semibold text-slate-600">
                            Рыночная цена
                        </h3>
                    </div>
                </div>
                <div
                    className="tooltip tooltip-top md:w-1/2"
                    data-tip="Реальная цена - это цена, которую вы вероятнее всего получите при продаже квартиры!"
                >
                    <div className="hover:scale-110 transition bg-blue-50 border text-center border-blue-500 py-10 px-12 rounded-xl">
                        <h2 className="prose-2xl font-bold">
                            {cost == null
                                ? "не удалось получить цену"
                                : ((+cost / 1000000) * 0.95).toFixed(1) +
                                  " млн. рублей"}
                        </h2>
                        <h3 className="prose-lg font-semibold text-slate-600">
                            Реальная цена
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AiCost;
