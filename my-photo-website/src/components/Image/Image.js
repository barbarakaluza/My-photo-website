import React from "react";

import photo1 from "../../photos/photo1.jpg";
import photo2 from "../../photos/photo2.jpg";
import photo3 from "../../photos/photo3.jpg";
import photo4 from "../../photos/photo4.jpg";


const styles = {
    width: "200px",
    height: "auto",
    margin: 50
}

function Image() {
    return (
        <div>
            <img src={photo1} style={styles} alt="womenwithkid"/>
            <img src={photo2} style={styles} alt="women"/>
            <img src={photo3} style={styles} alt="pregnancy"/>
            <img src={photo4} style={styles} alt="pregnancy"/>
        </div>
    )
}

export default Image;