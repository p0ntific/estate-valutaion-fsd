import { getHouseMaterial } from "@/entities/form/api/mapper/getHouseMaterial";
import { getParkingType } from "@/entities/form/api/mapper/getParkingType";
import { getRenovationTypeFromResponse } from "@/entities/form/api/mapper/getRenovationTypeFromResponse";
import { getRepair } from "@/entities/form/api/mapper/getRepair";
import { convertFormikToRequestBody } from "@/entities/form/api/mapper/convertFormikToRequestBody";
import { FormValuesWithRenovationType } from "@/entities/form/model/valuesTypes";
import { expect, test } from "vitest";

test("Get house material", () => {
    expect(getHouseMaterial("Кирпичный")).toEqual("brc");
    expect(getHouseMaterial("Деревянный")).toEqual("wdn");
});
test("Get parking type", () => {
    expect(
        getParkingType({
            parkingOnRoof: true,
            parkingOnGround: true,
            parkingUnderGround: true,
        })
    ).toEqual("mlt");
    expect(
        getParkingType({
            parkingOnRoof: true,
            parkingOnGround: false,
            parkingUnderGround: true,
        })
    ).toEqual("mlt");
    expect(
        getParkingType({
            parkingOnRoof: true,
            parkingOnGround: false,
            parkingUnderGround: false,
        })
    ).toEqual("orf");
    expect(
        getParkingType({
            parkingOnRoof: false,
            parkingOnGround: false,
            parkingUnderGround: false,
        })
    ).toEqual("0");
});
test("Get repair", () => {
    expect(getRepair("С ремонтом и мебелью дизайнерский ремонт")).toEqual(
        "3;2"
    );
    expect(getRepair("С ремонтом и без мебели дизайнерский ремонт")).toEqual(
        "3;1"
    );
    expect(getRepair("Без ремонта средняя отделка")).toEqual("1;0");
});
test("Get renovation type from response", () => {
    expect(getRenovationTypeFromResponse("3;2")).toEqual(
        "С ремонтом и мебелью дизайнерский ремонт"
    );
    expect(getRenovationTypeFromResponse("3;1")).toEqual(
        "С ремонтом и без мебели дизайнерский ремонт"
    );
    expect(getRenovationTypeFromResponse("1;0")).toEqual(
        "Без ремонта средняя отделка"
    );
});
test("Get form for request", () => {
    const value = {
        address: "Улица пушкина дом 2",
        houseType: "Блочный",
        roofType: "Первичка",
        rooms: "3",
        square: "55",
        floor: "15",
        floorTotal: "25",
        hasLift: true,
        parkingOnRoof: true,
        parkingOnGround: false,
        parkingUnderGround: false,
        renovation: "С ремонтом и мебелью дизайнерский ремонт",
    };
    expect(
        convertFormikToRequestBody(value as FormValuesWithRenovationType)
    ).toEqual({
        address: "Улица пушкина дом 2",
        area: 55,
        cnt_rooms: 3,
        floor: 15,
        has_lift: 1,
        house_material: "blc",
        object_type: 1,
        parking_type: "orf",
        repair: "3;2",
        text: "",
    });
});
