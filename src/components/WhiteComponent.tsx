"use client"

// import { ReactNode } from "react"

interface Props { data:JSX.Element, title:string, subtitle:string, textAlign:string }


export default function WhiteComponent(props: Props){
    return(
        <div className="whiteBackground" id={props.title}>
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