"use client"

import Link from "next/link"
import GreyComponent from "../../components/GreyComponent"
import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import ValueProposition from "@/components/ValueProposition"
import CatchyHeadline from "../../components/CatchyHeadline"
import ServicesCarousel from "../../components/servicesCarousel"

import TechnicalConsultation from "../technical-consultation/page"
import Services from "../services/page"

export default function MinorityEntrepreneurs() {
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }
    const servicesButton = {
        Component: Services,
        key: "Services",
        path: '/services'
    }
    return (
        <>
            <head>
                <title>Product Advisory: Supporting Minority Entrepreneurs</title>
            </head>
            <Header />
            <div className="buffer">
                <CatchyHeadline 
                    title="Supporting Minority Entrepreneurs"
                    styleBackground=""
                    textAlign="textAlignLeft"
                    data={
                        <p className="textAlignLeft"><span className="bold">At Product Advisory,</span> we are committed to empowering minority-owned businesses by providing tailored services that address their unique challenges. Our firm offers strategic guidance, access to resources, and mentorship to help these businesses thrive in competitive markets. We believe in fostering diversity and inclusion, ensuring minority entrepreneurs have the tools and opportunities to succeed. By supporting minority businesses, we contribute to economic growth and community development. Together, we create a more equitable and prosperous business landscape for all.</p>
                    }
                />
                <CatchyHeadline 
                    title="Queer Representation"
                    data={
                        <div className="column">
                            <p className="textAlignLeft">Only 0.5% of the $2.1 trillion in startup funding was raised by LGBTQ+ founders, despite 7.1% of the population identifying as LGBTQ+.</p>
                            <p className="readMore"><a href="https://startout.org/index/#:~:text=2023%20State%20of%20LGBTQ%20Entrepreneurship%20Report&text=In%20our%20analysis%20of%20142K,the%20population%20identifies%20as%20LGBTQ%2B" target="_blank" rel="noreferrer">Read More</a></p>
                        </div>
                    }
                    styleBackground="whiteBackground"
                    textAlign="textAlignLeft"
                />
                <CatchyHeadline 
                    title="Untapped Opportunities"
                    data={
                        <div className="column">
                            <p className="textAlignLeft">According to a report by Crunchbase, women-funded startups receive only 9% of venture capital investments. Black founders represent just 1%, and Latino founders 1.8% of venture-backed founders.</p>
                            <p className="readMore"><a href="https://news.crunchbase.com/venture/untapped-opportunity-minority-founders-still-being-overlooked/"  target="_blank" rel="noreferrer">Read More</a></p>
                        </div>
                    }
                    styleBackground="whiteBackground"
                    textAlign="textAlignLeft"
                />

                <ServicesCarousel 
                    component={MinorityEntrepreneurs}
                />
                
                <ValueProposition 
                    title="Changing the Tides"
                    subtitle=""
                    id="propositionMargin"
                    background="greyBackground"
                    align="rightAlign"
                    data={
                        <div className="column">
                            <p>See how Product Advisory's commitment to diversity and inclusivity can help your ideas find funding!</p>   
                            <div className="row">
                                <Link key={contactButton.key} href={contactButton.path}>
                                    <button className="getInTouchButton" id="navButton">Get In Touch</button>
                                </Link>
                                <Link key={servicesButton.key} href={servicesButton.path}>
                                    <button className="button" id="learnMore">Learn More</button>
                                </Link> 
                            </div>
                        </div>
                    }
                />
            
                <Footer />
            </div>
        </>
    );
}