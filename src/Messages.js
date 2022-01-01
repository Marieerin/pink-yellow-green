import React from "react";

const Messages = (props) => {
    const wins = props.wins;
    const loss = props.loss;
    const total = props.total;

    const tenWins = <p id='tenWins'>You got 10 right!! Can you make it to 100?</p>
    const tenLoss = <p id='tenLoss'>Oh no! You got 10 wrong!</p>
    
    return (
        <div>
            {/* {tenWins} */}
            {/* {tenLoss} */}
        </div>
    )
};

export default Messages;