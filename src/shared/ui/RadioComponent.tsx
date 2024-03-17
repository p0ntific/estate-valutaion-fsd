import { Card, List, ListItem, Typography } from "@material-tailwind/react";

type Props = {
    options: string[];
    name: string;
    size: string;
};

export default function RadioComponent({ options, name, size }: Props) {
    return (
        <Card placeholder={""} className={`w-full shadow-none`}>
            <List placeholder={""} className="flex-row">
                {options.map((option, index) => (
                    <ListItem
                        key={name + index}
                        placeholder={""}
                        className={`p-0 ${size} peer-checked:bg-red-500`}
                    >
                        <input
                            type="radio"
                            className="hidden peer"
                            name={name}
                            id={name + index}
                        />
                        <label
                            htmlFor={name + index}
                            className="flex w-full peer-checked:text-white group cursor-pointer items-center px-3 py-2 peer-checked:bg-blue-400"
                        >
                            <Typography
                                placeholder={""}
                                color="blue-gray"
                                className="font-medium text-inherit"
                            >
                                {option}
                            </Typography>
                        </label>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
}
