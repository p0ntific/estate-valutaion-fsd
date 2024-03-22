import { RoomsType } from "@/entities/form/model/valuesTypes.ts";

export const getCntRooms = (type: RoomsType) => {
  if (type === "1-комнатная") return 1;
  if (type === "2-комнатная") return 2;
  if (type === "3-комнатная") return 3;
  if (type === "4-комнатная") return 4;
  if (type === "5-комнатная") return 5;
  if (type === "Студия") return 0.7;
  else return 1;
};
