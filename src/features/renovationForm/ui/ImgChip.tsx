import { memo } from "react";

type Props = {
    children: JSX.Element | string | null | undefined;
    onClick?: () => void;
};

const ImgChip = memo(({ children, onClick }: Props) => {
    return (
        <div className="h-8 w-28 min-w-fit px-2 gap-2 text-white cursor-pointer text-sm flex justify-between  items-center hover:bg-slate-700 transition overflow-hidden bg-blue-400 rounded-lg">
            {children}
            <svg
                onClick={onClick}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 p-1 hover:bg-slate-500 rounded-full"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </div>
    );
});

export default ImgChip;
