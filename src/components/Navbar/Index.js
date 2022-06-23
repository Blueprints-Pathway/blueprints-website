import React from 'react'
import { Nav,NavbarContainer , NavSpace, NavEmail, NavbarComponent, NavLink, NavMenu } from './NavbarElements'
import { FaEnvelope} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavSpace>

          </NavSpace>
          <NavbarComponent>
           <NavMenu>
              <NavLink to='home'>
              ABOUT US

                </NavLink>
                <NavLink to='about us'>
                GALLERY

                </NavLink>
                <NavLink to='gallery'>
                PROJECTS

                </NavLink>
                <NavLink to='projects'>
                  COMPANY
                   

                </NavLink>
                <NavLink to='culture'>
                    CONTACT US

                </NavLink>
               
            </NavMenu>
            

          </NavbarComponent>
          <NavEmail to='/'>
            <FaEnvelope/>

          </NavEmail>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
 