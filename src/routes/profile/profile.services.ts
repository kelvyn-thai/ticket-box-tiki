import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const apiGetProfile = () => axios.get(`${getEnvs().API_DOMAIN}/profile`);
