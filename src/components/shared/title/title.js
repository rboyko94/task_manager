import React from 'react';
import './title.scss'

const Title = (props) => {
    const {text, customClass} = props;

    return (
        <h3 className={`title ${customClass ? customClass : null}`}>
            {text ? text : 'Title'}
        </h3>
    )
}

export default Title;