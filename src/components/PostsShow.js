import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import { fetchPost, resetPost, deletePost } from '../actions';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.resetPost();
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.id)
			.then(() => {
				this.context.router.push('/');
			});
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return (
				<div>Loading...</div>
			);
		}

		return (
			<div>
				<Link to="/">
					<RaisedButton className="back-button" label="Back" primary={true} />
				</Link>

				<RaisedButton
					onClick={this.onDeleteClick.bind(this)}
					className="delete-button"
					label="Delete"
					secondary={true} />

				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.selectedPost
	};
}

export default connect(mapStateToProps, { fetchPost, resetPost, deletePost })(PostsShow);
