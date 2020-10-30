import React from 'react';
import { withAuthRedirectHOC } from '../../hoc/withAuthRedirectHOC';
// import classes from './Setting.module.css';

function Setting(props){
    return(
        <div>
            <span>Setting</span>
        </div>
    );
}

export default withAuthRedirectHOC(Setting);