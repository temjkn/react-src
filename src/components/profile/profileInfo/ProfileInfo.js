import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader';
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props){
    if (!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <div className={classes.top_image}>
                <img alt='we' src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
            </div>
            <div className={classes.user_info}>
                <div className={classes.user_photo}>
                    <img alt='we' src={props.profile.photos.small}/>
                </div>
                <div>
                    <h2>Fred</h2>
                    <h3>My status:</h3>
                    <ProfileStatus status={props.status} updateStatusTHUNK = {props.updateStatusTHUNK}  userId = {props.profile.userId}/>
                    {/* <span className={classes.user_list}>Date of Birth: <span>23 dec.</span></span>
                    <span className={classes.user_list}>City: <span>Polock</span></span>
                    <span className={classes.user_list}>Education: <span>BSU</span></span> */}
                    <span className={classes.user_list}>About me: <span>{props.profile.aboutMe}</span></span>
                </div>
            </div>
      </div>
    );
}
export default ProfileInfo;