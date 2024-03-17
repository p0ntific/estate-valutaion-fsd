import { useEffect, useState } from "react";
import { TextFormType } from "../module/textFormType";
import { FormikState } from "../module/formikInterface";
import { useDebouncedCallback } from "use-debounce";
import { useGetAddressHints } from "../api/useGetAddressHints";
import TextInput from "@/shared/ui/TextInput";
import { useDetectClickOutside } from "react-detect-click-outside";

type Suggestion = {
    value: string;
};

function AddressInput({
    values,
    errors,
    touched,
    setFieldValue,
}: FormikState<TextFormType>) {
    const { data, mutate, isPending } = useGetAddressHints();
    const [hintsIsShown, setHintsIsShown] = useState(false);
    const ref = useDetectClickOutside({
        onTriggered: () => setHintsIsShown(false),
    });
    const debounced = useDebouncedCallback(
        // callback
        (value) => {
            mutate(value);
        },
        // delay in ms
        700
    );
    useEffect(() => {
        debounced(values.address);
    }, [values.address]);
    return (
        <div className="relative text-start" ref={ref}>
            <h2 className="md:prose-lg hidden md:flex font-semibold md:mb-5 mb-2">
                Адрес
            </h2>
            <TextInput
                autoComplete="off"
                onClick={() => setHintsIsShown(true)}
                name="address"
                placeholder="Город Санкт-петербург улица Пушкина 2"
                className="w-full"
                isError={!!(errors.address && touched.address)}
            />
            <div
                className={`${
                    hintsIsShown ? "flex" : "hidden"
                } absolute top-24 z-40 left-0 flex-col justify-center items-center overflow-hidden text-start w-full rounded-xl bg-white shadow-md`}
            >
                {!isPending ? (
                    data?.suggestions
                        .filter(
                            (el: { value: string }) =>
                                el.value != values.address
                        )
                        .slice(0, 3)
                        .map((suggestion: Suggestion) => {
                            return (
                                <button
                                    className="text-start px-2 py-2 prose-md border-b w-full border-base-300 hover:bg-base-300"
                                    onClick={() =>
                                        setFieldValue(
                                            "address",
                                            suggestion?.value
                                        )
                                    }
                                    key={suggestion?.value}
                                >
                                    {suggestion?.value}
                                </button>
                            );
                        })
                ) : (
                    <div className="w-96 h-40 flex justify-center items-center">
                        <span className="loading loading-spinner loading-sm"></span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddressInput;
