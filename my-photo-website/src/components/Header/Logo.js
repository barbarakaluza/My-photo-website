import React from "react";

import logo from "./logo.png"

const styles = {
    width: "150px",
    height: "auto"
}

function Logo() {
    return (
        <div><img src={logo} style={styles} alt="logo"/></div>
    )
}

export default Logo;