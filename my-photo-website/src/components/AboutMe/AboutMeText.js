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
    fontSize: 14,
    opacity: 0, 
    transition: "opacity 2s ease" 
}

const p = {

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
            <p style={p}>Jestem Basia Kałuża, fotografka z pasją i wykształceniem informatyka. 
                Moje życie to nieustanne balansowanie między kodowaniem a tworzeniem sztuki w postaci zdjęć.</p>

            <p style={p}>
            Jestem mamą trójki wspaniałych dzieci, które codziennie inspirują mnie do odkrywania piękna w najmniejszych detalach życia. 
            Moje dzieci są moją największą motywacją i często stają się modelami na moich zdjęciach, które uwieczniają nasze wspólne chwile.
            </p>

            <p style={p}>
            Jako artystka, staram się uchwycić emocje i atmosferę każdej chwili. Jestem perfekcjonistką, 
            która dąży do doskonałości w każdym detalu mojej pracy. Dzięki temu każde zdjęcie, 
            które wykonuję, jest pełne pasji, precyzji i autentyczności.
            </p>

            <p style={p}>
            Zapraszam Cię do odkrywania mojego świata przez obiektyw mojej kamery. 
            Przekonaj się, jak piękne może być życie, gdy patrzy się na nie z właściwej perspektywy.
            </p>
        </div>
    )
}

export default AboutMeText;
