import React from 'react';
import classes from './../Dialogs.module.css';

function Message(props){
    if(props.isYour){
        return(
            <div className={classes.message +' ' + classes.yourMessage}>
                {props.message}
            </div>
        );
    }else{
        return(
            <div className={classes.message}>
                {props.message}
            </div>
        );
    }
}


export default Message;