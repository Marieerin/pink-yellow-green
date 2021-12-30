import React from "react";

const Counter = (props) => {
    return(
        <div id="counter">
            <div className="score">
                Correct
                <span>
                    {props.wins}
                </span>
            </div>
            <div className="score">
                Errors
                <span>
                    {props.loss}
                </span>
            </div>
            <div className="score">
                Total
                <span>
                    {props.total}
                </span>
            </div>
        </div>
    )
};

export default Counter