import React from "react";


const styles = {
    display: "flex",
    marginLeft: "auto",
    marginRight: "40px"
}

function NavBar( { children }) {
    return (
        <ul style={styles}>
            {children}
        </ul>
    )
}

export default NavBar;