import { FormValuesWithRenovationType } from "../../model/valuesTypes";
import { GetPriceDto } from "../dto/getPrice.dto";
import { getHouseMaterial } from "./getHouseMaterial";
import { getParkingType } from "./getParkingType";
import { getRepair } from "./getRepair";
import { getCntRooms } from "@/entities/form/api/mapper/getCntRooms.ts";

export function convertFormikToRequestBody(
  values: FormValuesWithRenovationType,
): GetPriceDto {
  return {
    address: values.address,
    area: +values?.square,
    cnt_rooms: getCntRooms(values.rooms),
    floor: +values?.floor,
    floors: +values?.floorTotal,
    has_lift: values?.hasLift ? 1 : 0,
    house_material: getHouseMaterial(values.houseType),
    repair: getRepair(values.renovation),
    text: "Info",
    object_type: values?.roofType.toLowerCase() === "первичка" ? 1 : 2,
    parking_type: getParkingType({
      parkingOnRoof: values?.parkingOnRoof,
      parkingOnGround: values?.parkingOnGround,
      parkingUnderGround: values?.parkingUnderGround,
    }),
  };
}
