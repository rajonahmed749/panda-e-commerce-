import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header/Header';
import Products from './Products/Products';
import Upcoming from './Upcoming/Upcoming';


const Home = () => {
    return (
        <Container>
            <Header />
            <Products />
            <Upcoming />
        </Container>
    );
};

export default Home;