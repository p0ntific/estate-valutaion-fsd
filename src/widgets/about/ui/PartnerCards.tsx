import PartnerCard from "@/entities/contacts/ui/PartnerCard";
import { partnerData } from "@/shared/config/contacts";
import { memo } from "react";

const PartnerCards = memo(() => {
    return (
        <div className="flex flex-wrap gap-10 justify-center pb-20">
            {partnerData.map((partner, id) => (
                <PartnerCard key={id + "partner"} {...partner} />
            ))}
        </div>
    );
});

export default PartnerCards;
