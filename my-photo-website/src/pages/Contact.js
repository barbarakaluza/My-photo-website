import React from "react";

import Header from "../components/Header/Header";
import ContactImg from "../components/Contact/ContactImg";
import ContactText from "../components/Contact/ContactText"
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



function Contact() {
    return (
        <div>
            <div style={containerStyles}>
            <Header/>
            <div style={contentContainerStyles}>
                <ContactImg/>
                <ContactText/>
            </div>
            <Footer/>
        </div>
        </div>
    )
}


export default Contact;