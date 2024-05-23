import React from "react";

import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import ImagesHome from "../components/Image/ImagesHome";
import Footer from "../components/Footer/Footer";


const styles = {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "50vh"
}

function Home() {
    return (
        <div style={styles}>
            <Header/>
            <Title/>
            <ImagesHome/>
            <Footer/>
        </div>
    )
}


export default Home;
