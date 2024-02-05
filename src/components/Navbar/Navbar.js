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

const Navbar = () => {
	return (
		<>
			<Nav>
                <img
                    src="assets/img/logo.png"
                    style={{ width: 200, minWidth: 41, height: 200, cursor:"pointer", marginTop: -60}}
                />
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
					<NavBtnLink to="/signin">
						Ajouter un établissement
					</NavBtnLink>
					<NavBtnLink to="/signin">
						Connexion
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
