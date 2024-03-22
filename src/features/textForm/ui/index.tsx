import { FormikState } from "../module/formikInterface";
import AddressInput from "./AddressInput";
import DropdownInput from "@/shared/ui/DropdownInput";
import TextInput from "@/shared/ui/TextInput";
import CheckboxComponent from "@/shared/ui/CheckboxComponent";
import {
  FormValuesType,
  HouseMaterialType,
  RoomsType,
} from "@/entities/form/model/valuesTypes.ts";

function TextForm({
  values,
  errors,
  touched,
  className,
  setFieldValue,
}: FormikState<FormValuesType>) {
  const houseType: HouseMaterialType[] = [
    "Кирпичный",
    "Блочный",
    "Монолитный",
    "Панельный",
    "Деревянный",
    "Сталинский",
    "Кирпично-монолитный",
  ];
  const roofType = ["Первичка", "Вторичка"];
  const rooms: RoomsType[] = [
    "1-комнатная",
    "2-комнатная",
    "3-комнатная",
    "4-комнатная",
    "5-комнатная",
    "Студия",
  ];
  const tags = [
    {
      text: "есть лифт",
      name: "hasLift",
    },
    {
      text: "Парковка на крыше",
      name: "parkingOnRoof",
    },
    {
      text: "Наземная парковка",
      name: "parkingOnGround",
    },
    {
      text: "Подземная парковка",
      name: "parkingUnderGround",
    },
  ];
  const handleDropdown = (name: string, text: string) => {
    setFieldValue(name, text);
  };
  return (
    <>
      <div className={` ${className}`}>
        <h2 className="prose-lg font-semibold block mb-6 lg:hidden">
          Информация о квартире
        </h2>
        <AddressInput
          className=""
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />
        <div className="md:flex grid sm:grid-cols-2 gap-4 mt-4 w-full">
          <DropdownInput
            items={houseType}
            className={"md:w-3/12 w-full "}
            placeholder="Тип дома"
            onClick={(el) => handleDropdown("houseType", el)}
          >
            {!values.houseType
              ? "Тип дома"
              : values.houseType.slice(0, 5) + "..."}
          </DropdownInput>
          <DropdownInput
            items={roofType}
            className={"md:w-4/12 w-full"}
            placeholder="Тип квартиры"
            onClick={(el) => handleDropdown("roofType", el)}
          >
            {!values.roofType ? "Тип квартиры" : values.roofType}
          </DropdownInput>
          <DropdownInput
            items={rooms}
            className={"md:w-5/12 w-full"}
            placeholder="Количество комнат"
            onClick={(el) => handleDropdown("rooms", el)}
          >
            {!values.rooms ? "Количество комнат" : values.rooms}
          </DropdownInput>
          <TextInput
            className="md:hidden w-full"
            type="number"
            name="square"
            min="1"
            placeholder="Площадь (м²)"
            isError={!!(errors.square && touched.square)}
          ></TextInput>
          <TextInput
            type="number"
            className="md:hidden w-full"
            min="1"
            name="floor"
            isError={!!(errors.floor && touched.floor)}
            placeholder="Этаж"
          ></TextInput>
          <TextInput
            type="number"
            className="md:hidden w-full"
            min="1"
            name="floorTotal"
            isError={!!(errors.floorTotal && touched.floorTotal)}
            placeholder="Этажность дома"
          ></TextInput>
        </div>
        <div className="hidden md:flex gap-4 mt-6">
          <TextInput
            className="md:w-3/12"
            type="number"
            name="square"
            min="1"
            isError={!!(errors.square && touched.square)}
            label="Площадь м²"
          ></TextInput>
          <TextInput
            type="number"
            className="md:w-4/12 w-full"
            min="1"
            name="floor"
            isError={!!(errors.floor && touched.floor)}
            label="Этаж"
          ></TextInput>
          <TextInput
            type="number"
            className="md:w-5/12 w-full"
            min="1"
            name="floorTotal"
            isError={!!(errors.floorTotal && touched.floorTotal)}
            label="Этажность дома"
          ></TextInput>
        </div>
        <div className="flex flex-col gap-6 mt-6 sm:text-start">
          <h2 className="prose-lg font-semibold ">Дополнительная информация</h2>
          <div className="md:flex grid sm:grid-cols-2 gap-5 md:flex-wrap w-full">
            {tags.map((tag) => (
              <CheckboxComponent name={tag.name} key={tag.text}>
                {tag.text}
              </CheckboxComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
