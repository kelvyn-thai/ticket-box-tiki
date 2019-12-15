import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const apiPayment = (data: any) =>
  axios.post(`${getEnvs().API_DOMAIN}/payment-tickets`, data);
