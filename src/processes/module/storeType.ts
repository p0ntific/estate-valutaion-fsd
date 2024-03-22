import AiResultType from "@/widgets/mainForm/model/responseType.ts";

export default interface StoreType {
  data: AiResultType | null;
  setData: (data: AiResultType) => void;
}
