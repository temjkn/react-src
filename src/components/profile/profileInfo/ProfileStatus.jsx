import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state={
        editMode : false
    }

    activateEditMode(){
        this.setState({editMode : true});
    }
    deActivateEditMode(){
        this.setState({editMode : false});
    }
    render(){
        return(
            <div>
                {this.state.editMode ?
                    <input onBlur = {this.deActivateEditMode.bind(this)} value = {this.props.status}/> :
                    <span onClick = {this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
            </div>
    )}
}
export default ProfileStatus;