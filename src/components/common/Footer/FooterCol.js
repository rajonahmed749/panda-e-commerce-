import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 style={{ color: "#1CC7C1" }} className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index}><h6 className="text-secondary">{item.name}</h6></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;