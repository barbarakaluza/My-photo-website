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

function Image() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Po opóźnieniu 1 sekundy ustaw wartość isVisible na true, aby pokazać obrazki
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        // Zwracamy funkcję czyszczącą timer, aby uniknąć wycieków pamięci
        return () => clearTimeout(timer);
    }, []); // Używamy pustej tablicy zależności, aby efekt został uruchomiony tylko raz

    return (
        <div>
            <img src={photo1} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="womenwithkid"/>
            <img src={photo2} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="women"/>
            <img src={photo3} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="pregnancy"/>
            <img src={photo4} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="pregnancy"/>
        </div>
    )
}
    // return (
    //     <div>
    //         <img src={photo1} style={styles} alt="womenwithkid"/>
    //         <img src={photo2} style={styles} alt="women"/>
    //         <img src={photo3} style={styles} alt="pregnancy"/>
    //         <img src={photo4} style={styles} alt="pregnancy"/>
    //     </div>
    // )


export default Image;