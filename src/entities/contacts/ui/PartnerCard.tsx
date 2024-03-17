import { Partner } from "@/shared/config/partnerType";
import { memo } from "react";

const PartnerCard = memo(({ img, name }: Partner) => {
    return (
        <div className="card sm:w-96 w-full bg-base-200 flex flex-col sm:flex-row items-center h-40 gap-4 justify-center">
            <img src={img} alt="лого" className="w-16 rounded-xl" />
            <h3 className="prose-xl font-bold">{name}</h3>
        </div>
    );
});

export default PartnerCard;
