import React from 'react';
import {Link, NavLink} from "react-router-dom"



class Navbar extends React.Component{
    render(){
        return (
            <>   
            <div>
                <ul>
                    <li>
                        <NavLink
                        className = "nav-link"
                        activeClassName = "active"
                        isActive = {() => window.location.pathname === "/Home"}
                        to="/Home"
                        
                        
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className = "nav-link"
                        activeClassName = "active"
                        isActive = {() => window.location.pathname === "/Projects"}
                        to="/Projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className = "nav-link"
                        activeClassName = "active"
                        isActive = {() => window.location.pathname === "/Contact"}
                        to="/Contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                
                </ul>
            </div>
        </>
        )
    }
}
export default Navbar