import React, { useState } from 'react'
import Section0 from './Section0'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from './Footer'
import ContactForm from './ContactForm'

function Presentation() {

    const [cForm, setcForm] = useState("none")

    return (
        <> 
          <div onClick={()=>{setcForm("none")}} style={{display:cForm}} className='contact-form-container' id="contact-form-container">
            <div style={{display:'flex',justifyContent:'center',itesmAlign:'center'}} className='inner container'>
                <ContactForm />
            </div>
         </div>
         <Section0 />
         <Section1 />
         <Section2 />
         <Footer />
        </>
    )
}

export default Presentation
