import React from "react";

const Counter = (props) => {
    return(
        <div id="counter">
            <div className="score">
                <h3>
                    Correct
                </h3>
                <span>
                    {props.wins}
                </span>
            </div>
            <div className="score">
                <h3>
                    Errors
                </h3>
                <span>
                    {props.loss}
                </span>
            </div>
            <div className="score">
                <h3>
                    Total
                </h3>
                <span>
                    {props.total}
                </span>
            </div>
        </div>
    )
};

export default Counter