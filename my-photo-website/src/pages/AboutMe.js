import React from "react";


import Header from "../components/Header/Header";
import AboutMeImg from "../components/AboutMe/AboutMeImg";
import AboutMeText from "../components/AboutMe/AboutMeText";
import Footer from "../components/Footer/Footer";

const containerStyles = {
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", // Ustawienie wertykalnego ułożenia elementów
    minHeight: "100vh" // Minimalna wysokość kontenera na całą wysokość widoku
}

const contentContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
}



function AboutMe() {
    return (
        <div style={containerStyles}>
            <Header/>
            <div style={contentContainerStyles}>
                <AboutMeImg/>
                <AboutMeText/>
            </div>
            <Footer/>
        </div>
    )
}


export default AboutMe;