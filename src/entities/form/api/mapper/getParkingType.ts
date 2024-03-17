import { ParkingsType, ParkingsTypeReversed } from "../../model/valuesTypes";

export function getParkingType({
    parkingOnRoof,
    parkingOnGround,
    parkingUnderGround,
}: ParkingsType): ParkingsTypeReversed {
    //orf - на крыше, grn - на земле, und - под землей, mlt - многоуровневая, 0 - нету
    if (!parkingOnRoof && !parkingOnGround && !parkingUnderGround) return "0";
    if (+parkingOnGround + +parkingOnRoof + +parkingUnderGround >= 2)
        return "mlt";
    if (parkingOnGround) return "grn";
    if (parkingOnRoof) return "orf";
    else return "und";
}
