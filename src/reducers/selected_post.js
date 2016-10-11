import { FETCH_POST, RESET_POST } from '../actions';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POST:
			return action.payload.data;
		case RESET_POST:
			return null;
		default:
			return state;
	}
}
