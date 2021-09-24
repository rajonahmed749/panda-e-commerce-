import React from 'react';
import bag1 from '../../../images/bag-1.png';
import bag2 from '../../../images/bag-2.png';
import bag3 from '../../../images/bag-3.png';
const Upcoming = () => {
    const products = [
        {
            headline: "The Preschool Prepartaion",
            time: "Fri Dec 25 2021",
            picture: bag1

        },
        {
            headline: "Dual Language Learner",
            time: "Sun Nov 14 2021",
            picture: bag2
        },
        {
            headline: "The Preschool Prepartaion",
            time: new Date().toDateString(),
            picture: bag3
        }
    ]
    return (
        <div>
            upcomming
        </div>
    );
};

export default Upcoming;