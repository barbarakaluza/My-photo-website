import React, { useState, useEffect } from "react";
import "../../fonts.css";

const text = {
    fontFamily: "Merriweather",
    fontWeight: 300,
    fontStyle: "normal",
    letterSpacing: "2px",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: "0.5px",
    padding: 20,
    width: 400,
    fontSize: 16,
    opacity: 0, 
    transition: "opacity 2s ease",
    marginTop: 60

}

const link = {
    color: "#333",
    textDecoration: "none"
}



function AboutMeText() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

       
        return () => clearTimeout(timer);
    }, []); 

    return (
        <div style={{ ...text, opacity: isVisible ? 1 : 0 }}>

            <div>
                <p> TELEFON:</p>
                <p> +48 570 415 142</p>
            </div>
          
           <p> E-MAIL:</p>
           <p> BKALUZAFOTO@GMAIL.COM</p>
           <div style={{margin: "10px"}}>
                <a style={link} href="https://www.facebook.com/profile.php?id=61551626944690">FACEBOOK</a>
            </div> 

            <div style={{margin: "10px"}}>
                 <a style={link} href="https://www.instagram.com/basiakaluza_foto/">INSTAGRAM</a>
            </div>
        </div>
    )
}

export default AboutMeText;
