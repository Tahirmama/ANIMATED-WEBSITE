import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

 const Footer = () => {
    return (
        
        <nav align="center" className="Footer">
     
                <Link to="/" className="Button">
                <img src="https://www.freepnglogos.com/uploads/logo-home-png/house-logo-design-vector-real-estate-logo-photos-25.png" height="40px" width="80px" alt="HOME"  title="HOME"/>
                    
                    </Link>
            
        
                <Link to="/Aboutus" className="Button" >
                <img src="https://lh3.googleusercontent.com/proxy/VUKzUdevHAZ7NvKLscACJeRDH5gqBoRCEvFT4_wOq0xX33eyCkiqmbvQgRFy6WxCqI5uDLcwQPAryleFyz8SmLkn1zN9mEtpGleiglfYnJaVgZgiGPn6l_yfxyXwB3M" height="40px" width="150px" alt ="ABOUT" title="ABOUT US" />
                    
                    </Link>
    
                <Link to="/ContactUs" className="Button" >
<img src="https://www.smirtware.com/images/icons/hexagon/darkblue/MI_DARK_BLUE_ICON_SUPPORT.png" height="40px" width="80px" alt="Contact"  title="CONTACT US"/>
                </Link>

           

        </nav>
    )
}
export default Footer;