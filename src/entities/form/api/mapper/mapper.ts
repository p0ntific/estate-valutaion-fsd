import { FormValuesWithRenovationType } from "../../model/formValuesWithRenovation";
import { GetPriceDto } from "../dto/getPrice.dto";
import { getHouseMaterial } from "./getHouseMaterial";
import { getParkingType } from "./getParkingType";
import { getRepair } from "./getRepair";

export default function convertFormikToRequestBody(
    values: FormValuesWithRenovationType
): GetPriceDto {
    return {
        address: values.address,
        area: +values.square.replace(/\D/g, ""),
        cnt_rooms: +values.rooms.replace(/\D/g, ""),
        floor: +values.floor.replace(/\D/g, ""),
        has_lift: +values.hasLift,
        house_material: getHouseMaterial(values.houseType),
        object_type: values.roofType.toLowerCase() === "первичка" ? 1 : 2,
        parking_type: getParkingType({
            parkingOnRoof: values.parkingOnRoof,
            parkingOnGround: values.parkingOnGround,
            parkingUnderGround: values.parkingUnderGround,
        }),
        repair: getRepair(values.renovation),
        text: "",
    };
}
