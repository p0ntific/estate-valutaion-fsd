import { RenovationForm } from "@/features/renovationForm";
import { TextForm } from "@/features/textForm";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FormValuesType } from "@/entities/form/model/formValues";
import ImgType from "@/features/renovationForm/model/imgType";
import { memo, useState } from "react";
const validationsSchema = yup.object().shape({
    address: yup
        .string()
        .typeError("Должно быть строкой")
        .required("Обязательно"),
});

const MainForm = memo(() => {
    const initialValues: FormValuesType = {
        address: "",
        roofType: "",
        houseType: "",
        rooms: "",
        square: "",
        floor: "",
        floorTotal: "",
        hasLift: false,
        parkingOnRoof: false,
        parkingOnGround: false,
        parkingUnderGround: false,
        mapStatus: "О доме",
    };
    const [renovationType, setRenovationType] = useState("");
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
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values, errors, touched, setFieldValue }) => {
                return (
                    <Form className="flex flex-col gap-8 max-w-full text-center border bg-blue-50 border-blue-500 rounded-xl py-12 px-4 sm:px-8 xl:px-12">
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
                                setRenovationType={(text) =>
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
                            onClick={() => {}}
                            className={`btn mt-6 text-white bg-blue-500 border-0 btn-neutral`}
                        >
                            Узнать цену
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
});

export default MainForm;
