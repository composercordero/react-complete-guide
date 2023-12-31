import React from 'react';
import classes from './input.module.css'
import { useRef, useImperativeHandle } from 'react'

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, ()=>{
    return{
        focus: activate // The name focus can be anything
    }})

    return (<>
            <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
            >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            </div>

    </>
    );
    });

    export default Input