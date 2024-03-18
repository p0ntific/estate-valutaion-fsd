import SimilarHouseCard from "./ui/SimilarHouseCard";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";

interface Props {
  similarObjects: SimilarObjectsType[];
}

function Similar({ similarObjects }: Props) {
  return (
    <>
      <h1 className="mt-6 prose-2xl">Похожие квартиры</h1>
      <div className="flex flex-col gap-4 w-full">
        {similarObjects.map((el: SimilarObjectsType, id: number) => (
          <SimilarHouseCard key={id + "similarHouseCard"} {...el} />
        ))}
      </div>
    </>
  );
}

export default Similar;
