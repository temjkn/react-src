import * as Axios from 'axios';
import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { getUserProfileThunk } from '../../redux/profile-reduser';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getUserProfileThunk(userId);
        
        //так делал до thunk
        // usersAPI.getProfile(userId).then(
        //     response => {
        //         this.props.setUserProfile(response.data);
        //     }
        // )
    }

    render() {
        if(!this.props.isAuth) return <Redirect to = 'login'/>
        return(
            <div>
                <ProfileInfo {...this.props}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent);