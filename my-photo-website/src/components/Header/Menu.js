import React from "react";

const styles = {
    display: "flex",
    alignItems: "center", /* Center items vertically */
    marginLeft: "auto",
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000
}

function Menu({children}) {

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default Menu;