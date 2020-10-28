import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import classes from './Setting.module.css';

function Setting(props){
    if(!props.isAuth) return <Redirect to = 'login'/>
    return(
        <div>
            <span>Setting</span>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(Setting);