import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  //console.log(props.message);
  
  return (
    <div className={classes.item}>
      <img src='https://static.wikia.nocookie.net/jamescameronsavatar/images/b/b4/Avatar2logo2.jpg/revision/latest?cb=20201224182633' />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;