import React from 'react'
import '../css/Footer.css'
import Logo from './Logo'

function Footer() {

    const d = new Date()
    const year = d.getFullYear()

    return (
        <>
        <div className='footer-main' id="footer">
          <div className="heading" id="Contact">
            <span className="">About</span>
          </div>

          <div className='container section'>
            <div className="footer-logo">
              <Logo />
            </div>
            <div className='menu'>
              <ul className='white'>
                <li><a href='/'>Home</a></li>
                <li><a href='#Skills'>Skills</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li onClick={()=>{document.getElementById("contact-form-container").style.display="block"}}>Contact - me</li>
              </ul>
            </div>

            <div className='footer-social'>
              <ul>
                <a target="_blank" rel="noreferrer"  href="https://www.twitter.com/akash_369_"><li className="white"><i className="white fa fa-twitter" id="twitter" aria-hidden="true"></i><span>Twitter</span></li></a>
                <a target="_blank" rel="noreferrer"  href="https://www.github.com/aksh-git"><li className="white"><i className="white fa fa-github" aria-hidden="true"></i><span>Github</span></li></a>
                <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/"><li className="white"><i className="white fa fa-linkedin-square" aria-hidden="true"></i><span>Linkedin</span></li></a>
                <a target="_blank" rel="noreferrer"  href="https://www.instagram.com/ig_akash369"><li className="white"><i className="white fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></li></a>
              </ul>
            </div>
          </div>
          
          <div className='footer-extra container'>
              <span className='white' style={{fontSize:'12pt'}}><strong><i style={{padding:'0 5px 0'}} className="fa fa-envelope-o" aria-hidden="true"></i>  </strong> sharewithakashyadav@gmail.com</span>
              <span className='white' style={{fontSize:'12pt'}}><strong><i style={{padding:'0 5px 0'}}  className="white fa fa-briefcase" aria-hidden="true"></i>  </strong> Got any work for me ? <span style={{textDecoration:'underline',cursor:'pointer'}} onClick={()=>{document.getElementById("contact-form-container").style.display="block"}}>contact</span> </span>
          </div>

          <div className='copyright'>
              <div className='inside'>
                <span style={{fontSize:'14px',fontWeight:'600'}} className="white" >Made with <i style={{color:'#ff0000',fontSize:'16px'}} className="fa fa-heart"></i> by Akash</span>
                <center style={{margin:'-10px'}}>
                <hr className="white" width="100vw"/>
                </center>
                <span style={{fontSize:'12px',fontWeight:'200',marginTop:'20px'}} className="white" ><i style={{color:'grey',fontSize:'13px',fontWeight:'200'}} className="fa fa-copyright"></i> All rights reserved {year}</span>
              </div>
            </div>
        </div>     
        </>
    )
}

export default Footer
