import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onFormSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// Blog post has been created, navigate user to
				// the index by calling this.context.router.push
				this.context.router.push('/react-blog');
			});
	}

	render() {
		const {
			fields: {
				title,
				categories,
				content
			},
			handleSubmit
		} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
				<h3>Create New Post</h3>
				<div>
					<TextField
						className="input-field"
						floatingLabelText="Title"
						errorText={title.touched ? title.error : undefined}
						{...title}
					/>
				</div>

				<div>
					<TextField
						className="input-field"
						floatingLabelText="Categories"
						errorText={categories.touched ? categories.error : undefined}
						{...categories}
					/>
				</div>

				<div>
					<TextField
						className="input-field"
						floatingLabelText="Content"
						multiLine={true}
						rows={4}
						errorText={content.touched ? content.error : undefined}
						{...content}
					/>
				</div>

				<div className="form-buttons">
					<RaisedButton className="submit-form-button" type="submit" label="Submit" primary={true} />

					<Link to="/react-blog">
						<RaisedButton className="cancel-form-button" label="Cancel" secondary={true} />
					</Link>
				</div>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title';
	}

	if (!values.categories) {
		errors.categories = 'Enter a category'
	}

	if (!values.content) {
		errors.content = 'Enter a post body'
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNew',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);
