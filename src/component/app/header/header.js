"use strict";

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getAuthenticatedUser, isAuthenticated, logoutUser} from "../../../util/authentication";
import "./header.css"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCog from "@fortawesome/fontawesome-free-solid/faCog";
import faUserPlus from "@fortawesome/fontawesome-free-solid/faUserPlus";
import faUsers from "@fortawesome/fontawesome-free-solid/faUsers";
import faSignInAlt from "@fortawesome/fontawesome-free-solid/faSignInAlt";
import faSignOutAlt from "@fortawesome/fontawesome-free-solid/faSignOutAlt";
import faGamepad from "@fortawesome/fontawesome-free-solid/faGamepad";
import faServer from "@fortawesome/fontawesome-free-solid/faServer";

/** Class for header react component. */
class Header extends Component {

	componentWillMount() {
		this.setState({
			user: undefined,
		});
	}

	componentDidMount() {
		getAuthenticatedUser()
			.then(user => {
				this.setState({
					user: user,
				});
			}).catch(error =>
				console.error(error)
			);
	}

	render() {
		const isAuth = isAuthenticated();
		return (
			<div className="Header">
				<header>
					<div className={"pure-menu pure-menu-horizontal"}>
						<nav>
							<Link to={"/"} className={"pure-menu-heading pure-menu-link"}>
								<img src={"/img/icon.jpg"} height={160} width={160} alt={""}/>
							</Link>
							<ul className={"pure-menu-list"}>
								{this.menuLinks()}
							</ul>
						</nav>
					</div>
				</header>
			</div>
		);
	}

	menuLinks() {
		if (!isAuthenticated()) {
			return (
				<div>
					{this.aboutLink()}
					{this.signupLink()}
					{this.loginLink()}
				</div>
			);
		} else {
			return (
				<div>
					{this.gamesLink()}
					{this.serversLink()}
					{this.userMenu()}
				</div>
			);
		}
	}

	aboutLink() {
		return (
			<li className={"pure-menu-item"}>
				<Link to={'/about'} className={"pure-menu-link"}>
					About&nbsp;<FontAwesomeIcon icon={faCog}/>
				</Link>
			</li>
		);
	}

	signupLink() {
		return (
			<li className={"pure-menu-item"}>
				<Link to={'/signup'} className={"pure-menu-link"}>
					Signup&nbsp;<FontAwesomeIcon icon={faUserPlus}/>
				</Link>
			</li>
		);
	}

	loginLink() {
		return (
			<li className={"pure-menu-item"}>
				<Link to={'/login'} className={"pure-menu-link"}>
					Login&nbsp;<FontAwesomeIcon icon={faSignInAlt}/>
				</Link>
			</li>
		);
	}

	gamesLink() {
		return (
			<li className={"pure-menu-item"}>
				<Link to={'/games'} className={"pure-menu-link"}>
					Games&nbsp;<FontAwesomeIcon icon={faGamepad}/>
				</Link>
			</li>
		);
	}

	serversLink() {
		return (
			<li className={"pure-menu-item"}>
				<Link to={'/servers'} className={"pure-menu-link"}>
					Servers&nbsp;<FontAwesomeIcon icon={faServer}/>
				</Link>
			</li>
		);
	}

	userMenu() {
		const user = this.state.user;
		if (user !== undefined) {
			return(
				<li className={"pure-menu-item  pure-menu-has-children pure-menu-allow-hover"} id={"user"}>
					<Link to={`/users/${user.username}`} className={"pure-menu-link"}>
						<img src={user.avatar} width={50} height={50} alt={""}/>
						<div>{user.username.toUpperCase()}</div>
						<div>{user.status}</div>
					</Link>
					<ul className="pure-menu-children">
						<li className="pure-menu-item">
							<Link to={`/users/${user.username}/friends`} className="pure-menu-link">
								<FontAwesomeIcon icon={faUsers}/>&nbsp;Friends
							</Link>
						</li>
						<li className="pure-menu-item">
							<Link to="/settings" className="pure-menu-link">
								<FontAwesomeIcon icon={faCog}/>&nbsp;Settings
							</Link>
						</li>
						<li className="pure-menu-item">
							<Link to="/signout" className="pure-menu-link" onClick={logoutUser}>
								<FontAwesomeIcon icon={faSignOutAlt}/>&nbsp;Sign out
							</Link>
						</li>
					</ul>
				</li>
			);
		} else {
			return null;
		}
	}

}

export default Header;
