import React from "react";
import { Link } from 'react-router-dom'
import "../App.css"
import useWebAnimations, {fadeInDown} from "@wellyshen/use-web-animations";

const Navbar = () => {
    const headingref = useWebAnimations({
        ...fadeInDown
      })
    return (
        <div id="HOME" ref={headingref.ref}>
            
            <nav align="right"  >
      <Link to= "/" className="NAME">

                    MUZTAS DEVELOPERS
                
                    </Link>
                <Link to="/" className="Button">
                    HOME
                </Link>
                |
                <Link to="/Aboutus" className="Button" >
                    ABOUT
                </Link>
                |
                <Link to="/ContactUs" className="Button" >
                    CONTACT
                </Link>
            </nav>

        </div>
    )
}
export default Navbar;