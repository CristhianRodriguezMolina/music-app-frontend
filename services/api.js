import axios from 'axios';

// env
import { REACT_APP_API_URL } from "@env";

const api = axios.create({
	// baseURL: REACT_APP_API_URL
	baseURL: "http://192.168.1.19:4000/api"
});

export default api;