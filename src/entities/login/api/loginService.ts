import { LoginDto } from "@/entities/login/model/login.dto.ts";
import axios from "axios";
import { API_URL } from "@shared/config/url.ts";
import { RegistrationDto } from "@/entities/login/model/registration.dto.ts";

class loginService {
    async login(body: LoginDto) {
        return axios.post(`${API_URL}auth/token/login/`, body);
    }
    async registration(body: RegistrationDto) {
        return axios.post(`${API_URL}users/`, body);
    }
    async getMe() {
        return axios.get(`${API_URL}users/`, {
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        });
    }
}

export default new loginService();
