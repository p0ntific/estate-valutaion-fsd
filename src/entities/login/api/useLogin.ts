import { useMutation } from "@tanstack/react-query";
import { LoginDto } from "@/entities/login/model/login.dto.ts";
import loginService from "./loginService.ts";

export const useLogin = () =>
    useMutation({
        mutationFn: (body: LoginDto) => loginService.login(body),
    });
