import axios from "axios";
import { getAccessToken } from "../utils/auth";

const BASE_URL = "https://tnp-recruitment-challenge.manitvig.live";

const api = axios.create({
baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
const token = getAccessToken();
if (token) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
});

export default api;