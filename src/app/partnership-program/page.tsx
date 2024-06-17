"use client"

// import Link from "next/link"
// import Head from 'next/head'
import GreyComponent from "../../components/GreyComponent"
// import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import ValueProposition from "@/components/ValueProposition"
// import CatchyHeadline from "../../components/CatchyHeadline"
// import ServicesCarousel from "../../components/servicesCarousel"

// import TechnicalConsultation from "../technical-consultation/page"
import React from "react"
// import Services from "../services/page"

export default function Products() {
    // const contactButton = {
    //     Component: TechnicalConsultation,
    //     key: "Technical Consultation",
    //     path: '/technical-consultation'
    // }
    // const servicesButton = {
    //     Component: Services,
    //     key: "Services",
    //     path: '/services'
    // }
    return (
        <>
        <Header />
            <div className="buffer">
                <ValueProposition 
                    title="Partnership Program"
                    subtitle=""
                    id=""
                    align=""
                    background=""
                    data={
                        <>
                            <p>coming soon...</p>
                        </>
                    }
                />
                <GreyComponent 
                    title="" 
                    subtitle="" 
                    textAlign=""
                    data={
                        <></>
                    } 
                />
                <Footer />
            </div>
        </>
    )
}