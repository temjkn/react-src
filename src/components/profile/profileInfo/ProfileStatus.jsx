import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{
    state={
        editMode : false,
        status : this.props.status
    }
    componentDidUpdate(prevProps, prevState){
        //если старый статус не равен новому - записываю новый
        //компонента перерисовывается потому что меняется локальный стейт
        if(prevProps.status !== this.props.status){
            this.setState({status : this.props.status})
        }
    }
    activateEditMode = () => {
        if(this.props.userId === 9323){
            this.setState({editMode : true});
        }
    }
    deActivateEditMode = () => {
        this.setState({editMode : false});
        this.props.updateStatusTHUNK(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status : e.currentTarget.value});
    }
    render(){
        console.log(this.props.userId)
        return(
            <div>
                {this.state.editMode ?
                    <input autoFocus = {true} onChange = {this.onStatusChange} onBlur = {this.deActivateEditMode} value = {this.state.status}/> :
                    <span onClick = {this.activateEditMode}>{this.props.status || '-------'}</span>
                }
            </div>
    )}
}
export default ProfileStatus;