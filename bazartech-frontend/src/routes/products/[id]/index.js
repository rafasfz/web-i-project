import api from '../../../services/api';

export async function get({ params, locals }) {
	const { data: product } = await api.get(`/store/products/${params.id}/`, {
		headers: {
			Authorization: `Bearer ${locals.access}`
		}
	});

	return {
		status: 200,
		body: {
			product
		}
	};
}
