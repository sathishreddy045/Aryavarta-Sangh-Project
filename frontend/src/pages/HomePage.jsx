import React from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Leaders from "../components/Leaders.jsx";
import Voices from "../components/Voices.jsx";
import Social from "../components/Social.jsx";
import News from "../components/News.jsx";
import Contact from "../components/Contact.jsx";

function HomePage() {
    return(
        <div>
            <section id="home"><Hero /></section>
            <section id="about"><About /></section>
            <section id="leaders"><Leaders /></section>
            <section id="voices"><Voices /></section>
            <section id="social-work"><Social /></section>
            <section id="news"><News /></section>
            <section id="contact"><Contact /></section>
        </div>
    )
}

export default HomePage;
