import SimilarHouseCard from "./ui/SimilarHouseCard";
import { HouseType } from "@/entities/houses/module/houseType";

function Similar() {
    const similarHouses = JSON.parse(localStorage.getItem("similar_objects"));

    return (
        <>
            <h1 className="mt-6 prose-2xl">Похожие квартиры</h1>
            <div className="flex flex-col gap-4 w-full">
                {similarHouses.map((el: HouseType, id: number) => (
                    <SimilarHouseCard key={id + "similarHouseCard"} {...el} />
                ))}
            </div>
        </>
    );
}

export default Similar;
