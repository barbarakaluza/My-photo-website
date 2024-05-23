import React from "react";

import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";


const styles = {
    display: "flex",
    flexDirection: "column", // Aby elementy były ustawione w kolumnie
    justifyContent: "center", // Wyśrodkowanie w pionie
    alignItems: "center", // Wyśrodkowanie w poziomie
    minHeight: "50vh"
}

function Home() {
    return (
        <div style={styles}>
            <Header/>
            <Title/>
            <Footer/>
        </div>
    )
}


export default Home;
