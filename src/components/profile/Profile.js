import React from 'react';
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
function Profile(props){
    return(
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
      </div>
    );
}
export default Profile;