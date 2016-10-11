import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import { fetchPost, resetPost, deletePost } from '../actions';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props) {
		super(props);

		this.state = { deleteEnabled: true };
	}

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick() {
		this.setState({ deleteEnabled: false });

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
					disabled={!this.state.deleteEnabled}
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
