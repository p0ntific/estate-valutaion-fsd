import axios from "axios";
import { API_URL } from "@/shared/config/url";
import { GetPriceDto } from "./dto/getPrice.dto";
import AiResultType from "@/widgets/mainForm/model/responseType.ts";

class getPriceService {
  async getPrice(body: GetPriceDto) {
    return axios.post<AiResultType>(`${API_URL}price/`, body, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    });
  }
}

export default new getPriceService();
