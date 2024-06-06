"use client"

import { useState } from "react"

interface Props { name:string, label:string, errorMessage:string, onChange:React.ChangeEventHandler<HTMLInputElement>, handleInputChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, id:string, values:{clientFirstName:string, clientLastName:string, clientPhoneNumber:string, clientEmail:string, clientEmailRepeat:string, clientCompany:string, clientLinkedIn:string, inquirySubject:string, inquiryMessage:string} }


export default function FormInput(props:Props) {
    const [isBlur, setIsBlur] = useState(false)

    const handleInputBlur = (e) => {
        setIsBlur(true)
    }

    function checkEmail(emailRepeat:string){
        if (emailRepeat === "clientEmailRepeat" && props.values.clientEmailRepeat !== ""){
            if (props.values.clientEmail !== props.values.clientEmailRepeat){
                return "redBoxShadow"
            } else {
                return ""
            }
        }
    }

    if (props.id === "inquiry-message") {
        return (
            <div className="textArea">
                <textarea 
                    // id={props.id}
                    // cols="40"
                    // rows="5"
                    wrap="hard"
                    className="input"
                    {...props}
                    onChange={props.handleInputChange}
                    onBlur={handleInputBlur}
                    blurred={isBlur.toString()}
                    onFocus={() => props.name === 'confirm' && setIsBlur(true)}
                ></textarea>
            </div>
        )
    } else {
        return (
            <div>
                <input
                    // id={props.id}
                    {...props}
                    className={`input ${checkEmail(props.name)}`}
                    onChange={props.handleInputChange}
                    onBlur={handleInputBlur}
                    blurred={isBlur.toString()}
                    onFocus={() => props.name === 'confirm' && setIsBlur(true)}
                />
            </div>
        )
    }
}