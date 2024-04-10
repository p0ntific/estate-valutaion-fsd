import { useRegistration } from "@/entities/login/api/useRegistration";
import AlertComponent from "@/shared/ui/AlertComponent";
import TextInput from "@/shared/ui/TextInput";
import { Form, Formik } from "formik";
import { memo, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Captcha from "reaptcha";
import YupPassword from "yup-password";

YupPassword(yup);
const validationsSchema = yup.object().shape({
  username: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Обязательное поле")
    .min(3, "Слишком короткое имя"),
  email: yup.string().required("Обязательное поле").email(),
  password: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Обязательное поле")
    .min(8, "Слишком простой")
    .minNumbers(1, "Должен содержать 1 цифру")
    .minSymbols(1, "Должен содержать 1 спец. символ"),
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
});

const classicAlertMessage = () => (
  <>
    <h2 className="prose-md font-bold">
      Не удалось зарегестрировать пользователя!
    </h2>
    <p className="prose-sm">{`Попробуйте в следующий раз`}</p>
  </>
);

interface FormikValues {
  username: string;
  password: string;
  email: string;
}

const RegistrationForm = memo(() => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [alertIsShowing, setAlertIsShowing] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const [alertErrorMessage, setAlertErrorMessage] =
    useState(classicAlertMessage);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    password2: "",
    email: "",
  };
  const { data, isError, isPending, mutate, error } = useRegistration();

  useEffect(() => {
    if (!isPending && data) {
      navigate("/login");
    } else if (!isPending && isError) {
      if (
        //@ts-ignore
        error?.response?.data?.username[0] ===
        "A user with that username already exists."
      ) {
        setAlertErrorMessage(
          <>
            <h2 className="prose-md font-bold">
              Пользователь с таким именем уже есть!
            </h2>
            <p className="prose-sm">{`Попробуйте другое имя`}</p>
          </>,
        );
      } else {
        setAlertErrorMessage(classicAlertMessage);
      }
      setAlertIsShowing(true);
      setTimeout(() => setAlertIsShowing(false), 5000);
    }
  }, [data, isPending, isError, error]);

  const submitLogin = (values: FormikValues) => {
    if (captchaToken) {
      mutate({
        password: values.password,
        email: values.email,
        username: values.username,
      });
      setAlertErrorMessage(classicAlertMessage);
    } else {
      setAlertErrorMessage(
        <>
          <h2 className="prose-md font-bold">Пройдите каптчу!</h2>
          <p className="prose-sm">{`Если не удаётся пройти каптчу, попробуйте перезагрузить страницу`}</p>
        </>,
      );
      setAlertIsShowing(true);
      setTimeout(() => setAlertIsShowing(false), 5000);
    }
  };

  const verify = () => {
    // @ts-ignore
    captchaRef.current.getResponse().then((res) => {
      setCaptchaToken(res);
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationsSchema}
        onSubmit={(values) => submitLogin(values)}
      >
        {({ errors, touched }) => {
          return (
            <Form className="flex flex-col gap-2 w-full max-w-2xl text-center border bg-blue-50 border-blue-500 rounded-xl py-12 px-4 sm:px-12">
              <h1 className="prose-2xl font-bold mb-4">Регистрация</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="flex flex-col gap-6">
                  <TextInput
                    name="username"
                    label="Имя пользователя"
                    placeholder="Ivan123"
                    isError={!!(touched.username && errors.username)}
                    error={errors.username}
                  />
                  <div className="relative">
                    <TextInput
                      name="password"
                      placeholder="somepassword1$"
                      type={showPassword ? "text" : "password"}
                      label="Пароль"
                      isError={!!(touched.password && errors.password)}
                      error={errors.password}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="right-4 transition hover:text-blue-500  top-[3.1rem] absolute"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <TextInput
                    name="email"
                    label="Почта"
                    placeholder="somemail@mail.com"
                    isError={!!(touched.email && errors.email)}
                    error={errors.email}
                  />

                  <div className="relative">
                    <TextInput
                      name="password2"
                      placeholder="somepassword1$"
                      type={showPassword2 ? "text" : "password"}
                      label="Повторите пароль"
                      isError={!!(touched.password2 && errors.password2)}
                      error={errors.password2}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword2((prev) => !prev)}
                      className="right-4 transition hover:text-blue-500  top-[3.1rem] absolute"
                    >
                      {showPassword2 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 mx-auto max-w-full overflow-hidden">
                <Captcha
                  className="mx-auto"
                  // @ts-ignore
                  sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                  ref={captchaRef}
                  onVerify={verify}
                />
              </div>
              <button
                type="submit"
                className={`btn mt-6 text-white bg-blue-500 border-0 btn-neutral`}
              >
                {isPending ? (
                  <span className="loading"></span>
                ) : (
                  "Зарегистрироваться"
                )}
              </button>
              <NavLink to="/login" className="link ">
                уже есть аккаунт
              </NavLink>
            </Form>
          );
        }}
      </Formik>

      <AlertComponent className={`alert-error`} active={alertIsShowing}>
        {alertErrorMessage}
      </AlertComponent>
    </>
  );
});

export default RegistrationForm;
