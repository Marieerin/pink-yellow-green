import React from "react";

const Modal = (props) => {
    if(props.isOpen){
        return (
        <div id="modal" >
            <p>
                this is where the instructions go. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsum illum magni pariatur eveniet ut nobis deleniti soluta rerum provident.
            </p>
            <button onClick={() => props.setIsOpen(false)}>Start!</button>
        </div>
        ) 
    }
    return null
};

export default Modal