import React, { useEffect, useState } from "react";

import '../../styles/Home/title.css';


function Title() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []); 

    return (
        // <div style={{ ...styles, opacity: isVisible ? 1 : 0 }}>
        <div className={isVisible ? "title-container visible" : "title-container"}>
            <h1 className="title">Basia Kałuża Foto</h1>
            <p className="title-p">FOTOGRAFIA KOBIECA | RODZINNA</p>
        </div>
    )
}

export default Title;