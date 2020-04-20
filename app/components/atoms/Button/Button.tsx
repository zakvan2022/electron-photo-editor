import React, {Component} from 'react';
import styles from "./Button.css";

type ButtonProps = {
    children: any,
    onClick: void
}

class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props)
    }
    render() {
        const {children, onClick} = this.props
        return (
            <button className={styles.button} onClick={onClick}>
                {children}
            </button>
        )
    }
}

export default Button;