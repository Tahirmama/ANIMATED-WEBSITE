import { backInRight ,backInDown} from '@wellyshen/use-web-animations';
import React from 'react'
import Blink from 'react-blink-text';
import useWebAnimations,{backInLeft} from "@wellyshen/use-web-animations";

export const About = () => {
  const headingref = useWebAnimations({
    ...backInLeft
  })
  const headingref1 = useWebAnimations({
    ...backInRight
  })
  const headingref2 = useWebAnimations({
    ...backInDown
  })
  
  return (
    <div >
      <br />
      <h2 align="center" className="abt" ref={headingref2.ref}>  ABOUT<span className="abt1"> US</span> </h2>
     
     
      <img src="https://digitalazeem.com/wp-content/uploads/2021/06/e6a91cf71ae7ef9c95cf6518852eddb5.gif"ref={headingref1.ref} alt ="about us" title="about"align="right" className="aboutpic" />
      <div className="aboutline"ref={headingref.ref}>
       love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.
      
     
      <br/>
      <br/>
      <Blink text="We don't just build websites, we build websites that sells" fontSize="30px" color="rgba(5, 2, 53, 0.5)" align="center" className="aboutblink" />
      <br />
      <span className ="cpr">
            © reserved by Tahir
            
</span>
      <br/>
      <br/>   
      <br/>
         </div>
    </div>
  )
}