import React from 'react';
import './input.scss';

const Input = (props) => {
    const {type, value, placeholder, label, checked, customID, customClass, onChange} = props;

    return (
        <span className="input-wrap">
            <input
                id={customID ? customID : null}
                className={`input-wrap__input ${customClass ? customClass : ""} ${type ? type : ""}`}
                name={customID}
                type={type ? type : "text"}
                value={value}
                placeholder={placeholder ? placeholder : null}
                checked={checked}
                onChange={onChange}
            />
            <label className="input-wrap__label" htmlFor={customID}>{label}</label>
        </span>
    )
};

export default Input;