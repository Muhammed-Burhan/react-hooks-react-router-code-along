import React from 'react'
import { NavLink } from "react-router-dom"
const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};
function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{ background: "Black" }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{ background: "green" }}
            >
                About
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{ background: "red" }}
            >
                Login
            </NavLink>
        </div>
    )
}

export default NavBar
