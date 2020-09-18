import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo(){
    return(
        <div>
            <div className={classes.top_image}>
                <img alt='we' src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
            </div>
            <div className={classes.user_info}>
                <div className={classes.user_photo}>
                    <img alt='we' src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
                </div>
                <div>
                    <h2>Fred</h2>
                    <span className={classes.user_list}>Date of Birth: <span>23 dec.</span></span>
                    <span className={classes.user_list}>City: <span>Polock</span></span>
                    <span className={classes.user_list}>Education: <span>BSU</span></span>
                </div>
            </div>
      </div>
    );
}
export default ProfileInfo;