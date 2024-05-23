import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavLink from "./NavLink";


function Header({ to, label }) {
    return (
        <Menu>

            <Logo/>

            <NavBar>
                <NavLink to="/">STRONA GŁÓWNA</NavLink>
                <NavLink to="/aboutme">O MNIE</NavLink>
                <NavLink to="/offer">OFERTA</NavLink>
                <NavLink to="/contact">KONTAKT</NavLink>
            </NavBar>


        </Menu>
    )
}

export default Header;