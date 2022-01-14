import React from 'react'
import '../css/Section1.css'
import CardView  from './CardView'
import Slider from "react-slick"
import word from '../images/word-search.png'

function Section1() {

    let wordSearch = {
        title: "Word Search",
        decp: "Word Search is a game, in this there is a grid of alphabets, by using those alphabets you have to make meaningful words, this uses Dictionary API to validate  words.",
        button: "Click here to play",
        footText:'HTML, CSS, JS',
        link: "https://aksh-git.github.io/wordsearch",
        image: word 
    }

    let comingSoon = {
        title: "Welcomes You",
        decp: "I recently created this site, that's why there is not a lot of content. kindly check back later, you'll definitely find some awosome things here.",
        button: "",
        footText: "",
        image: "https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg"
    }

    let settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        draggable: true,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true,
                centerMode: true,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: true,
                  centerMode: true
                }
              }
          ]
    }

    return (
        <>
            <div className="section1" id="Projects">
                <div className="heading">
                    <span className="">
                        My Projects
                    </span>
                </div>
                <div id="projects" className="container projects">
                   <Slider {...settings}>
                       <div>
                            <CardView slide={wordSearch} />
                       </div>
                       <div>
                           <CardView slide={comingSoon} />
                       </div>
                   </Slider>
                </div>
            </div>
        </>
    )
}

export default Section1
