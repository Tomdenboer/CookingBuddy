import React, {Fragment} from 'react';
import './CustomButton.css';

function CustomButton (props) {
    return (
        <Fragment>
            <button>{props.content}</button>
        </Fragment>
    );
}

export default CustomButton;