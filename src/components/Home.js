import React from "react";
import Blink from 'react-blink-text';
import useWebAnimations, {fadeInUp,backInDown} from "@wellyshen/use-web-animations";
export const Home = () => {
    const headingref = useWebAnimations({
        ...fadeInUp
      })
      const headingref2 = useWebAnimations({
        ...backInDown
      })
    return (
        
        <div className="HomePage" ref={headingref.ref}>
            <br/>
            <h2 align="center" className="abt" ref={headingref2.ref}>  HOME </h2>
            <img src="https://cdn.dribbble.com/users/1242979/screenshots/7194318/media/3c31c03f5add6763c5fa6885b3b90a79.gif" alt="Boy working on laptop" title="Muztas" className="homepic" align="right" />
            <br />
            <br />
        
            <h4 className="homehead">
                <span >Do you want to increase your business ?
                </span>
                <br/><br/>
                <Blink color="rgba(5, 2, 53, 0.5)" text='JOIN MUZTAS' fontSize='40' align="center"  />

                <br /> <br />
                <span >  "Grow your business by convert it into online"
                </span>
            </h4>
            <br/>
            <span className ="cpr">
            © reserved by Tahir
            
</span>
       <br/>     <br/><br/>





        </div>
    )
}