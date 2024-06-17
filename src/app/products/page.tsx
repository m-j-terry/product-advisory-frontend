"use client"

import Link from "next/link"
// import Head from 'next/head'
// import GreyComponent from "../../components/GreyComponent"
// import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import ValueProposition from "@/components/ValueProposition"
// import CatchyHeadline from "../../components/CatchyHeadline"
// import ServicesCarousel from "../../components/servicesCarousel"

import TechnicalConsultation from "../technical-consultation/page"
import React from "react"
// import Services from "../services/page"
import PartnershipProgram from "../partnership-program/page"

export default function Products() {
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }
    const partnershipButton = {
        Component: PartnershipProgram,
        key: "Partnership Program",
        path: '/partnership-program'
    }
    return (
        <>
            <Header />
            <div className="buffer">
                
                <div className="row">
                    <div className="column">
                        <h1>Product 1</h1>
                        <p>coming soon...</p>
                    </div>
                    <div className="column">
                        <h1>Product 2</h1>
                        <p>coming soon...</p>
                    </div>
                </div>
                <ValueProposition 
                    title="Request a Demo"
                    subtitle=""
                    id="FinalValueProposition"
                    align=""
                    background=""
                    data={
                        <>
                            <Link key={contactButton.key} href={contactButton.path}>
                                <button className="getInTouchButton">Get In Touch</button>
                            </Link>
                            <Link key={partnershipButton.key} href={partnershipButton.path}>
                                <button className="button">Partnerships</button>
                            </Link>
                        </>
                    }
                />
                <Footer />
            </div>
        </>
    )
}