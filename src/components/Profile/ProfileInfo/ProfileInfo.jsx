import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src='https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/japan-lakes-cover.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;