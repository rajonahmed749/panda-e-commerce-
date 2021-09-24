import React from 'react';
import shoe1 from '../../../images/red-shoe.png';
import shoe2 from '../../../images/shoe-1.png';
import shoe3 from '../../../images/shoe-2.png';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import ProductDetail from './ProductDetail';
const Products = () => {
    const allShoes = [
        {
            id: 1,
            title: "Booster SPLY-350",
            description: "The ultimate SPLY 350 is available now. Latest product from company. So buy it",
            picture: shoe2,
            price: "450"
            
        },
        {
            id: 2,
            title: "Ultimate Red Shoe",
            description: "The ultimate color, red is wow. This is trendy shoe right now. SO buy it quick",
            picture: shoe1,
            price: "890"
            

        },
        {
            id: 3,
            title: "Standard shoe 453",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptatem.",
            picture: shoe3,
            price:"670"
        }
    ]
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                {
                    allShoes.map(shoe => <ProductDetail key={shoe._id} shoe={shoe}></ProductDetail>)
                }
            </Row>
        </Container>
    );
};

export default Products;