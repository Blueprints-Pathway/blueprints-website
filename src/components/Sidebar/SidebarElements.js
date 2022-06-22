import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
height:600px;
width: 395px;

background: rgba(3, 25, 44, 0.81);
transition:1.3s ease-in-out;
opacity:${({ isOpen})=>(isOpen ? '100':'0')};
left:${({isOpen})=>(isOpen ? 0:'-100%')};



 `
 export const Icon = styled.div`
 color:#ffffff;
 position:absolute;
 left: 12.91%;
right: 83.16%;
top: 5.22%;
bottom: 92.98%;
z-index:2;
cursor:pointer;
font-size:20px;
left: 51px;



 
 
 `
 export const CloseIcon = styled(FaTimes)`


 `
 export const SideBlock=styled.div`
 width: 118px;
height: 600px;
left: 0px;
top: 0px;
position:absolute;
background: #105899;
 `
export  const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
padding-left:117px;
position:relative;
font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 46px;
/* or 192% */

letter-spacing: 0.02em;

color: #FFFFFF;



&::before{
    position:absolute;
    content:'';
    width:277px;
    height:1px;
    margin-top:40px;
    
    left:118px;
    background-color:white;

}

`
export const SidebarWrapper=styled.div`
margin-top:90px;
 `
export const SidebarMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(8,50px);

`