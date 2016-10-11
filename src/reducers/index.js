import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostsReducer from './posts';
import SelectedPostReducer from './selected_post';

const rootReducer = combineReducers({
    posts: PostsReducer,
    selectedPost: SelectedPostReducer,
    form: FormReducer
});

export default rootReducer;
