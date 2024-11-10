import React from 'react'
import './Hero.scss'

const Hero = ({name, text, btn}) => {
  return (
<>
<section>
    <div className="container">
        <div className="hero__wrapp">
            <div className="hero__wrapp-img">
                <img src="https://freepngimg.com/static/img/cat/tattoo.png" alt="" />
            </div>
            <div className="hero__wrapp-info">
                <h2>{name}</h2>
                <p>{text}</p>
                <button>{btn}</button>
            </div>
        </div>
    </div>
</section>




</>
)
}

export default Hero