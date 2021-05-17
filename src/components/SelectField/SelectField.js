import {Select} from 'antd';
import styles from './SelectField.module.css';
const {Option} = Select;


const SelectEl = (props) => {
    //prepare options
    const options = [];
    for (let option of props.options) {
        options.push(<Option key={option}>{option}</Option>);
    }

    let selectElement = null;
    let labelElement = null;

    switch(props.label){
        case('none'):
            labelElement=null;
        break;
        case('br'):
            labelElement=<br/>;
        break;
        default:
            labelElement= <label className={styles.selectLabel}>{props.label}</label>;
        break;
    };

    switch (props.selectType){
        case( 'normal' ):
            selectElement = (
                <Select
                size="large"
                    style={{width: '100%',fontWeight:'bold'}}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    >
                        {options}
                </Select>
            );
            break;
        case ( 'tags' ):
            selectElement = (
            <Select 
                size="large" 
                mode="tags" 
                style={{ width: '100%' , fontWeight:'bold'}} 
                placeholder={props.placeholder}
                onChange={props.onChange}
                >
                {options}
            </Select>
            );
        break;
    }
    return(
        <div className={styles.select}>
            {labelElement}
            {selectElement}
        </div>
    );
};

export default SelectEl;