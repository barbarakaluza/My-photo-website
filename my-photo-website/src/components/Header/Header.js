import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import NavLink from "./NavLink";


function Header({ to, label }) {
    return (
        <Menu>

            <Logo/>

            <NavLink/>
            <NavLink/>
            <NavLink/>
            <NavLink/>

        </Menu>
    )
}

export default Header;