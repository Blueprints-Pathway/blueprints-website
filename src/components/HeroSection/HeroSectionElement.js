import styled from 'styled-components'
import Background from '../../Images/Background.png'


export const HeroContainer = styled.div`
display:grid;
grid-template-columns:118px 1fr ;
position:relative;
width:100%;
height:100vh;





`



export const HeroContent = styled.div`
background-image:linear-gradient(0deg,rgba(22, 21, 21, 0.6) 0%,rgba(22, 21, 21, 0.6) 50%,rgba(22, 21, 21, 0.6) 100%),url(${Background});


background-size:cover;
background-repeat:no-repeat;
background-positon:center;









`
export const HeroToggle = styled.div`

`
export const HeroSection = styled.section`
width:100%;
height:100vh;

`
export const ImageLogo = styled.img`
position: absolute;
width: 88px;
height: 88px;
left: 15px;
top: 24px;
cursor:pointer;
`
export const ImageMenuu = styled.img`
position: absolute;
width: 179px;
height: 165.34px;
left: 132px;
top: -9px;
`
export const HeroWelcome = styled.div`
position: absolute;
width:1024px;

height: 330px;
padding-left:36.99px;
margin-left:141px;

top: 250px;



    &::before{
        content: '';
        position: absolute;
        background:rgba(255, 255, 255, 1);
        width: 315px;
        top:50%;
        border: 1px solid #FFFFFF;
       
        
       
        left:-160px;
        
    
        transform:rotate(90deg);
        transition: 0.3s;
        
    }







h1{
text-transform:uppercase;
width: 637px;
height: 169px;
left: 296px;
top: 396px;



font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 58px;
margin-bottom:40px;




letter-spacing: 0.02em;

color: #FFFFFF;

}
h5{
    width: 244px;
height: 30px;
left: 296px;
top: 347px;


font-family: Karla;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 46px;
margin-bottom:19px;


letter-spacing: 0.02em;

color: #FFFFFF;

}


`
export const NextButton= styled.div`
position:absolute;
left:91.11%;
top:57.63%;
font-size:30px;
display:flex;
color:white;
width:7.75px;
height:15.44px;

`
export const SliderButtons = styled.div`


`;

 

export const PrevButton =styled.div`
position:absolute;
right:87.81%;
top:57.63%;

display:flex;
z-index:10;
color:white;
width:7.75px;
height:15.44px;

`


