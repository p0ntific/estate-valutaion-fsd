import {
    RenovationsType,
    RenovationsTypeReversed,
} from "../../model/valuesTypes";
import { renovationTypes } from "./getRepair";

export function getRenovationTypeFromResponse(
    res: RenovationsTypeReversed
): RenovationsType {
    const ans = renovationTypes.find((el) => el.value === res)?.text;
    if (ans) return ans;
    return "Без ремонта черновая отделка";
}
