// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import "../../assets1/csu.css"

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<img
						className="logo"
						src="assets/img/logo.png"
						style={{ width: 200, minWidth: 41, height: 200, cursor:"pointer"}}
					/>
				</NavLink>
				<Bars />

				<NavMenu>
					<NavLink to="/about" >
						About Us
					</NavLink>
					<NavLink to="/reservation-services" activeStyle>
						Nos Services
					</NavLink>
					<NavLink to="/partenaires" activeStyle>
						Nos Partenaires
					</NavLink>
					<NavLink to="/team" activeStyle>
						Team
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/choice">
						Ajouter un établissement
					</NavBtnLink>
					<NavBtnLink to="/login">
						Connexion
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
