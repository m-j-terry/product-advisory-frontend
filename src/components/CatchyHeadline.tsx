"use client"
import React from "react"
// import { ReactNode } from "react"
interface Props { data:React.JSX.Element, styleBackground:string, title:string, textAlign:string }


export default function CatchyHeadline(props: Props){
    return(
        <div className={props.styleBackground} id={props.title}>
            <div className="catchyHeadlineHeader">
                <h2 className={`catchyTitle ${props.textAlign}`}>{props.title}</h2>
                {props.data}
            </div>
        </div>
    )
}