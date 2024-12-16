import { NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import React from 'react'

const MainNavigation = () => {
  return (
   <header className={classes.header}>
    <nav>
        <ul className={classes.list}>
            <li>
              <NavLink 
                to="/"  
                className={({isActive})=>isActive?classes.active:undefined}

                // For InLine stylling
                  // style={({isActive})=>({textAlign: isActive?'center':'left',})}


                end >Home      
              </NavLink>
            </li>
            {/* End will tell that route ending with / have above classes */}
            <li><NavLink to="/products"  className={({isActive})=>isActive?classes.active:undefined}>Products</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default MainNavigation