import Main from "@/pages/Main";
import Result from "@/pages/Result";

interface Props {
    variant: "main" | "result";
}

function GetPrice({ variant }: Props) {
    // const {data, mutation, isPending} = useGetPrice();
    /// mutation, isPending в main, data в result

    if (variant === "main") return <Main />;
    if (variant === "result") return <Result />;
}

export default GetPrice;
