import React, {Component} from 'react';
import styles from "./Input.css";

type InputProps = {
    type: string,
    name: string,
    placeholder: string,
    img: string,
    autoFocus: boolean,
    value: string,
    onChange: void,
}

class Input extends Component<InputProps> {
    constructor(props: InputProps) {
        super(props)
    }
    render() {
        const {type, placeholder, name, autoFocus, img, onChange, value} = this.props
        return (
            <input
                className={styles.input}
                type={type}
                name={name}
                placeholder={placeholder}
                autoFocus={autoFocus} 
                style={{backgroundImage: `url(${img})`}}
                onChange={onChange}
                value={value}
            />
        )
    }
}

export default Input;