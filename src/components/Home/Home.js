import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../common/Footer/Footer';
import Navbar from '../common/Navbar/Menubar';
import Header from './Header/Header';
import Upcoming from './Upcoming/Upcoming';


const Home = () => {
    return (
        <Container>
            <Navbar />
            <Header />
            <Upcoming/>
            <Footer />
        </Container>
    );
};

export default Home;