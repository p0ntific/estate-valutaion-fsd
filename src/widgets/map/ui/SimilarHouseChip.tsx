interface Props {
  address: string;
  cost: number;
  onClick: () => void;
}

function SimilarHouseChip({ address, cost, onClick }: Props) {
  return (
    <div
      className="tooltip tooltip-top"
      data-tip={`${address} \n Нажмите чтобы перейти.`}
      onClick={onClick}
    >
      <div className="py-2 px-4 h-full flex lg:justify-start w-full gap-2 btn btn-ghost text-center lg:text-start ">
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-sm font-bold text-nowrap">{address}</h2>
          <span className="text-xs text-neutral-400">
            {cost / 1000000} млн.р
          </span>
        </div>
      </div>
    </div>
  );
}

export default SimilarHouseChip;
