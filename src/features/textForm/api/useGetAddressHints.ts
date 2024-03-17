import getAddressHints from "@/features/getAddressHints";
import { useMutation } from "@tanstack/react-query";

export const useGetAddressHints = () =>
    useMutation({
        mutationFn: (address: string) => getAddressHints(address),
    });
