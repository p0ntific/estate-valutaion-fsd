import ObjectChip from "@/widgets/map/ui/ObjectChip.tsx";
import { InfrastuctureListType } from "@/entities/map/model/infrastructureTypes.ts";
import {
  allPositionsType,
  CoordinatesType,
  Variant,
} from "@/entities/map/model/mapTypes.ts";

interface Props {
  infrastructure: InfrastuctureListType;
  handleClickInfrastructure: (els: CoordinatesType[]) => void;
  positions: allPositionsType;
}
const InfrastructureChips = ({
  infrastructure,
  handleClickInfrastructure,
  positions,
}: Props) => {
  const infrastructureChips: JSX.Element[] = [];
  for (let key in infrastructure) {
    infrastructureChips.push(
      <ObjectChip
        key={key}
        variant={key as Variant}
        onClick={() => {
          handleClickInfrastructure(
            // @ts-ignore
            positions["Инфраструктура"].map((el) => el.position),
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
};

export default InfrastructureChips;
