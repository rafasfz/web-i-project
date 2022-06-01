import * as cookie from 'cookie';
import api from '../../services/api';
import jwt_decode from 'jwt-decode';

export const post = async (event) => {
	const data = await event.request.formData();

	const username = data.get('username');
	const password = data.get('password');

	try {
		const {
			data: { access, refresh }
		} = await api.post('/auth/login/', {
			username,
			password
		});

		const { user_id } = jwt_decode(access);
		console.log(user_id);
		console.log(access);

		const {
			data: { user }
		} = await api.get(`/auth/users/${String(user_id)}/`, {
			headers: {
				Authorization: `Bearer ${access}`
			}
		});

		console.log(404);

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
	} catch (error) {
		// console.log(error);
		return {
			headers: {
				location: '/login'
			},
			status: 302
		};
	}
};
