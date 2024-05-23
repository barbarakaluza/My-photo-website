import React from "react";


const styles = {
    fontStyle: "Inter",
    fontWeight: "Regular",
    color: "#000",
    textDecoration: "none",
    marginLeft: "20px",
    marginRight: "20px"
}

function NavLink({ to, children }) {
    return (
        <a href={to} style={styles}>{children}</a>
    )
}

export default NavLink;