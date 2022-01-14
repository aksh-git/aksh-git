import React from 'react'
import '../css/cardView.css'

function CardView(props) {

  const { title , decp, button, image, footText, link } = props.slide;
  //const { intervel } = props.intervel;

  return (
    <>
      <div className="cardView" onClick={()=>{window.open(link)}} >
        <span className="card-title">
          {title}
        </span>
        <img src={`${image}`} alt="banner" />
        <div className="cardBody" >
          <span className="card-text">
            {decp}
          </span>
          <br/>
          <button style={{opacity:button.length<1?"0":"1"}} className="button">
            <a target="_blank" rel="noreferrer"  href={link} >{button}</a>
          </button>
          <div className="footer">
            <hr style={{marginLeft:'1vw'}} width="40%" />
            <span style={{opacity:footText.length<1?"0":"1"}} className="text-muted">
              <strong>Tech Used : {footText}</strong>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardView
