import React, {Component} from 'react';
import styles from "./CheckBox.css";

type CheckBoxProps = {
    name: string,
    placeholder: string,
    defaultChecked: boolean,
    onChange: void,
}

class CheckBox extends Component<CheckBoxProps> {
    constructor(props: CheckBoxProps) {
        super(props)
    }

    render() {
        const {placeholder, name, onChange, defaultChecked} = this.props
        return (
            <label className={styles.checkbox}>
                {placeholder}
                <input type={"checkbox"} name={name} defaultChecked={defaultChecked} onClick={onChange}/>
                <span className={styles.checkMark}></span>
            </label>
        )
    }
}

export default CheckBox;