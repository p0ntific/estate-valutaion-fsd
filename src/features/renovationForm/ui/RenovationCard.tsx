import { memo } from "react";
import logo from "../../../assets/imgs/gpbLogo.png";
import { RenovationsType } from "@/entities/form/model/valuesTypes.ts";

type Props = {
  img: typeof logo;
  text: string;
  active: boolean;
  setRenovationType: (type: RenovationsType) => void;
  group: string;
};

const RenovationCard = memo(
  ({ img, text, active, setRenovationType, group }: Props) => {
    return (
      <div
        onClick={() => {
          setRenovationType((group + " " + text) as RenovationsType);
        }}
        className={`card w-full h-44 shadow-md hover:bg-base-200 cursor-pointer transition ${
          active ? "border-2 border-blue-500" : ""
        }`}
      >
        <figure className="h-32">
          <img src={img} alt="" className="h-full" />
        </figure>
        <div className="card-body p-0 flex justify-center items-center px-4 prose-sm font-semibold h-12">
          {text}
        </div>
      </div>
    );
  },
);

export default RenovationCard;
