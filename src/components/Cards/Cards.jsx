import React from "react"
import "./Cards.css"
import { LuDraftingCompass } from "react-icons/lu";

export const CardService = ()=>{
    return(
        <div className="cardService">
            <LuDraftingCompass className="iconService"/>
            <div className="serviceContent">
                <h3 className="serviceTitle">Diseño e ingenieria</h3>
                <p className="serviceText"></p>
            </div>
        </div>
    )
}