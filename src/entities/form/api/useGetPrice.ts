import { useMutation } from "@tanstack/react-query";
import getPriceService from "@/entities/form/api/getPriceService.ts";
import { FormValuesWithRenovationType } from "@/entities/form/model/valuesTypes.ts";
import { convertFormikToRequestBody } from "@/entities/form/api/mapper/convertFormikToRequestBody.ts";

export const useGetPrice = () =>
  useMutation({
    mutationFn: (body: FormValuesWithRenovationType) => {
      const data = convertFormikToRequestBody(body);
      return getPriceService.getPrice(data);
    },
  });
