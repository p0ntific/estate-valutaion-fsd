import InfoHeader from "@/entities/info/InfoHeader";
import CopyToBufferLink from "@/shared/ui/CopyToBufferLink";
import Link from "@/shared/ui/Link";
import { memo } from "react";

const AboutHeader = memo(() => {
    return (
        <InfoHeader className="flex flex-col gap-3 md:text-start text-center">
            <>
                <h1 className="prose-slate prose-2xl font-bold">
                    Наша команда
                </h1>
                <p className="prose-slate prose-md">
                    Проект "Оценка стоимости недвижимости" представляет собой
                    веб-приложение, разработанное для определения стоимости
                    квартиры на основе различных входных параметров.
                </p>
                <div className=" flex md:flex-row flex-col items-center gap-6">
                    <Link
                        variant="text"
                        to="https://t.me/MaksIgitov"
                        className="text-blue-500 hover:text-slate-800 prose-md block"
                    >
                        Телеграм
                    </Link>
                    <CopyToBufferLink
                        className="prose-md text-blue-500 hover:text-slate-800"
                        text="estate.valuation.tech@gmail.com"
                    />
                </div>
            </>
        </InfoHeader>
    );
});

export default AboutHeader;
