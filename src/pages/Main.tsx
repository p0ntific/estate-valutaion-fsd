import MainForm from "@/widgets/mainForm";
import TgBot from "@/widgets/tgBot";

function Main() {
    return (
        <div className="flex flex-col gap-8">
            <TgBot />
            <MainForm />
        </div>
    );
}

export default Main;
