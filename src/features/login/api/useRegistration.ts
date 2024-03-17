import { useMutation } from "@tanstack/react-query";
import loginService from "./loginService";
import { RegistrationDto } from "../model/registration.dto";

export const useRegistration = () =>
    useMutation({
        mutationFn: (body: RegistrationDto) => loginService.registration(body),
    });
