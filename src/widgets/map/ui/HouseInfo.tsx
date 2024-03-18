import { HouseInfoType } from "@/entities/map/model/HouseInfoTypes.ts";

interface Props {
  houseInfo: HouseInfoType;
}
const HouseInfo = ({ houseInfo }: Props) => {
  return (
    <div className="flex gap-4 flex-col text-start">
      <div className=" prose-md">
        <span className="mr-2 font-bold">Год строительства:</span>
        {houseInfo?.year ? houseInfo?.year : "неизвестно"}
      </div>
      <div className=" prose-md">
        <span className="mr-2 font-bold">Есть газ: </span>
        {houseInfo?.gas ? houseInfo?.gas : "неизвестно"}
      </div>
      <div className=" prose-md">
        <span className="mr-2 font-bold">Есть горячее водоснабжение: </span>
        {houseInfo?.hot_water ? houseInfo?.hot_water : "неизвестно"}
      </div>
      <div className=" prose-md">
        <span className="mr-2 font-bold">Количество подьездов: </span>
        {houseInfo?.count_entrances ? houseInfo?.count_entrances : "неизвестно"}
      </div>
    </div>
  );
};

export default HouseInfo;
