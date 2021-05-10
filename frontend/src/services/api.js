import axios from "axios";
import { apiUrl } from "utils/urls";

const api = () => axios.create({ baseUrl: apiUrl });

export default api;
