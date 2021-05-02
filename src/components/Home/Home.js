import React from 'react';
import Header from './Header/Header';
import './Home.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import HeaderMain from './HeaderMain/HeaderMain';
import Skills from '../Skills/Skills';
import Blogs from '../Blogs/Blogs';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <section id="home">
            <Header></Header>
            <HeaderMain></HeaderMain>
            <About></About>
            <Portfolio></Portfolio>
            <Blogs></Blogs>
            <Resume></Resume>
            <Contact></Contact>

        </section>
    );
};

export default Home;