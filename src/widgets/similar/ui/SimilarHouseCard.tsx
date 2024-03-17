import { HouseType } from "@/entities/houses/module/houseType";
import SimilarHouseMap from "./SimilarHouseMap";

function SimilarHouseCard(props: HouseType) {
    const interestingInfo = [
        { value: props.cnt_rooms, text: "Количество комнат" },
        { value: props.area, text: "Площадь" },
        { value: props.floor, text: "Этаж" },
        { value: props.floors, text: "Всего этажей" },
        { value: props.text, text: "Описание" },
    ];
    return (
        <div className="collapse bg-blue-50 sm:px-4">
            <input type="checkbox" />
            <div className="collapse-title w-full">
                <div className="flex sm:flex-row gap-2 sm:gap-0 flex-col w-full text-md">
                    <h2>{props.address}</h2>
                    <span className="sm:ml-auto font-bold">
                        {props.price / 1000000} млн.р
                    </span>
                </div>
            </div>
            <div className="collapse-content">
                <div className="w-full flex md:flex-row flex-col gap-4 md:h-64">
                    <div className="md:w-2/3 h-64 md:h-full rounded-xl overflow-hidden">
                        <SimilarHouseMap {...props} />
                    </div>
                    <div className="md:w-1/3 flex flex-col gap-2">
                        {interestingInfo.map((el, id) => (
                            <div
                                className="font-bold prose-md"
                                key={id + "similarHouseCardInfo"}
                            >
                                {el.text}:{" "}
                                <span className="font-medium">
                                    {el.value ? el.value : "неизвестно"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimilarHouseCard;
