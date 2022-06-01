import * as cookie from 'cookie';
import api from '../../services/api';
import jwt_decode from 'jwt-decode';

export const post = async (event) => {
	const data = await event.request.formData();

	const email = data.get('email');
	const password = data.get('password');
	const confirm_password = data.get('confirm_password');
	const username = data.get('username');
	const name = data.get('name');
	const address = {
		city: data.get('address.city'),
		state: data.get('address.state'),
		street: data.get('address.street'),
		number: data.get('address.number'),
		district: data.get('address.district'),
		zip_code: data.get('address.zip_code')
	};

	await api.post('/auth/users/', {
		email,
		password,
		confirm_password,
		username,
		name,
		address
	});

	const {
		data: { access, refresh }
	} = await api.post('/auth/login/', {
		username,
		password
	});

	const { user_id } = jwt_decode(access);

	const {
		data: { user }
	} = await api.get(`/auth/users/${String(user_id)}/`, {
		headers: {
			Authorization: `Bearer ${access}`
		}
	});

	const access_cookie = cookie.serialize('access', access, {
		path: '/',
		httpOnly: true
	});

	const refresh_cookie = cookie.serialize('refresh', refresh, {
		path: '/',
		httpOnly: true
	});

	const user_cookie = cookie.serialize('user', user, {
		path: '/',
		httpOnly: true
	});

	return {
		headers: {
			location: '/dashboard',
			'set-cookie': [access_cookie, refresh_cookie, user_cookie]
		},
		status: 302
	};
};
