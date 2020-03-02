import React from 'react';

const ButtonX = ({open, closeFunc, style}) => {
    return (
        <button style={open? style : {width: '100%', height: '100%'}} onClick={closeFunc}>{open ? 'X' : 'Open'}</button>
    );
};

export default ButtonX;