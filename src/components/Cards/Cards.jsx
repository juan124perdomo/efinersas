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

export const CardPorQueElegirnos= ({icon,title,text})=>{
    return(
        <div className="cardPorQueElegirnos">
            <div className="containerIcon">
            {icon}
            </div>
            <div className="cardPorQueElegirnosContent">
                <h3 className="cardPorQueElegirnosTitle">{title}</h3>
                <p className="cardPorQueElegirnosText">
                {text}
                </p>
            </div>
            
        </div>
    )
}


export  const  CardStats = ({stat,title})=>{
    return(
        <div className="cardStats">
            <h3 className="cardStatsStat">{stat}</h3>
            <p className="cardStatsTitle">{title}</p>
        </div>
    )
}


export const CardInfo = ({icon,title,text})=>{
    return(
        <div className="cardInfo">
            <div className="cardInfoContainerIcon">
            {icon}
            </div>
            <div className="cardInfoContent">
                <h3 className="cardInfoTitle">{title}</h3>
                <p className="cardInfoText">
                {text}
                </p>
            </div>
        </div>
    )
}


export const CardsValores = ({icon,title,text})=>{
    return(
        <div className="cardValores">
            <div className="cardValoresContainerIcon">
            {icon}
            </div>
            <div className="cardValoresContent">
                <h3 className="cardValoresTitle">{title}</h3>
                <p className="cardValoresText">
                {text}
                </p>
            </div>
        </div>
    )
}

export const CardCapacidades = ({icon,title,text})=>{
    return(
        <div className="cardCapacidades">
            <div className="cardCapacidadesContainerIcon">
            {icon}
            </div>
            <div className="cardCapacidadesContent">
                <h3 className="cardCapacidadesTitle">{title}</h3>
                <p className="cardCapacidadesText">
                {text}
                </p>
            </div>
        </div>
    )
}

export  const  CardEmpresasaQueConfianEnNosotros = ({name,text})=>{
    return(
        <div className="cardEmpresasaQueConfianEnNosotros">
            <h3 className="cardempresasaQueConfianEnNosotrosTitle">{name}</h3>
            <p className="cardempresasaQueConfianEnNosotrosText">{text}</p>
        </div>
    )
}

CardService.propTypes = {
    icon: PropTypes.element.isRequired,
    title:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

}

