import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
//console.log(classes);

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
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;