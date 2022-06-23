import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";




export const Nav = styled.nav`
position:sticky;
width:100%;
height:60px;

`
export const NavbarContainer = styled.div`
display:grid;
grid-template-columns: 190px auto 110px;

`
export const NavSpace = styled.div`
  `
export const NavEmail =styled(LinkR)`


display:flex;
justify-content:center;
align-items:center;
color: #105899;
background:white;
font-size:30px;
cursor:pointer;

`

export const NavbarComponent = styled.div`
background: #666666;
`
export const NavLink = styled.li`
margin-top:17px;
margin-bottom:20.27px;
margin-left:122px;
font-family: Karla;
font-size: 16px;
font-weight: 700;
color:white;



`
export const NavMenu = styled.ul`
display:flex;
list-style:none;






`



