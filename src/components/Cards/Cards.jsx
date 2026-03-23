import React from "react"
import "./Cards.css"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



export const CardService = ({icon,title,text,to})=>{
    return(
        <div className="cardService">
            <div className="containerIcon">
            {icon}
            </div>
            <div className="serviceContent">
                <h3 className="serviceTitle">{title}</h3>
                <p className="serviceText">
                {text}
                </p>
            </div>
            <Link to={to} className="cardLink">Ver más →</Link>
        </div>
    )
}

CardService.propTypes = {
    icon: PropTypes.element.isRequired,
    title:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

}

