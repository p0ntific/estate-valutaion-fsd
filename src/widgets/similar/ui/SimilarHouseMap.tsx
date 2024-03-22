import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
} from "ymap3-components";
import { SimilarObjectsType } from "@/features/similarObjects/model/similarObjectsTypes.ts";
import { CoordinatesType } from "@/entities/map/model/mapTypes.ts";

function SimilarHouseMap(props: SimilarObjectsType) {
  const center: CoordinatesType = [props.longitude, props.latitude];
  return (
    <YMap
      location={{
        zoom: 14,
        center: center,
      }}
    >
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      <YMapDefaultMarker
        title={props.address}
        color="#60a5fa"
        coordinates={center}
      />
    </YMap>
  );
}

export default SimilarHouseMap;
