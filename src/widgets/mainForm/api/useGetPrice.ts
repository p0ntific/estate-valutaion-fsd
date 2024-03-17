import { useMutation } from "@tanstack/react-query";
import { GetPriceDto } from "@/entities/form/api/dto/getPrice.dto";
import { getPrice } from "@/entities/form/api/getPriceService";

export const useGetPrice = (body: GetPriceDto) =>
    useMutation({
        mutationFn: () => getPrice(body),
    });
