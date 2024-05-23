import React, { useEffect, useState } from "react";

const styles = {
    width: "600px",
    marginTop: 100,
    fontStyle: "Inter",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: "0.5px",
    opacity: 0, 
    transition: "opacity 2s ease" 

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
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []); 

    return (
        <div style={{ ...styles, opacity: isVisible ? 1 : 0 }}>
            <h1 style={title}>Basia Kałuża Foto</h1>
            <p style={paraTitle}>FOTOGRAFIA KOBIECA | RODZINNA</p>
        </div>
    )
}

export default Title;