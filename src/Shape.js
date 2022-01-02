import React from "react";
import './App.css';

function Shape(props) {
    const style = {
      background: props.color,
    };

    const placeHolder = () => {
        props.shapeClicker(props.name)
    };

    return (
        <div className='shape' style={style} onClick={placeHolder} ></div>
    )
}

export default Shape;