import React from 'react';
import bag1 from '../../../images/bag-1.png';
import bag2 from '../../../images/bag-2.png';
import bag3 from '../../../images/bag-3.png';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import UpcomingBag from './UpcomingBag';
const Upcoming = () => {
    const products = [
        {
            headline: "The school/college Bag",
            time: "Fri Dec 25 2021",
            picture: bag1

        },
        {
            headline: "Ultimate university Bag",
            time: "Sun Nov 14 2021",
            picture: bag2
        },
        {
            headline: "Standard travel Bag",
            time: new Date().toDateString(),
            picture: bag3
        }
    ]
    return (
        <Container >
            <h3 className="mt-5 text-center"><span className="fs-2 border-bottom border-info">Upcoming Products </span></h3>
            <Row className="justify-content-center mt-5 ">
                {
                    products.map(bag => <UpcomingBag bag={bag}></UpcomingBag>)
                }
            </Row>
        </Container>
    );
};

export default Upcoming;