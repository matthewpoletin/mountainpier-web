"use strict";

import React, { Component } from 'react';
import PropTypes from "prop-types";

const propTypes = {
	authUser: PropTypes.object,
};

const defaultProps = {
	authUser: undefined,
};

/** Class for personal settings react component. */
class PersonalSettings extends Component {

	constructor(props) {
		super(props);

		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		this.setState({user: this.props.authUser});

		this.setState({
			username: "",
			email: "",
		});
	}

	render() {
		if (this.state.user !== undefined)
			return (
				<div className="personal-settings">
					<form className="pure-form pure-form-aligned">
						<fieldset>
							<div className="pure-control-group">
								<input type="file" />
								<img src={this.state.user.avatar} height={40} width={40} alt={""}/>
							</div>
							<div className="pure-control-group">
								<label htmlFor="username">Username</label>
								<input
									id="username"
									type="text"
									placeholder="Username"
									defaultValue={this.state.user.username}
									onChange={this.handleChangeUsername}
								/>
							</div>
							<div className="pure-control-group">
								<label htmlFor="username">Email</label>
								<input
									id="email"
									type="text"
									defaultValue={this.state.user.regEmail}
									onChange={this.handleChangeEmail}
								/>
							</div>
							<div className={"pure-controls"}>
								<input
									type="submit"
									className="pure-button pure-button-primary"
									onClick={this.handleSubmit}
									value="Update"
								/>
							</div>
						</fieldset>
					</form>
				</div>
			);
		else return(
			<div>
				User is not defined
			</div>
		);
	}

	handleChangeUsername(event) {
		this.setState({
			username: event.target.value,
		});
	}

	handleChangeEmail(event) {
		this.setState({
			email: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();


	}

}

PersonalSettings.propTypes = propTypes;
PersonalSettings.defaultProps = defaultProps;

export default PersonalSettings;
