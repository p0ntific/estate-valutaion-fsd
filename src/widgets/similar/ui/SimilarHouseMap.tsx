import { HouseType } from "@/entities/houses/module/houseType";
import {
    YMap,
    YMapDefaultFeaturesLayer,
    YMapDefaultMarker,
    YMapDefaultSchemeLayer,
} from "ymap3-components";

function SimilarHouseMap(props: HouseType) {
    return (
        <YMap
            location={{
                zoom: 11,
                center: props.position,
            }}
        >
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />

            <YMapDefaultMarker
                title={props.address}
                color="#60a5fa"
                coordinates={props.position}
            />
        </YMap>
    );
}

export default SimilarHouseMap;
