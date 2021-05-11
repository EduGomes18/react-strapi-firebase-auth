import axios from "axios";
import { apiUrl } from "../utils/urls";

const api = axios.create({ baseURL: apiUrl });

export default api;
