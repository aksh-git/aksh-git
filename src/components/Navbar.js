import React,{ useState } from 'react'
import Logo from './Logo'
import Menu from './hamburger'
import Cross from './crossIcon'

function Navbar(props) {

  const [navBar, setnavBar] = useState("none")
  const [social, setSocialBar] = useState("none")
  //const [presenting, setPresenting] = useState(false)
  const date = new Date()
  const year = date.getFullYear()

    return (
        <nav className="navbar">
          <div className="bar">
            <div className="hamburger-icon" onClick={()=>{setnavBar(navBar==="none"?"block":"none");setSocialBar("none")}} style={{display:'inline-flex',cursor:'pointer'}}>
              <Menu />
              <p style={{margin:'2px 10px',fontSize:'14px',color:'#fff'}}>MENU</p>
            </div>
            <div className="logo" >
              <Logo />
            </div>
            <div className="nav-btns" style={{display:'inline-flex',cursor:'pointer'}}>
              {/*<i title="Play As Presentation" onClick={()=>{setPresenting(presenting?false:true)}} style={{marginRight:'20px',fontSize:'22px'}} className={`white fa fa-${presenting?"pause":"play"}`} aria-hidden="true"></i> */}
              <i title="Let's Connect" onClick={()=>{setSocialBar(social==="none"?"block":"none");setnavBar("none")}} style={{fontSize:'22px'}} className="white fa fa-heart" aria-hidden="true"></i>
            </div>
          </div>
          <div style={{display:navBar,position:'fixed'}} className="nav-menu">
            <div onClick={()=>{setnavBar(navBar==="none"?"block":"none")}} style={{display:'flex',justifyContent:'flex-end',padding:'10px',marginTop:'10px',cursor: 'pointer'}}>
            <p style={{margin:'5px 10px',fontSize:'14px',color:'#fff'}}>Close Menu</p> <Cross />
            </div>
            <div className="profile">
              <center>
                <img src="https://pbs.twimg.com/profile_images/1443777771134619650/z4EfFnEY_400x400.jpg" alt="profile-img" width="100px" />
                <h5 style={{marginTop:'5px'}} className="black">Akash Yadav</h5>
                <p style={{fontSize:'11px',marginTop:'-8px',fontWeight:'400'}} className="black" >Full-Stack Developer</p>
              </center>
            </div>
            <ul>
              <a rel="noreferrer" href="/"><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-home" aria-hidden="true"></i> Home</li></a>
              <a rel="noreferrer" href="#Skills"><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-terminal" aria-hidden="true"></i> Skills</li></a>
              <a rel="noreferrer" href="#Projects"><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-code" aria-hidden="true"></i> Projects</li></a>
              <a rel="noreferrer" href="#Contact"><li onClick={()=>{setnavBar("none");document.getElementById("contact-form-container").style.display="block"}} className="white"><i className="white fa fa-envelope-o" aria-hidden="true"></i> Contact-me</li></a>
              <hr className="white" />
              <a rel='noreferrer' href='#Contact'><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-user-o" aria-hidden="true"></i> About-me</li></a>
              <a rel="noreferrer" href="#Contact"><li onClick={()=>{setnavBar("none");document.getElementById("contact-form-container").style.display="block"}} className="white"><i className="white fa fa-commenting-o" aria-hidden="true"></i> Suggestion</li></a>
              <hr className="white" />
              <center>
                <span style={{fontSize:'14px',fontWeight:'600'}} className="white" >Made with <i style={{color:'#ff0000',fontSize:'16px'}} className="fa fa-heart"></i> by Akash</span><br/>
                <span style={{fontSize:'12px',fontWeight:'200'}} className="white" ><i style={{color:'grey',fontSize:'13px',fontWeight:'200'}} className="fa fa-copyright"></i> All rights reserved {year}</span>
              </center>
            </ul>
          </div>
          <div style={{display:social}} className="social">
              <div onClick={()=>{setSocialBar(social==="none"?"block":"none")}} style={{display:'flex',justifyContent:'flex-end',padding:'10px',marginTop:'10px',cursor: 'pointer'}}>
                <p style={{margin:"auto",left:'-50px',fontSize:'15px',color:'#fff'}}>Connect with me </p><Cross />
              </div>
              <center><hr className="white" width="90%"/></center>
              <ul>
                <a target="_blank" rel="noreferrer"  href="https://www.twitter.com/akash_369_"><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-twitter" aria-hidden="true"></i> Twitter</li></a>
                <a target="_blank" rel="noreferrer"  href="https://www.github.com/aksh-git"><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-github" aria-hidden="true"></i> Github</li></a>
                <a target="_blank" rel="noreferrer"  href="https://www.instagram.com/ig_akash369"><li onClick={()=>{setnavBar("none")}} className="white"><i className="white fa fa-instagram" aria-hidden="true"></i> Instagram </li></a>
              </ul>
          </div>
        </nav>
      
    )
}

export default Navbar
