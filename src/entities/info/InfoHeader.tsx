import { memo } from "react";

type Props = {
    children: JSX.Element | string;
    className: string;
};

const InfoHeader = memo(({ children, className }: Props) => {
    return (
        <div
            className={`py-4 px-6 border rounded-xl border-blue-500 ${className}`}
        >
            {children}
        </div>
    );
});

export default InfoHeader;
