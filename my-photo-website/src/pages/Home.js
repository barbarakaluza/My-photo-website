import React from "react";

import '../styles/Home/home.css';

import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import ImagesHome from "../components/Image/ImagesHome";
import Footer from "../components/Footer/Footer";

function Home() {
    
    return (
        <div className="home">
            <Header />
            <Title />
            <ImagesHome />
            <Footer />
        </div>
    );
}

export default Home;
