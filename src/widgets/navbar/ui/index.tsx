import { NavLink } from "react-router-dom";
import ConfirmLeave from "./ConfirmLeave.tsx";
import { memo } from "react";
import { useGetMe } from "@/entities/login/api/useGetMe.ts";

type Props = {
  resultIsReady: boolean;
  userIsLoggedIn: boolean;
};

const Navbar = memo(({ resultIsReady, userIsLoggedIn }: Props) => {
  const { data } = useGetMe();
  const name = data?.data[0]?.username;
  const email = data?.data[0]?.email;
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
    <div className="navbar sticky top-0 left-0 w-full bg-base-100 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((el) => (
              <li key={el.name}>
                <NavLink to={el.to}>{el.name}</NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/registration">Регистрация</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl hidden sm:flex" to="/">
          Оценка недвижимости
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-md px-1 flex gap-4">
          {links.map((el) => (
            <li key={el.name + "1"}>
              <NavLink to={el.to}>{el.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        {userIsLoggedIn ? (
          <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost ">
                <div className="flex flex-col gap-1">
                  {name ? name : "Гость"}
                  <span className="text-[10px] prose-gray">
                    {email ? email : ""}
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow flex flex-col overflow-hidden dropdown-content bg-base-100 rounded-box w-52"
              >
                {/*<NavLink to="/settings">*/}
                {/*  <li className="hover:bg-base-200 rounded-xl py-1 px-4 transition">*/}
                {/*    Найстройки*/}
                {/*  </li>*/}
                {/*</NavLink>*/}
                <li>
                  <ConfirmLeave />
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/registration" className="btn hidden lg:flex">
              Зарегистрироваться{" "}
            </NavLink>
            <NavLink to="/login" className="btn btn-neutral">
              Войти
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
});

export default Navbar;
