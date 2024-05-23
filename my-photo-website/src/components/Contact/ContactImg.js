import React, { useEffect, useState } from "react";

import contact from "../../photos/contact.jpg"

const styles = {
    width: "300px",
    height: "auto",
    marginTop: 10,
    marginRight: 40,
    transition: "opacity 2s ease"
}

function ContactImg() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []); 

    return (
        <div>
            <img src={contact} style={{ ...styles, opacity: isVisible ? 1 : 0 }} alt="women" />
        </div>
    )
}




export default ContactImg;