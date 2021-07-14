import React, {useState} from 'react';

const Singular = props => {
    const thing = props.id;

    return(
        <div>
        {
            isNaN(thing) ? <h1>The word is: {thing}</h1>: <h1>The number is: {thing}</h1>
        }
        </div>
    )
}

export default Singular;