import { useMutation } from "@tanstack/react-query";
import { LoginDto } from "../model/login.dto";
import loginService from "./loginService";

export const useLogin = () =>
    useMutation({
        mutationFn: (body: LoginDto) => loginService.login(body),
    });
