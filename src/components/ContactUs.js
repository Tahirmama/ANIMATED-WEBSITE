import React from 'react'
import useWebAnimations, { fadeInRight,backInDown ,fadeInLeft } from '@wellyshen/use-web-animations';
import "../App.css"


export const Contact = () => {
  const headingref = useWebAnimations({
    ...fadeInLeft
  })
  const headingref1 = useWebAnimations({
    ...fadeInRight
  })
  const headingref2 = useWebAnimations({
    ...backInDown
  })

  return (
    <div>
      <br />
      <h2 align="center" className="abt" ref={headingref2.ref}>  CONTACT<span className="abt1"> US</span> </h2>
      
      <img src="https://static.wixstatic.com/media/4575f6_ec4b613c4b6c4e9b89ad9c530b51c52a~mv2.gif" ref={headingref1.ref} height="450px" alt="CONTACT" title="CONTACT" align="right" />
<br/>
<div ref={headingref.ref}>
<span className="contact">
      <img src="http://assets.stickpng.com/thumbs/5a4525b2546ddca7e1fcbc82.png" alt="phone" title="PHONE" className="phone" />
      </span>
      <br />
      <span className="cnt">
      +0237647863146
      </span>

      <br />
      ========================
      <br/>
      <span className="contact">
      <img src=" https://www.freepnglogos.com/uploads/email-logo-png-27.png" className="email" alt="email" title="EMAIL" />
     </span>
      <br />
      <span className="cnt">
      tahirmama8@gmail.com
      </span>
      <br />
      ========================
      <br/>
      <span className="contact">
      <img src="https://i.pinimg.com/originals/9b/56/f5/9b56f50e5f4a28da700b0c991d96b5c7.png" className="address" alt="address" title="ADDRESS" />
      </span>

      <br /> 
      
      <span className="cnt">  xyz street,PAKISTAN
      </span>
      <br/>
      ========================
      <br/>
 <br/>
 </div>
 <hr/>
 <hr/>
 <span className="project">
   START YOUR NEW PROJECT</span>  
   <br/>
   <br/>
   <form>
   <input type="text" placeholder="YOUR NAME"  className="input"/>
   <input type="Email" placeholder="YOUR EMAIL"  className="input1"/>
   <input type="number" placeholder="YOUR NUMBER"  className="input2"/>
   <br/>
   <input type="submit" className="submit"/>
   </form>
   <br/>  
   <hr/>
   <hr/> 
   <br/>
   <span className ="cpr">
            © reserved by Tahir
            
</span>
   <br/>
   <br/>
     

    </div>
  )
}