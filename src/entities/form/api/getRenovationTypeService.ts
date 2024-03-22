import axios from "axios";
import { GetRenovationTypeDto } from "./dto/getRenovationType.dto";
import { API_URL } from "@/shared/config/url";

class getRenovationTypeService {
    async getRenovationType({ images }: GetRenovationTypeDto) {
        const imagesData = new FormData();

        images.forEach((element) => {
            imagesData.append("photos", element, element.path);
        });

        return axios.post(`${API_URL}calculate_repair/`, imagesData,{
            headers: {
                Authorization: "Token " + localStorage.getItem("token"),
            },
        });
    }
}

export default new getRenovationTypeService();
