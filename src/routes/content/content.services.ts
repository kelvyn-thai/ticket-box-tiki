import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const apiGetcontentById = (id: string) =>
  axios.get(`${getEnvs().API_DOMAIN}/content/${id}`);
