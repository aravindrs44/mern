import React from 'react';

const Color = props => {
    const thing = props.thing;
    console.log(props);
    
    const style = {
        backgroundColor:props.bgcolor,
        color: props.textcolor
    }



    return(
        <div style = {style}>
            {
                isNaN(thing) ? <h1>The word is: {thing}</h1>: <h1>The number is: {thing}</h1>
            }
        </div>
    )
}

export default Color;