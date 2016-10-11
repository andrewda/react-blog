import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import PostsIndex from '../components/PostsIndex';
import PostsNew from '../components/PostsNew';
import PostsShow from '../components/PostsShow';

import { onIndexEnter, onPostsEnter } from './callbacks';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} onEnter={onIndexEnter} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} onEnter={onPostsEnter} />
	</Route>
);
