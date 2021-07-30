import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1åx solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};


export default Scroll;