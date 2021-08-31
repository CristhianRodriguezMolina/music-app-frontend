import api from './services/api';

export const getSongs = async () => {
	const res = await api.get('/song');

	return res.data;
}