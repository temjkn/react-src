import classes from './Preloader.module.css';
import React from 'react';

function Preloader(){
    return <div className = {classes.wrap}>
        <h2 className = {classes.content}>...isLoading...</h2>
    </div>
}

export default Preloader;