import React from 'react'
import '../css/Section2.css'
import web from '../images/html-css-js.png'
import python from '../images/python-logo-tp.png'
import reactl from '../images/React.png'
import mongodb from '../images/mongo-logo-tp.png'
import node from '../images/nodejs-logo-tp.png'
import ghub from '../images/ghub.png'
import Slider from "react-slick"

function Section2() {
    
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        autoplay: true,
        draggable: true,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  centerMode: true
                }
              }
          ]
    }

    return (
        <>
            <div className="section2" id="Skills">
                <div className="heading">
                    <span>My Skills</span>
                </div>
                <div className="container skills">
                    <div className="skill-container container">
                    <Slider {...settings}>
                       <div className="skill-card">
                            <center style={{marginTop:'50px'}}>
                                <img src={web} alt="web" />
                                <br/><br/>
                                <img src={reactl} alt="react.js" />
                                <br/><br/>
                                <img src={ghub} alt="git+github"/>
                            </center>
                        </div>
                        <div className="skill-card">
                            <center>
                                <img src={node} alt="node.js" />
                                <img className="circle-img"  src={mongodb} alt="mongodb" />
                            </center>
                        </div>
                        <div className="skill-card">
                            <center style={{marginTop:'30px'}}>
                                <img className="circle-img"  src={python} alt="python" />
                            </center>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
