import store from '../store';
import { fetchPosts, resetPost } from '../actions';

export function onIndexEnter() {
	store.dispatch(fetchPosts());
}

export function onPostsEnter() {
	store.dispatch(resetPost());
}
