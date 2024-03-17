import { LoginDto } from "./../model/login.dto";
import axios from "axios";
import { API_URL } from "@/shared/config/url";
import { RegistrationDto } from "../model/registration.dto";

class loginService {
    async login(body: LoginDto) {
        return axios.post(`${API_URL}auth/token/login/`, body);
    }
    async registration(body: RegistrationDto) {
        return axios.post(`${API_URL}users/`, body);
    }
}

export default new loginService();
