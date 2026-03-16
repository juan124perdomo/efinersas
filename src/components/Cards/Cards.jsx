import React from "react"
import "./Cards.css"
import { LuDraftingCompass } from "react-icons/lu";

export const CardService = ({icon,title,text})=>{
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
        </div>
    )
}