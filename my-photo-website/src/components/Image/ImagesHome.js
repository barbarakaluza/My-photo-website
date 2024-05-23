import React, { useEffect, useState } from "react";


import photo1 from "../../photos/photo1.jpg";
import photo2 from "../../photos/photo2.jpg";
import photo3 from "../../photos/photo3.jpg";
import photo4 from "../../photos/photo4.jpg";


const styles = {
    width: "200px",
    height: "auto",
    margin: 50,
    transition: "opacity 2s ease"
    
}

function ImagesHome() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []); 

    return (
        <div>
            <img src={photo1} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="womenwithkid"/>
            <img src={photo2} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="women"/>
            <img src={photo3} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="pregnancy"/>
            <img src={photo4} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="pregnancy"/>
        </div>
    )
}
    


export default ImagesHome;