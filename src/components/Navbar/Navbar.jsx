import React from 'react';
import classes from './Navbar.module.css'
console.log(classes);

/* Объяснение верхнего объекта classes с его свойствами и значениями
let classes = {
  'nav': 'Navbar_nav___TDPa',
  'item': 'Navbar_item__2VHiB',
  'active': 'Navbar_active...
}
*/

// let class1 = "item";
// let class2 = "active";

// // "item active"
// let classess = class1 + " " + class2;
// let classessNew = `${class1.item} ${class2.active}`;




const Navbar = () => {
    return <nav className = {classes.nav}>
    <div className = {classes.item}>
      <a>Profile</a>
    </div>
    <div className = {`${classes.item} ${classes.active}`}>
      <a>Messages</a>
    </div>
    <div className = {classes.item}>
      <a>News</a>
    </div>
    <div className = {classes.item}>
      <a>Music</a>
    </div>
    <div className = {classes.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar;