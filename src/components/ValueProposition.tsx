"use client"

// import { ReactNode } from "react"
interface Props { data:JSX.Element, align:string, background:string, id:string, title:string, subtitle:string }

export default function ValueProposition(props: Props){
    return(
        <div className={`${props.align} ${props.background}`} id={props.id}>
            <center className="sectionHeader">
                <h2 className="sectionTitle maxWidth">{props.title}</h2>
                <h3 className="subtitle">{props.subtitle}</h3>
                {props.data}
            </center>
        </div>
    )
}