import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			console.log(post)
			const postUrl = `/posts/${post.id}`;

			return (
				<Card key={post.id}>
					<CardHeader
						title={post.title}
						subtitle={post.categories} />
					<CardActions>
						<Link to={postUrl}>
							<FlatButton label="Read More" />
						</Link>
					</CardActions>
				</Card>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="new-post-button">
					<Link to="/posts/new">
						<RaisedButton label="New Post" primary={true} />
					</Link>
				</div>
				<h3>Posts</h3>
				<div className="post-list">
					{this.renderPosts()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
