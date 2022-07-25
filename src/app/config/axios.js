import axios from "axios";

// Config
const API_URL = "https://api.npoint.io/";

// Creating an instance of axios
const $axios = axios.create({ baseURL: `${API_URL}` });

const { get, post, put, delete: destroy } = $axios;
export { get, post, put, destroy };