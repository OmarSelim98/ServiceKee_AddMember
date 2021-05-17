import React from 'react';
import styles from './InputField.module.css';
import {Input} from 'antd';

const {TextArea} = Input;

/**
 * props
 *  inputtype
 *  label
 */

const InputField = (props) => {

    let inputElement = null;
    let input_props = {...props};
    delete input_props.label;

    switch(props.inputtype){
        case( 'input' ):
            inputElement = <Input style={{fontWeight:'bold'}} placeholder={props.placeholder} size="large" className={styles.inputElement} {...input_props} />;
            break;
        case( 'textarea' ):
            inputElement = <TextArea style={{fontWeight:'bold',minHeight:'100%'}} placeholder={props.placeholder} size="large" className={styles.inputElement} {...input_props}/>;
            break;
        default:
            inputElement = <Input style={{fontWeight:'bold'}} placeholder={props.placeholder} size="large" className={styles.inputElement} {...input_props}/>;
            break;
    }

    return (
        <div className={styles.input}>
            {props.label?
            <label className={styles.inputLabel}>{props.label}</label>:
            <br/>}
            {inputElement}
        </div>
    );
};

export default InputField;