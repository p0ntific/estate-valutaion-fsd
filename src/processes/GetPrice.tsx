import Main from "@/pages/Main";
import Result from "@/pages/Result";
import AiResultType from "@/widgets/mainForm/model/responseType.ts";
import useGetPriceStore from "@/processes/store.ts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  variant: "main" | "result";
}

function GetPrice({ variant }: Props) {
  const data = useGetPriceStore((state) => state.data);
  const setData = useGetPriceStore((state) => state.setData);

  const navigate = useNavigate();
  const leave = () => {
    localStorage.removeItem("get_price");
    navigate("/");
  };
  useEffect(() => {
    if (!data) leave();
  }, []);
  if (variant === "main") return <Main setData={setData} />;
  if (variant === "result")
    return <Result leave={leave} data={data as AiResultType} />;
}

export default GetPrice;
