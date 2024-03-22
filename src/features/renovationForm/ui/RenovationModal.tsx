import DropdownInput from "@/shared/ui/DropdownInput";
import { memo, useEffect, useRef, useState } from "react";
import img1 from "../../../assets/imgs/renovation/1.png";
import img2 from "../../../assets/imgs/renovation/2.png";
import img3 from "../../../assets/imgs/renovation/3.png";
import img4 from "../../../assets/imgs/renovation/4.png";
import img5 from "../../../assets/imgs/renovation/5.png";
import img6 from "../../../assets/imgs/renovation/6.png";
import img7 from "../../../assets/imgs/renovation/7.png";
import img8 from "../../../assets/imgs/renovation/8.png";
import img9 from "../../../assets/imgs/renovation/9.png";
import img10 from "../../../assets/imgs/renovation/10.png";
import img11 from "../../../assets/imgs/renovation/11.png";
import RenovationCard from "./RenovationCard";
import { useDetectClickOutside } from "react-detect-click-outside";
import { RenovationsType } from "@/entities/form/model/valuesTypes.ts";

type Props = {
  setRenovationType: (type: RenovationsType) => void;
  currentRenovationType: string;
};

type Renovation = {
  name: string;
  img: typeof img1;
};

const RenovationModal = memo(
  ({ setRenovationType, currentRenovationType }: Props) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const detectOutsideRef = useDetectClickOutside({
      onTriggered: () => setIsModalOpen(false),
    });

    const renovationGroups = [
      "С ремонтом и мебелью",
      "С ремонтом и без мебели",
      "Без ремонта",
    ];
    const renovationTypes = {
      "С ремонтом и мебелью": [
        { name: "дизайнерский ремонт", img: img1 },
        { name: "евроремонт", img: img2 },
        { name: "косметический ремонт", img: img3 },
        { name: "старый ремонт", img: img4 },
      ],
      "С ремонтом и без мебели": [
        { name: "дизайнерский ремонт", img: img5 },
        { name: "евроремонт", img: img6 },
        { name: "косметический ремонт", img: img7 },
        { name: "старый ремонт", img: img8 },
      ],
      "Без ремонта": [
        { name: "предчистовая отделка", img: img9 },
        { name: "средняя отделка", img: img10 },
        { name: "черновая отделка", img: img11 },
      ],
    };
    const [renovationGroup, setRenovationGroup] = useState<string>(
      "С ремонтом и мебелью",
    );
    useEffect(() => {
      const modalElement = modalRef.current;
      if (modalElement) {
        if (isModalOpen) {
          modalElement.showModal();
        } else {
          modalElement.close();
        }
      }
    }, [isModalOpen]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    return (
      <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          type="button"
          className="link"
          onClick={() => setTimeout(() => setIsModalOpen(true), 10)}
        >
          Выбрать самостоятельно
        </button>
        <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
          <div
            ref={detectOutsideRef}
            className="modal-box h-[540px] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4 my-4 w-full">
              <h3 className="font-bold text-lg">Выберите тип ремонта</h3>
              <div>
                <DropdownInput
                  items={renovationGroups}
                  placeholder={renovationGroup}
                  onClick={(text) => setRenovationGroup(text)}
                >
                  {renovationGroup}
                </DropdownInput>
              </div>
              <div className="w-full gap-6 grid grid-cols-2">
                {
                  // @ts-ignore
                  renovationTypes[renovationGroup].map(
                    (renovation: Renovation) => (
                      <RenovationCard
                        group={renovationGroup}
                        setRenovationType={setRenovationType}
                        key={renovation.name}
                        text={renovation.name}
                        img={renovation.img}
                        active={
                          renovationGroup + " " + renovation.name ===
                          currentRenovationType
                        }
                      />
                    ),
                  )
                }
              </div>
            </div>
            <div className="modal-action ">
              <button className="btn" onClick={() => setIsModalOpen(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </dialog>
      </>
    );
  },
);

export default RenovationModal;
