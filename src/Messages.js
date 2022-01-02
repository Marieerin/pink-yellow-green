import React, { useState } from "react";

const Messages = (props) => {
    const [displayMessages, setDisplayMessages] = useState([]);
    const wins = props.wins;
    const loss = props.loss;
    const total = props.total;

    const tenWins = `You got 10 right!! Can you make it to 100?`;
    const tenLoss = `Oh no! You got 10 wrong!`;
    const hundredWin = `WOW look at you! You got to 100!`

    document.addEventListener('click', () => {
        if(!displayMessages.includes(tenWins) && wins === 10){    
            setDisplayMessages([...displayMessages, tenWins]);
        } 
        else if (!displayMessages.includes(tenLoss) && loss === 10) {
            setDisplayMessages([...displayMessages, tenLoss]);
        } else if (!displayMessages.includes(hundredWin) && wins === 100) {
            setDisplayMessages([...displayMessages, hundredWin]);
        }
    });

    return (
        <div id='messages'>
            {displayMessages.map((message, i) => {
                console.log(message);
                return(
                    <p key={i} className='messageBox' >
                        {message}
                    </p>
                )
                
            })}
        </div>
    )
};

export default Messages;