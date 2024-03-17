export interface HouseType {
    address: string;
    area: number;
    cnt_rooms: number;
    floor: number;
    floors: number;
    has_lift: number;
    house_material: string;
    object_type: 1 | 2;
    parking_type: string;
    position: [number, number];
    price: number;
    repair: string;
    text: string;
}
