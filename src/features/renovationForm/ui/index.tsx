import { useEffect, useState } from "react";
import ImgType from "../model/imgType";
import RenovationInputImgs from "./RenovationInputImgs";
import RenovationModal from "./RenovationModal";
import AlertComponent from "@/shared/ui/AlertComponent";
import { useGetRenovationType } from "../api/useGetRenovationType";
import { getRenovationTypeFromResponse } from "@/entities/form/api/mapper/getRenovationTypeFromResponse";
import { RenovationsType } from "@/entities/form/model/valuesTypes.ts";

type Props = {
  className: string;
  addImg: (img: ImgType) => void;
  deleteImg: (id: number) => void;
  imgs: ImgType[];
  setRenovationType: (type: RenovationsType) => void;
  currentRenovationType: string;
};

function RenovationForm({
  className,
  deleteImg,
  imgs,
  addImg,
  setRenovationType,
  currentRenovationType,
}: Props) {
  const [alertIsShowing, setAlertIsShowing] = useState(false);

  const { data, mutate, isPending, isError } = useGetRenovationType();

  const getRenovationType = (imgs: ImgType[]) => {
    setAlertIsShowing(false);
    const imgsOnly = imgs.map((el) => el.img);
    mutate({ images: imgsOnly });
  };

  useEffect(() => {
    if (!isPending && data) {
      setAlertIsShowing(true);
      if (data?.data?.repair)
        setRenovationType(getRenovationTypeFromResponse(data?.data?.repair));
      setTimeout(() => setAlertIsShowing(false), 5000);
    } else if (!isPending && isError) {
      setAlertIsShowing(true);
      setTimeout(() => setAlertIsShowing(false), 5000);
    }
    // проверяет что окончилась загрузка получения ремонта
  }, [isPending, data, isError]);

  return (
    <>
      <div className={`${className} flex flex-col`}>
        <div className="gap-5 flex flex-col">
          <h2 className="prose-lg  font-semibold">Определить тип ремонта</h2>
          <RenovationInputImgs
            addImg={addImg}
            imgs={imgs}
            deleteImg={deleteImg}
          />
        </div>
        <button
          type="button"
          onClick={() => getRenovationType(imgs)}
          className="btn btn-neutral mb-2 bg-blue-500 text-white btn-md"
        >
          {isPending ? <span className="loading"></span> : "Узнать тип"}
        </button>
        <RenovationModal
          currentRenovationType={currentRenovationType}
          setRenovationType={setRenovationType}
        />
      </div>
      {isError ? (
        <AlertComponent className={`alert-error`} active={alertIsShowing}>
          <>
            <h2 className="prose-md font-bold">
              Не удалось получить тип ремонта!
            </h2>
            <p className="prose-sm">{`Для получения ремонта нужно зарегистрироваться. Проверьте фото.`}</p>
          </>
        </AlertComponent>
      ) : (
        <AlertComponent className={`bg-blue-400`} active={alertIsShowing}>
          <>
            <h2 className="prose-md font-bold">
              У вашей квартиры тип - {currentRenovationType.toLowerCase()}
            </h2>
            <p className="prose-sm">{` Можете не беспокоиться, мы сами его установили вам:)`}</p>
          </>
        </AlertComponent>
      )}
    </>
  );
}

export default RenovationForm;
