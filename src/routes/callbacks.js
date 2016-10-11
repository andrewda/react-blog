import store from '../store';
import { fetchPosts } from '../actions';

export function onIndexEnter() {
	store.dispatch(fetchPosts());
}
