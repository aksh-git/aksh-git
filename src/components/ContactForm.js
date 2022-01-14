import React from 'react'
import Logo from './Logo'

function ContactForm() {

    return (
        <div className='contact-form'>
            <div className='heading'>
                <span className='white'>Get In Touch</span>
                <div stytle={{marginLeft:'10px'}} className='contact-logo'>
                    <Logo />
                </div>
            </div>
            <form id="contact" action={()=>{window.load('mailto:sharewithakashyadav@gmail.com')}} method="post" enctype="text/plain">
                <div className='form-content'>
                    <input className="name" type="text" name='name' required placeholder='Your Name'/>
                    <br/>
                    <input className="email" name='from' type="email" required placeholder='yourmail@email.com' />
                    <br/>
                    <textarea className="message" name='body' maxLength="300" rows="3" required placeholder='Write your message...'></textarea>
                    <br/>
                    <div className='contact-btns'>
                    <button className='cancel' onClick={()=>{document.getElementById("contact-form-container").style.display="none"}}><i className="fa fa-times" aria-hidden="true"></i> Cancel</button>
                    <button className='submit' id="submit" ><i className="fa fa-envelope-o" aria-hidden="true"></i> Send Email</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
