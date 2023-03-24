import React from 'react'
import { 
    SideBarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute
     } from './SidebarElements'

function Sidebar({ isOpen, toggle }) {
  return (
    <>
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SideBarContainer>
    </>
  )
}

export default Sidebar