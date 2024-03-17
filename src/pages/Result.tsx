import AiCost from "@/widgets/aiCost";
import MapComponent from "@/widgets/map";
import Similar from "@/widgets/similar";
import { YMapComponentsProvider } from "ymap3-components";



function Result() {

    return (
        <div className="flex flex-col gap-12 justify-center items-center">
            <YMapComponentsProvider
                apiKey={"4b2e38aa-c9fd-4138-aab0-fe2455374d9c"}
            >
                <AiCost />
                <MapComponent  />
                <Similar />
            </YMapComponentsProvider>
        </div>
    );
}

export default Result;
