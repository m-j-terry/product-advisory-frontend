"use client"

import { ReactNode } from "react"
interface Props { data:ReactNode, title:string, subtitle:string, textAlign:string }


export default function GreyComponent(props: Props){
    return(
        <div className="greyBackground" id={props.title}>
            <center className="sectionHeader">
                <h2 className="sectionTitle maxWidth">{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </center>
            <div className="row">
                {props.data}
            </div>
        </div>
    )
}