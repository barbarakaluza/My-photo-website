import React from "react";


const styles = [
    
]

function NavLink({ to, label }) {
    return (
        <a href={to} style={styles}>{label}</a>
    )
}

export default NavLink;