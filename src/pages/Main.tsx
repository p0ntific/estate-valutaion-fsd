import MainForm from "@/widgets/mainForm";
import TgBot from "@/widgets/tgBot";
import { useGetPrice } from "@/entities/form/api/useGetPrice.ts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AiResultType from "@/widgets/mainForm/model/responseType.ts";

interface Props {
  setData: (data: AiResultType) => void;
}

function Main({ setData }: Props) {
  const { mutate, isPending, isError, isSuccess, data } = useGetPrice();
  /// mutation, isPending в main, data в result
  const leave = () => {};
  const navigate = useNavigate();
  useEffect(() => {
    if (!isError && isSuccess && data) {
      navigate("/result");
      localStorage.setItem("get_price", "true");
    } else {
      leave();
    }
  }, [isError, isSuccess, data]);
  useEffect(() => {
    console.log(data);
    if (!isPending && isSuccess && data) {
      setData(data.data as AiResultType);
    }
  }, [data, isSuccess, isPending]);
  return (
    <div className="flex flex-col gap-8">
      <TgBot />
      <MainForm isPending={isPending} mutate={mutate} />
    </div>
  );
}

export default Main;
