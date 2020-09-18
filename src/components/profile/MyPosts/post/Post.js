import React from 'react';
import classes from './Post.module.css';

function Post(props){
    let clickCounter = () => {
        props.clickActionCreator(props.id)
    }
    return(
        <div className={classes.post_item}>
            <div className={classes.post_photo}>
                <img alt='we' src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
            </div>
            <div className={classes.post_text}>
                <p>{props.text}</p>
                <button onClick = {clickCounter} className= {'button ' + classes.button}>ADD LIKE</button>
                <span className={classes.like}>like: {props.like}</span>
            </div>
        </div>
    );
}
export default Post;