/* 
    Custom button that is reusable everywhere. To make it usable everywhere we have a number of props that allow for enough customization. This way we only need to have one component for buttons. 
    We get a onclick, path and of course the text content from the props.
*/

import React, {Fragment, useEffect} from 'react';
import styles from './CustomButton.module.css';

function CustomButton (props) {
    // changes button size based on prop input. I think without sass this is a decent way to do it. 
    var buttonSize = props.size === "small" ? styles.small : styles.big;
        
    return (
        <Fragment>
            <a ref={props.innerRef} className={[styles.button, buttonSize].join(" ")} onClick={props.clickEvent} href={props.path}>{props.content}</a>
        </Fragment>
    );
}

export default CustomButton;