"use client"

import FormInput from './FormInput'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { generateToken } from '../app/utilities/send-request'
interface input { id:string, name:string, type:string, placeholder:string, errorMessage:string, label:string, cols:string, rows:string }
import ReCAPTCHA from 'react-google-recaptcha'

export default function ClientRequestForm(){
    const [values, setValues] = useState({
        clientFirstName: '',
        clientLastName: '',
        clientPhoneNumber: '',
        clientEmail: '',
        clientEmailRepeat: '',
        clientCompany: '',
        clientLinkedIn: '',
        inquirySubject: '',
        inquiryMessage: ''
    })

// Recaptcha Scale
    const [scaleFactor, setScaleFactor] = useState<number>(1000)
    const [recaptchaValue, setRecaptchaValue] = useState<boolean>(false)
    useEffect(() => {
        let windowWidth = window.innerWidth
        if (windowWidth < 1000){
            setScaleFactor(windowWidth * .1 / 100)
        } else {
            setScaleFactor(windowWidth * .05 / 100)
        }
    }, [])

    // const router = useRouter();

    const inputs = [
        {
            id: "client-first-name",
            name: "clientFirstName",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "First Name",
            required: true,
        },
        {
            id: "client-last-name",
            name: "clientLastName",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Last Name",
            required: true,
        },
        {
            id: "client-phone-number",
            name: "clientPhoneNumber",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Phone Number",
            required: true,
        },
        {
            id: "client-email",
            name: "clientEmail",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Email",
            required: true,
        },
        {
            id: "client-email-repeat",
            name: "clientEmailRepeat",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Repeat email",
            required: true,
        },
        {
            id: "client-company",
            name: "clientCompany",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Company URL",
            required: false,
        },
        {
            id: "client-linkedin",
            name: "clientLinkedIn",
            type: "text",
            placeholder: "linkedin.com/in/your-id",
            errorMessage: "Please send inquiry directly to _____________",
            label: "LinkedIn",
            required: false
        },
        {
            id: "inquiry-subject",
            name: "inquirySubject",
            type: "text",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Subject",
            required: true,
        },
        {
            id: "inquiry-message",
            name: "inquiryMessage",
            type: "textarea",
            cols: "40",
            rows: "10",
            placeholder: "",
            errorMessage: "Please send inquiry directly to _____________",
            label: "Message",
            required: true
        }
    ]

    const handleInputChange = (e) => {
        function capitalizeFirstLetter(string:string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
        // eslint-disable-next-line
        switch(e.target.name){
            case "clientFirstName":
                setValues({ ...values, [e.target.name]: capitalizeFirstLetter(e.target.value) }) 
                break
            case "clientLastName": 
                setValues({ ...values, [e.target.name]: capitalizeFirstLetter(e.target.value) }) 
                break
            case "clientCompany": 
                setValues({ ...values, [e.target.name]: e.target.value }) 
                break
            case "inquirySubject": 
                setValues({ ...values, [e.target.name]: capitalizeFirstLetter(e.target.value) }) 
                break
            case "inquiryMessage": 
                setValues({ ...values, [e.target.name]: capitalizeFirstLetter(e.target.value) }) 
                break
            case "clientEmail": 
                setValues({ ...values, [e.target.name]: e.target.value }) 
                break
            case "clientLinkedIn":
                setValues({ ...values, [e.target.name]: e.target.value }) 
                break
            case "clientPhoneNumber":
                setValues({...values, [e.target.name]: e.target.value })
                break
            case "clientEmailRepeat":
                setValues({...values, [e.target.name]: e.target.value })
                break

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (values.clientEmail !== values.clientEmailRepeat){
            alert('Emails do not match!')
            return
        } else if (recaptchaValue === false){
            alert('Are you a robot? Click the recaptcha box to verify you are human!')
            return
        }
        await generateToken(values)
        setValues({
            clientFirstName: '',
            clientLastName: '',
            clientPhoneNumber: '',
            clientEmail: '',
            clientEmailRepeat: '',
            clientCompany: '',
            clientLinkedIn: '',
            inquirySubject: '',
            inquiryMessage: ''
        })
        alert("Your response was sent. Check your email for confirmation!")
        // router.push('/form-success')
    }

    const handleRecaptchaChange = (token:boolean) => {
        if (token) {
            setRecaptchaValue(token)
        } 
    };
    return(
        <div>
            <div className="InquiryForm">
                <form  autoComplete="off" onSubmit={handleSubmit}>
                    {inputs.map(input => 
                        <div className="formInput">
                            <p>{input.label}</p>
                            <FormInput key={input.id} {...input} value={values[input.name]} values={values} handleInputChange={handleInputChange} />
                        </div>
                    )}
                    
                    <div className="row" id="submitColumn">
                        <button formMethod='dialog' className="button" id="formSubmitButton">Submit</button>
                        <ReCAPTCHA 
                            style={{ transform: `scale(${scaleFactor})`, transformOrigin: '0 0' }}
                            className="g-recaptcha"
                            sitekey={process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY}
                            onChange={() => handleRecaptchaChange(true)}
                        />
                    </div>
                </form> 
            </div>
        </div>
    )
}