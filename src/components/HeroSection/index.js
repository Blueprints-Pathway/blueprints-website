import React from 'react' 
import ImageMenu from "../../Images/Logo.png";
import Image from "../../Images/menu.png";
import { Button } from '../ButtonElement';
import { FaAngleLeft,FaAngleRight} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HeroContainer, ImageLogo , ImageMenuu, HeroContent, HeroToggle, HeroWelcome, SliderButtons, PrevButton, NextButton } from './HeroSectionElement';


 

const HeroSection = ({toggle}) => {
  return (
    <>
    <HeroContainer>
        <HeroToggle onClick={toggle}>
        
        <ImageLogo src={Image} type='image/png'>
                    
                      

                    </ImageLogo>  
            
        

        </HeroToggle>
        
        
        <HeroContent>
            
            <ImageMenuu src={ImageMenu} type='image/png'></ImageMenuu>
            <HeroWelcome>
                <h5>Welcome to the cave</h5>
                <h1>In our space we always deliver more than expected</h1>
                <Button>Get Started</Button>
               
                

               
                

            </HeroWelcome>
            <SliderButtons>
            <PrevButton>
                <FaAngleLeft className='icon'/>

            </PrevButton>
            <NextButton>
                <FaAngleRight/>
          
            </NextButton>
          </SliderButtons> 
            
             
         
        

            </HeroContent> 
           
              
    
        
    </HeroContainer>
     
    </>
  )
}

export default HeroSection