import { GetRenovationTypeDto } from "@/entities/form/api/dto/getRenovationType.dto";
import getRenovationTypeService from "@/entities/form/api/getRenovationTypeService";
import { useMutation } from "@tanstack/react-query";

export const useGetRenovationType = () =>
    useMutation({
        mutationFn: (body: GetRenovationTypeDto) =>
            getRenovationTypeService.getRenovationType(body),
    });
