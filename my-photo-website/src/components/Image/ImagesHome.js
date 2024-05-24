import React, { useEffect, useState } from "react";

import "../../styles/Home/imagesHome.css"


import photo1 from "../../photos/photo1.jpg";
import photo2 from "../../photos/photo2.jpg";
import photo3 from "../../photos/photo3.jpg";
import photo4 from "../../photos/photo4.jpg";



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
            <img className={isVisible ? "img visible" : "img"} src={photo1} alt="womenwithkid"/>
            <img className={isVisible ? "img visible" : "img"} src={photo2} alt="women"/>
            <img className={isVisible ? "img visible" : "img"} src={photo3} alt="pregnancy"/>
            <img className={isVisible ? "img visible" : "img"} src={photo4} alt="pregnancy"/>
        </div>
    )
}
    


export default ImagesHome;