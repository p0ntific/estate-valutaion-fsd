import ObjectChip from "@/widgets/map/ui/ObjectChip.tsx";
import {
  InfrastructureItemType,
  InfrastructureListType,
} from "@/entities/map/model/infrastructureTypes.ts";
import {
  allPositionsType,
  CoordinatesType,
  Variant,
} from "@/entities/map/model/mapTypes.ts";
import { memo } from "react";

interface Props {
  infrastructure: InfrastructureListType;
  handleClickInfrastructure: (els: CoordinatesType[]) => void;
  positions: allPositionsType;
}
const InfrastructureChips = memo(
  ({ infrastructure, handleClickInfrastructure }: Props) => {
    const infrastructureChips: JSX.Element[] = [];
    for (const key in infrastructure) {
      infrastructureChips.push(
        <ObjectChip
          key={key}
          variant={key as Variant}
          onClick={() => {
            handleClickInfrastructure(
              // @ts-ignore
              infrastructure[key].items.map((el: InfrastructureItemType) => [
                el.point[1],
                el.point[0],
              ]),
            );
          }}
        />,
      );
    }
    return (
      <div className="w-full gap-2 flex md:gap-2 flex-wrap">
        {infrastructureChips}
      </div>
    );
  },
);

export default InfrastructureChips;
