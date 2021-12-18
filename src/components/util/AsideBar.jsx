import React from 'react'
import { UilHeart, UilMapMarkerEdit, UilFolder } from '@iconscout/react-unicons'
import {NavLink} from '../../styles/Buttons'

import {AsideContainer} from '../../styles/Layout'
const AsideBar = () => {
    return ( 
        <AsideContainer>
        <NavLink to={'/'}> <UilHeart style={{marginRight: "10px",}}/> Bio</NavLink>
        <NavLink to={'/projects'}> <UilFolder style={{marginRight: "10px",}}/> Projects</NavLink>
        
        <NavLink to={'/Findme'}> <UilMapMarkerEdit style={{marginRight: "10px",}} /> Find Me</NavLink>
        </AsideContainer>
     );
}
 
export default AsideBar;