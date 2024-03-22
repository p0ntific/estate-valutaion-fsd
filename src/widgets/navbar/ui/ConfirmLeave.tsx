import { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useNavigate } from "react-router-dom";

function ConfirmLeave() {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const detectOutsideRef = useDetectClickOutside({
        onTriggered: () => setIsModalOpen(false),
    });

    const navigate = useNavigate();
    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                type="button"
                className="hover:bg-base-200 rounded-lg py-1 px-4 transition w-full text-start"
                onClick={() => setTimeout(() => setIsModalOpen(true), 10)}
            >
                Выйти
            </button>
            <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
                <div
                    ref={detectOutsideRef}
                    className="modal-box w-96 flex flex-col justify-between"
                >
                    <div className="flex flex-col gap-4 my-4 w-full">
                        <h1 className="text-2xl font-bold">
                            Вы точно хотите выйти?
                        </h1>
                        <div className="flex gap-4 mt-20 justify-end">
                            <button
                                className="btn w-32"
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    setTimeout(() => navigate("/about"), 1);
                                    setTimeout(() => navigate("/"), 2);
                                }}
                            >
                                Да
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="btn btn-neutral w-32"
                            >
                                Нет
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default ConfirmLeave;
