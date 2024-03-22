import AiCost from "@/widgets/aiCost";
import MapComponent from "@/widgets/map/index.ts";
import Similar from "@/widgets/similar";
import { YMapComponentsProvider } from "ymap3-components";
import AiResultType from "@/widgets/mainForm/model/responseType.ts";
import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";
import { useEffect } from "react";
interface Props {
  data: AiResultType;
  leave: () => void;
}

function Result({ data, leave }: Props) {
  useEffect(() => {
    if (!data) leave();
  }, [data]);
  if (!data) return <div className="loading"></div>;
  const positionOnMap: CoordinatesType = [data.longitude, data.latitude];
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <YMapComponentsProvider apiKey={"4b2e38aa-c9fd-4138-aab0-fe2455374d9c"}>
        <AiCost cost={data.price} />
        <MapComponent
          houseInfo={data?.house_info}
          houseCenter={positionOnMap}
          infrastructure={data.infrastructure}
          similarObjects={data.similar_objects}
        />
        <Similar similarObjects={data.similar_objects} />
      </YMapComponentsProvider>
    </div>
  );
}

export default Result;
