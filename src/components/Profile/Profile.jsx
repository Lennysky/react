import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
  <div className={classes.content}>
    <div>
      <img src='https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/japan-lakes-cover.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts hey = 'yo' />
  </div>
 ) 
}

export default Profile;