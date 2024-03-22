import { RenovationForm } from "@/features/renovationForm";
import { TextForm } from "@/features/textForm";
import { Formik, Form } from "formik";
import * as yup from "yup";
import ImgType from "@/features/renovationForm/model/imgType";
import { memo, useState } from "react";
import { Persist } from "formik-persist";
import {
  FormValuesType,
  FormValuesWithRenovationType,
  RenovationsType,
} from "@/entities/form/model/valuesTypes.ts";
const validationsSchema = yup.object().shape({
  address: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Обязательно"),
});

interface Props {
  isPending: boolean;
  mutate: (body: FormValuesWithRenovationType) => void;
}

const MainForm = memo(({ isPending, mutate }: Props) => {
  const initialValues: FormValuesType = {
    address: "",
    roofType: "Первичка",
    houseType: "Кирпичный",
    rooms: "1-комнатная",
    square: "",
    floor: "",
    floorTotal: "",
    hasLift: false,
    parkingOnRoof: false,
    parkingOnGround: false,
    parkingUnderGround: false,
  };
  const [renovationType, setRenovationType] = useState<RenovationsType>(
    "Без ремонта средняя отделка",
  );
  const [imgs, setImgs] = useState<ImgType[]>([]);

  const addImg = (img: ImgType) => {
    setImgs((prev) => [...prev, img]);
  };
  const deleteImg = (id: number) => {
    setImgs([...imgs].filter((img) => img.id !== id));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationsSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched, setFieldValue }) => {
        return (
          <Form className="flex flex-col gap-8 max-w-full text-center border bg-blue-50 border-blue-500 rounded-xl py-12 px-4 sm:px-8 xl:px-12">
            <Persist name={"main-form"} />
            <h1 className="prose-2xl font-bold mb-4">
              Рассчитайте стоимость квартиры
            </h1>
            <div className="flex gap-8 xl:gap-12 lg:flex-row flex-col">
              <TextForm
                className="lg:w-2/3 w-full"
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
              />
              <RenovationForm
                setRenovationType={(text: RenovationsType) =>
                  setRenovationType(text)
                }
                currentRenovationType={renovationType}
                deleteImg={deleteImg}
                imgs={imgs}
                addImg={addImg}
                className="w-full lg:w-1/3"
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                mutate({ ...values, renovation: renovationType });
              }}
              className={`btn mt-6 text-white bg-blue-500 border-0 btn-neutral`}
            >
              {!isPending ? (
                "Узнать цену"
              ) : (
                <span className="loading w-6 h-6"></span>
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
});

export default MainForm;
