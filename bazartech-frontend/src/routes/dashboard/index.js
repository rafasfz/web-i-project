import api from '../../services/api';

export const get = async (event) => {
	const {
		data: { results: products }
	} = await api.get('/store/products/', {
		headers: {
			Authorization: `Bearer ${event.locals.access}`
		}
	});

	return {
		status: 200,
		body: {
			products
		}
	};
};
