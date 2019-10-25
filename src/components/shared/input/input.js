import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../actions/actions";
import './input.scss';

const Input = (props) => {
    const {id, type, value, placeholder, maxlength, label, checked, customID, customClass, onChange, onClick, inputref, edited, actions, onKeyUp} = props;

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
                onClick={onClick}
                onKeyUp={onKeyUp}
                maxLength={maxlength}
                ref={inputref}
            />
            {edited ?
                <input
                    className={`input-wrap__input ${customClass ? customClass : ""}`}
                    type="text"
                    value={label}
                    onChange={e => {
                        actions.editTask({
                            id,
                            text: e.target.value,
                        });
                    }}
                    onKeyUp={e => {
                        if (e.keyCode === 13 || e.keyCode === 27) {
                            actions.changeEditTaskState(id);
                        }
                    }}
                    maxLength={maxlength}
                />
                :
                <label className="input-wrap__label" htmlFor={customID}>{label}</label>
            }
        </span>
    )
};

export default connect(
    null,
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Input);