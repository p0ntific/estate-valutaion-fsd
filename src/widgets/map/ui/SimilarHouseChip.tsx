
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
            <div className="py-2 px-2 w-full gap-2 btn btn-ghost ">
                <div className="flex flex-col">
                    <h2 className="text-sm font-bold">
                        {address.slice(0, 35)}
                    </h2>
                    <span className="text-xs text-neutral-400">
                        {cost / 1000000} млн.р
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SimilarHouseChip;
