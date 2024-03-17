import { renovationTypes } from "./getRepair";

export default function getRenovationTypeFromResponse(res: string) {
    const ans = renovationTypes.find((el) => el.value === res)?.text;
    if (ans) return ans;
    return "Без ремонта черновая отделка";
}
