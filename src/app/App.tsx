import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Error from "@/pages/Error";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import About from "@/pages/About";
import UserAccount from "@/pages/UserAccount";
import GetPrice from "@/processes/GetPrice";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout>
                <GetPrice variant="main" />
            </MainLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/settings",
        element: (
            <MainLayout>
                <UserAccount></UserAccount>
            </MainLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: (
            <MainLayout>
                <Login></Login>
            </MainLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/registration",
        element: (
            <MainLayout>
                <Registration></Registration>
            </MainLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: (
            <MainLayout>
                <About />
            </MainLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/result",
        element: (
            <MainLayout>
                <GetPrice variant="result" />
            </MainLayout>
        ),
        errorElement: <Error />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
