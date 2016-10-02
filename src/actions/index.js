import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const RESET_POST = 'RESET_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=andrewda'

export function fetchPosts() {
	const request = axios.get(`${BASE_URL}/posts/${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${BASE_URL}/posts/${id}/${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function resetPost() {
	return {
		type: RESET_POST
	};
}

export function createPost(props) {
	const request = axios.post(`${BASE_URL}/posts/${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function deletePost(id) {
	const request = axios.delete(`${BASE_URL}/posts/${id}/${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	}
}
