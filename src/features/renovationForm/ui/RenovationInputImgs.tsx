import { useDropzone } from "react-dropzone";
import ImgType from "../model/imgType";
import ImgChip from "./ImgChip";
import { memo, useCallback } from "react";
import dropdown from "../../../assets/imgs/dropdown.svg";
import dropdownActive from "../../../assets/imgs/dropdownActive.svg";
import { useHorizontalScroll } from "@/shared/libs/useHorizontalScroll";

type Props = {
    deleteImg: (id: number) => void;
    imgs: ImgType[];
    addImg: (img: ImgType) => void;
};

const RenovationInputImgs = memo(({ imgs, deleteImg, addImg }: Props) => {
    const onDrop = useCallback(
        (acceptedFiles: (typeof dropdown)[]) => {
            acceptedFiles.forEach((img) => {
                addImg({ img: img, id: Math.random() });
            });
        },
        [addImg]
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    const scrollRef = useHorizontalScroll();
    return (
        <div className="flex flex-col gap-4">
            <div
                className=" border stroke rounded-xl w-full h-60 py-8 px-6 flex flex-col items-center justify-center gap-4"
                {...getRootProps()}
            >
                {!isDragActive ? (
                    <>
                        <img src={dropdown} alt="" className="w-16 " />
                    </>
                ) : (
                    <>
                        <img src={dropdownActive} alt="" className="w-16 " />
                    </>
                )}
                <p className="prose-md font-bold">Перенесите файл</p>
                <div className="btn btn-neutral bg-blue-500 text-white btn-md">
                    <input className="hidden" {...getInputProps} />
                    выберите файлы
                </div>
            </div>
            <div className="w-full overflow-hidden">
                <div
                    className="flex gap-4 w-full overflow-y-hidden overflow-x-scroll no-scroll"
                    ref={scrollRef}
                >
                    {imgs.map((item) => (
                        <ImgChip
                            key={item.id}
                            onClick={() => deleteImg(item.id)}
                        >
                            {item.img.path.slice(0, 15)}
                        </ImgChip>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default RenovationInputImgs;
