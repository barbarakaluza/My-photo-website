import React from "react";

const styles = {
    width: "600px",
    marginTop: 80,
    fontStyle: "Inter",
    borderStyle: "solid",
    borderColor: "#7A7A7A",
    borderWidth: "0.5px"

}

const title = {
    fontSize: 54,
    fontWeight: 100,
    margin: 10
}

const paraTitle = {
    marginTop: 0
}

function Title() {
    return (
        <div style={styles}>
            <h1 style={title}>Basia Kałuża Foto</h1>
            <p style={paraTitle}>FOTOGRAFIA KOBIECA | RODZINNA</p>
        </div>
    )
}


export default Title;