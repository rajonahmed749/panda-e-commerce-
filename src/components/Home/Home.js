import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../common/Footer/Footer';
import Navbar from '../common/Navbar/Menubar';
import Header from './Header/Header';


const Home = () => {
    return (
        <Container>
            <Navbar />
            <Header />
            <Footer />
        </Container>
    );
};

export default Home;