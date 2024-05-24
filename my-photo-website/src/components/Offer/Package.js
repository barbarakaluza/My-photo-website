import React, { useState, useEffect } from "react";


import offer from "../../photos/offer.jpg";
import offer2 from "../../photos/offer2.jpg";

const packages = {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    minHeight: '100vh',  // Use minHeight instead of height
    overflow: 'hidden',  // Hide overflow to remove scrollbar
    opacity: 0,
    transition: "opacity 2s ease",
}

const title = {
    fontSize: 32,
    fontWeight: 100,
    margin: 10
}

const img = {
    width: "200px",
    height: "auto"
}

const wrapper = {
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: "0.5px",
    padding: 20,
    width: 300,
    margin: 20
}

const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column'
}

const listItemStyle = {
    margin: '10px 10px'
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
        <div style={{ ...packages, opacity: isVisible ? 1 : 0 }}>

            <div style={wrapper}>
                <h2 style={title}>Pakiet podstawowy</h2>
                <p>8 ujęć elektronicznych + wydruki 15x21</p>
                <p>cena: 250zł</p>
                <img style={img} src={offer} alt="women"/>
            </div>

            <div style={wrapper}>
                <h2 style={title}>Pakiet premimum</h2>
                <p>20 ujęć elektronicznych + wydruki 15x21</p>
                <p>cena: 500zł</p>
                <img style={img} src={offer2} alt="women"/>
            </div>

            <div style={wrapper}>
                <h2 style={title}>Co zawiera cena?</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>-Dostęp do garderoby kobiecej</li>
                    <li style={listItemStyle}>-Dokładna, profesjonalna obróbka</li>
                    <li style={listItemStyle}>-Ustalenie wizji sesji, rekwizyty</li>
                </ul>
            </div>
            

           
        </div>
    )
}

export default AboutMeText;