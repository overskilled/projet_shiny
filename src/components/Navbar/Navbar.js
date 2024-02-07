// components/Navbar/index.js

import React, { useCallback, useState } from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import "../../assets1/csu.css"
import { useNavigate } from "react-router";

const Navbar = () => {
	const navigate = useNavigate()
	const [show, setShow] = useState(false)
	const toggleshow = () => {
		setShow(!show)
	}

	const home = useCallback(() => {
		navigate("/")
	}, [navigate])

	const service = useCallback(() => {
		navigate("/reservation-services")
	}, [navigate])

	const login = useCallback(() => {
		navigate("/login")
	}, [navigate])

	const choix = useCallback(() => {
		navigate("/choice")
	}, [navigate])


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
				<Bars onClick={toggleshow} />

				<NavMenu>
					<NavLink className="nav-link" to="/about" >
						About Us
					</NavLink>
					<NavLink  className="nav-link" to="/reservation-services" activeStyle>
						Nos Services
					</NavLink>
					<NavLink  className="nav-link" to="/partenaires" activeStyle>
						Nos Partenaires
					</NavLink>
					<NavLink  className="nav-link" to="/team" activeStyle>
						Team
					</NavLink>
					<NavLink className="nav-link" to="/blogs" activeStyle>
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
				{show &&
					<div className="d-flex flex-column justify-content-between" style={{position: "fixed", height: "100vh", width: "50%", background: "#000000c4", right: 0}}>
						<div className="d-flex justify-content-between">
							<span style={{marginLeft: 20, color: "white", fontWeight: 800, marginTop: 40}}>Menu</span>
							<span onClick={toggleshow} style={{marginRight: 20, marginTop: 40, color: "white", fontWeight: 800}}>X</span>
						</div>	
						<div className="d-flex flex-column justify-content-between" style={{color: "white", marginLeft: 20, marginTop: -280, height: 200}}>
							<span onClick={home}>About Us</span>
							<span onClick={service}>Nos services</span>
							<span onClick={service}>Nos institut</span>
							<span>Team</span>
							{/* <span>Blog</span> */}
						</div>
						<div className="d-flex flex-column justify-content-between" style={{color: "white", marginLeft: 20, marginTop: 20, marginBottom: 30}}> 
							<span onClick={login}>Connexion</span>
							<span onClick={choix}>Ajouter un établissement</span>
						</div>
					</div>
				}
			</Nav>
		</>
	);
};

export default Navbar;
