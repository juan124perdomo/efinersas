import React from "react"
import "./Hero.css"

export const Hero = ({hero,title,titleHiglight,subTitle}) => {
    

    return (
        <section className="hero" 
        style={{ backgroundImage: `linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.105) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.8) 100%
        ), url(${hero})` }}
        
        
        aria-label="Presentación principal">
            <div className="hero-content">
                <h1 className="hero-title">
                    {title} <span className="highlight">{titleHiglight}</span>
                </h1>
                <p className="hero-subtitle">
                    {subTitle}
                </p>
                
            </div>
        </section>
    )
}

