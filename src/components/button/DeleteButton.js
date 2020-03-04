import React from 'react';

function DeleteButton({onClick}) {
    return (
        <button style={{width: '25px', height: '25px'}} onClick={onClick}>Delete</button>
    );
}

export default DeleteButton;