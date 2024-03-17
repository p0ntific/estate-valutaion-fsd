type RenovationInfo = {
    text: string;
    value: string;
};

export const renovationTypes: RenovationInfo[] = [
    { text: "С ремонтом и мебелью дизайнерский ремонт", value: "3;2" },
    { text: "С ремонтом и мебелью евроремонт", value: "2;2" },
    { text: "С ремонтом и мебелью косметический ремонт", value: "1;2" },
    { text: "С ремонтом и мебелью старый ремонт", value: "0;2" },
    { text: "С ремонтом и без мебели дизайнерский ремонт", value: "3;1" },
    { text: "С ремонтом и без мебели евроремонт", value: "2;1" },
    { text: "С ремонтом и без мебели косметический ремонт", value: "1;1" },
    { text: "С ремонтом и без мебели старый ремонт", value: "0;1" },
    { text: "Без ремонта предчистовая отделка", value: "2;0" },
    { text: "Без ремонта средняя отделка", value: "1;0" },
    { text: "Без ремонта черновая отделка", value: "0;0" },
];

export function getRepair(renovation: string): string {
    const ans = renovationTypes.find((el) => el.text === renovation)?.value;
    if (ans) return ans;
    return "0;0";
}
