import React, { useEffect, useState, useRef } from "react";

const Messages = (props) => {
    const [displayMessages, setDisplayMessages] = useState([]);
    const wins = props.wins;
    const loss = props.loss;
    const total = props.total;

    const tenWins = `You got 10 right!! Can you make it to 100?`
    const tenLoss = `Oh no! You got 10 wrong!`

    let w = 0
    let l = 0

    document.addEventListener('click', () => {
        // if(displayMessages.includes(tenWins) && wins === 1) {
        //     console.log('yes');
        // }
        
        if(!displayMessages.includes(tenWins) && wins === 1){    
            w = w + 1
            setDisplayMessages([...displayMessages, tenWins]);
        } else if (!displayMessages.includes(tenLoss)&& loss === 1) {
            l = l + 1
            setDisplayMessages([...displayMessages, tenLoss]);
        } 
        console.log(displayMessages.find(o => o.name === `${tenWins}`));
    });

    // const messageTrigger = () => {
    //     // let w = 0
    //     // let l = 0
    //     // let t = 0
    //     // console.log(displayMessages);
    //     const dM = displayMessages

    //         if(wins === 1){
    //             w = w + 1
    
    //             console.log(w );
    //             // setDisplayMessages([...dM, tenWins]);
                
    
    //     } else if (loss === 1) {
    //         // displayMessages.push(tenLoss)
    //         console.log(displayMessages, "loss");
    //     } else if (w === 0) {
    //         return
    //     }
    // }

    return (
        <div id='messages'>
            {displayMessages.map((message, i) => {
                console.log(message);
                return(
                    <p key={i}>
                        {message}
                    </p>
                )
                
            })}
        </div>
    )
};

export default Messages;