import Footer from "@/widgets/footer";
import Navbar from "@/widgets/navbar";

type Props = {
    children: JSX.Element | string;
};

function MainLayout({ children }: Props) {
    const token = localStorage.getItem("token");
    const result_is_ready = localStorage.getItem("get_price");
    return (
        <div className="w-full flex flex-col justify-center items-center bg-white">
            <Navbar
                resultIsReady={result_is_ready !== null}
                userIsLoggedIn={token !== null}
            ></Navbar>
            <div className="lg:w-[80vw] xl:w-[70vw] w-full px-2 sm:px-6 sm:w-[85vw] mx-auto flex flex-col justify-center py-6 sm:py-12 md:py-16">
                {children}
            </div>
            <Footer resultIsReady={result_is_ready !== null}></Footer>
        </div>
    );
}

export default MainLayout;
