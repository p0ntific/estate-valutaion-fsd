import InfoHeader from "@/entities/info/InfoHeader";
import qr from "../../assets/imgs/qr.svg";
import { memo } from "react";

const TgBot = memo(() => {
    return (
        <InfoHeader className="">
            <div className="flex gap-3 sm:gap-8 sm:flex-row flex-col items-center">
                <a
                    href="https://t.me/estate_valuationbot"
                    className="block w-36 h-36 bg-blue-100 rounded-xl p-4"
                >
                    <img src={qr} alt="qr" className="w-28 h-28 block" />
                </a>

                <div className="flex flex-col gap-1 w-fit sm:text-start text-center">
                    <h1 className="prose-slate prose-2xl font-bold">
                        Наш телеграм бот
                    </h1>
                    <p className="prose-slate prose-md sm:block hidden">
                        При помощи нашего сервиса вы сможете оценить и получить
                        прогноз на стоимость объектов недвижимости, вывести
                        аналитику по рынку недвижимости и собственному портфелю,
                        а также произвести оценку рисков и подбор похожих
                        объектов
                    </p>
                </div>
            </div>
        </InfoHeader>
    );
});

export default TgBot;
