import { FETCH_POSTS, FETCH_POST, RESET_POST } from '../actions';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return { ...state, all: action.payload.data }
		case FETCH_POST:
			return { ...state, post: action.payload.data }
		case RESET_POST:
			return { ...state, post: null }
		default:
			return state;
	}
}
