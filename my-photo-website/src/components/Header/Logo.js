import React from "react";

import logo from "./logo.png"


const logoWraperStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    padding: "10px",
    marginLeft: "10px"
}



const styles = {
    width: "120px",
    height: "auto",
}

function Logo() {
    return (
        <div style={logoWraperStyles}><img src={logo} style={styles} alt="logo"/></div>
    )
}

export default Logo;