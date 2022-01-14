import React from 'react'
import '../css/Section0.css'
import Typewriter from "typewriter-effect";
import Atom from './Atom';

function Section0() {

    return (
        <>
            <div className="main-container container">
                
               <div className="welcome" id="welcome">
                <Typewriter style={{zIndex:'-1'}}
                    options={{
                        loop:true
                    }}
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Hey!! Visitor.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcomes You !!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I'm <br><strong>Akash</strong>")
                    .pauseFor(1000)
                    .deleteChars(9)
                    .typeString(" do <br><strong>Full-Stack<br>Developement</strong>")
                    .pauseFor(1000)
                    .deleteChars(23)
                    .typeString("<br><strong>Bug Hunting</strong>")
                    .pauseFor(1000)
                    .deleteChars(16)
                    .typeString("'m <br><strong>Tech enthusiast</strong>")
                    .pauseFor(1000)
                    .deleteChars(15)
                    .typeString("Astrophile")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('<span style="font-size:2rem;">This place is to display what i actually do.</span>')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Have a look on my work here...")
                    .pauseFor(1000)
                    .start();
                    }}
                />
                <div className="atom">
                    <Atom/>
                    </div>
               </div>
                
            </div>
            <div className="bottom-arrows">
            <div className="arrow arrow-first"></div>
            <div className="arrow arrow-second"></div>
            </div>
        </>
    )
}

export default Section0
