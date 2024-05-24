import React from "react";

import Header from "../components/Header/Header";
import Package from "../components/Offer/Package"
import Footer from "../components/Footer/Footer";

const text = {
    fontFamily: "Merriweather",
    fontWeight: 300,
    fontStyle: "normal",
    letterSpacing: "2px",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: "0.5px",
}

function Offer() {
    return (
        <div style={text}>
            <Header/>
            <Package/>
            <Footer/>
        </div>
    )
}


export default Offer;