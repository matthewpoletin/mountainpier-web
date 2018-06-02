"use strict";

import React, { Component } from 'react';
import PropTypes from "prop-types";

const propTypes = {
	authUser: PropTypes.object,
};

const defaultProps = {
	authUser: undefined,
};

/** Class for DeveloperRegister react component. */
class DeveloperRegister extends Component {

	constructor(props) {
		super(props);

		this.handleChangeName= this.handleChangeName.bind(this);
		this.handleChangeDescription= this.handleChangeDescription.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeWebsite= this.handleChangeWebsite.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		this.setState({
			authUser: undefined,

			name: "",
			description: "",
			website: "",
			email: "",
		});
	}

	componentWillReceiveProps(props) {
		if (props.authUser !== undefined) {
			this.setState({
				authUser: props.authUser,
			})
		}
	}

	render() {
		if (this.state.authUser !== undefined) {
			return (
				<div className="developer-register">
					<form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
						<fieldset>
							<div className="pure-control-group">
								<label htmlFor="name">Name</label>
								<input
									id="name"
									type="text"
									placeholder="name"
									onChange={this.handleChangeName}
									defaultValue={this.state.authUser.username}
								/>
								<span className="pure-form-message-inline">This is required field</span>
							</div>
							<div className="pure-control-group">
								<label htmlFor="description">Description</label>
								<textarea
									id="description"
									placeholder="description"
									onChange={this.handleChangeDescription}
								/>
								<span className="pure-form-message-inline">This is required field</span>
							</div>
							<div className="pure-control-group">
								<label htmlFor="website">Website</label>
								<input
									id="website"
									type="text"
									placeholder="website"
									onChange={this.handleChangeWebsite}
								/>
								<span className="pure-form-message-inline">This is required field</span>
							</div>
							<div className="pure-control-group">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="email"
									placeholder="email"
									onChange={this.handleChangeEmail}
								/>
								<span className="pure-form-message-inline">This is required field</span>
							</div>
							<div className="pure-controls">
								<button
									id="register"
									type="submit"
									className="pure-button pure-button-primary"
									disabled={!this.validForm()}
								>
									Register
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			);
		} else {
			return("Loading...")
		}
	}

	handleChangeName(event) {
		this.setState({
			name: event.target.value,
		});
	}

	handleChangeDescription(event) {
		this.setState({
			description: event.target.value,
		});
	}

	handleChangeWebsite(event) {
		this.setState({
			website: event.target.value,
		});
	}

	handleChangeEmail(event) {
		this.setState({
			email: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.validForm()) {

		}
	}

	validName() {
		return this.state.name.length > 0;
	}

	validForm() {
		return this.validName();
	}

}

DeveloperRegister.propTypes = propTypes;
DeveloperRegister.defaultProps = defaultProps;

export default DeveloperRegister;
