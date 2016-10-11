import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FIELD_TYPES = {
	TextField
}

const FIELDS = {
	title: {
		type: 'TextField',
		label: 'Title'
	},
	categories: {
		type: 'TextField',
		label: 'Categories'
	},
	content: {
		type: 'TextField',
		label: 'Content',
		options: {
			multiLine: true,
			rows: 4
		}
	}
};

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props) {
		super(props);

		this.state = { submitEnabled: true };
	}

	onFormSubmit(props) {
		this.setState({ submitEnabled: false });
		this.props.createPost(props)
			.then(() => {
				this.context.router.push('/');
			});
	}

	renderField(config, field) {
		const fieldHelper = this.props.fields[field];
		const properties = config.options || {};

		const Tag = FIELD_TYPES[config.type];

		return (
			<div key={field}>
				<Tag
					className="input-field"
					floatingLabelText={config.label}
					errorText={fieldHelper.touched ? fieldHelper.error : undefined}
					{...properties}
					{...fieldHelper}
				/>
			</div>
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
				<h3>Create New Post</h3>
				{ _.map(FIELDS, this.renderField.bind(this)) }
				<div className="form-buttons">
					<RaisedButton
						className="submit-form-button"
						type="submit"
						disabled={!this.state.submitEnabled}
						label="Submit"
						primary={true} />

					<Link to="/">
						<RaisedButton
							className="cancel-form-button"
							label="Cancel"
							secondary={true} />
					</Link>
				</div>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	_.each(FIELDS, (options, field) => {
		if (!values[field]) {
			errors[field] = `Enter ${field}`;
		}
	});

	return errors;
}

export default reduxForm({
	form: 'PostsNew',
	fields: _.keys(FIELDS),
	validate
}, null, { createPost })(PostsNew);
