import React, {useState} from 'react';

const Display = props => {
    const {boxes} = props;

    const boxStyle = {
        backgroundColor: boxes.color,
        width: `${boxes.size}px`,
        height: `${boxes.size}px`,
        display: "inline-block",
        margin: `${10}px`
    }

    return(
        <div style = {boxStyle}/>
    );
}

export default Display;