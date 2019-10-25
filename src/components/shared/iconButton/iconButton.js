import React from 'react';
import './iconButton.scss';

const IconButton = (props) => {
    const {customClass, onClick} = props;

    return (
        <span
            className={`iconButton ${customClass ? customClass : ""}`}
            onClick={onClick}>
        </span>
    )
};

export default IconButton;