import { FETCH_POSTS } from '../actions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return action.payload.data || [];
		default:
			return state;
	}
}
