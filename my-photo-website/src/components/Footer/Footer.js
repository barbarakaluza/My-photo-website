import React from "react";

const styles = {
    borderStyle: "solid",
    borderColor: "#7A7A7A",
    borderWidth: "0.5px",
    textAlign: "left",
    width: "100%",
    position: "fixed",
    bottom: "0",
    padding: "10px 0px", // Mniejsze wartości dla marginesów
    height: "20px",
    display: "flex",
    alignItems: "center", // Wyśrodkowanie tekstu na pionowym osi
}

const p = {
    marginLeft: "10px"
}

function Footer() {
    return (
        <div style={styles}>
            <p style={p}>Basia Kałuża Foto®</p>
        </div>
    )
}

export default Footer;