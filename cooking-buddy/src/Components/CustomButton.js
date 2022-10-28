/* 
    Custom button that is reusable everywhere. To make it usable everywhere we have a number of props that allow for enough customization. This way we only need to have one component for buttons. 
    We get a onclick, path and of course the text content from the props.
*/

import React, {Fragment} from 'react';
import './CustomButton.css';

function CustomButton (props) {
    return (
        <Fragment>
            <a onClick={props.clickEvent} href={props.path}>{props.content}</a>
        </Fragment>
    );
}

export default CustomButton;