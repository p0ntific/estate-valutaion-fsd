import { create } from "zustand";
import StoreType from "@/processes/module/storeType.ts";

const useGetPriceStore = create<StoreType>()((set) => ({
  data: null,
  setData: (data) => set(() => ({ data: data })),
}));

export default useGetPriceStore;
