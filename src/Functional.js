import React from 'react';

// Functional, Dumb, Presentational, and Stateless Component
const Testing = (props) => {


    // No State
    // No functions

    console.log("First: ", props.first);
    console.log("Second: ", props.second);


    return (
        <div>
            <h1> Username: </h1>
            <h1> Username: </h1>
            <h1> I am </h1>
        </div>
    );

};

export default Testing;