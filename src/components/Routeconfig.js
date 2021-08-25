import React from"react"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import {Home} from "./Home"
import  Navbar  from "./Navbar"
import { About } from "./Aboutus";
import { Contact } from "./ContactUs";
import Footer from "./Footer";


export const Config =()=>{
  
    return(
        <div className="whole"> 
            
<Router>
<Navbar />
<hr/>

           
<Routes>
    <Route exact path = "/" element={<Home/>}/>
    <Route exact path = "/Aboutus" element={<About/>}/>
    <Route path = "/ContactUs" element={<Contact/>}/>        
    <Route path="*" component={()=><h2>404 Not Found</h2>}/>        

    </Routes>
    <Footer />
</Router>

        </div>

    )
}