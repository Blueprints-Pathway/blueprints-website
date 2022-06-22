import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SideBlock,SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} >
            <CloseIcon/>

            
        </Icon>
        <SideBlock/>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home'>
                    HOME

                </SidebarLink>
                <SidebarLink to='about us'>
                    ABOUT US

                </SidebarLink>
                <SidebarLink to='gallery'>
                    GALLERY

                </SidebarLink>
                <SidebarLink to='projects'>
                   PROJECTS

                </SidebarLink>
                <SidebarLink to='culture'>
                    CULTURE

                </SidebarLink>
                <SidebarLink to='contact us'>
                    CONTACT US

                </SidebarLink>
                <SidebarLink to='newsletter'>
                   NEWSLETTER

                </SidebarLink>
                <SidebarLink to=' privacy policy'>
                    PRIVACY POLICY

                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>

    </>
  )
}

export default Sidebar