import axios from 'axios';

// axios instance
const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

// response interceptor
axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// response interceptor
axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
