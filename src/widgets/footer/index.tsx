import { memo } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    resultIsReady: boolean;
};
const Footer = memo(({ resultIsReady }: Props) => {
    let links = [
        { name: "Главная", to: "/" },
        { name: "О продукте", to: "/about" },
    ];
    if (resultIsReady) {
        links = [
            { name: "Главная", to: "/" },
            { name: "Результат оценки", to: "/result" },
            { name: "О продукте", to: "/about" },
        ];
    }
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                {links.map(({ name, to }) => (
                    <NavLink key={name} to={to} className="link link-hover">
                        {name}
                    </NavLink>
                ))}
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
        </footer>
    );
});

export default Footer;
