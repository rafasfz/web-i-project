import api from '../../services/api';

export const post = async (event) => {
	const data = await event.request.formData();

	let name = data.get('name');
	let description = data.get('description');
	let price = data.get('price');
	let tags = data.get('tags');
	let pictures = data.get('images');
	let owner = data.get('owner');
	price = Number(price);
	owner = Number(owner);

	console.log({
		name,
		description,
		price,
		tags,
		pictures,
		status: 1,
		owner
	});

	try {
		await api.post('/store/products/', {
			name,
			description,
			price,
			tags,
			pictures,
			status: 1,
			owner
		});
	} catch (err) {
		console.log(err);
		return {
			statusCode: 500,
			headers: {
				location: '/products/register'
			}
		};
	}

	return {
		status: 200,
		headers: {
			location: '/products'
		}
	};
};
