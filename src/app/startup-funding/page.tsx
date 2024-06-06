"use client"

import Link from "next/link";
import WhiteComponent from "../../components/WhiteComponent";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import CatchyHeadline from "../../components/CatchyHeadline";
import TechnicalConsultation from "../technical-consultation/page";
import ValueProposition from "@/components/ValueProposition";
import Services from "../services/page";
import ServicesCarousel from '../../components/servicesCarousel';

interface Props { key:string, path:string, page:string }

export default function StartupFunding(props:Props) {
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }
    const servicesButton = {
        Component: Services,
        key: "Services",
        path: "/services"
    }
    return (
        <>
            <head>
                <title>Product Advisory: Startup Funding</title>
            </head>
            <Header />
            <div className="buffer">
                <CatchyHeadline 
                    title="Startup Funding"
                    textAlign="textAlignLeft"
                    styleBackground=""
                    data={
                        <p className="textAlignLeft textWidthHeadline"><span className="bold">At product Advisory, </span>we consult on finding the right VC that fits your product and can provide strategies to grow your business.</p>
                    }
                />

                <WhiteComponent 
                    title="Pre-seed/Seed/Series A, B, C"
                    subtitle=""
                    textAlign=""
                    data={
                        <div className="row rowWrap">
                            <div className="column textWidthHeadline">    
                                <div className="bottomBorder">
                                <h2 className="sectionTitle">Pre-Seed</h2>
                            </div>
                                <p>Working with the right venture capital at the pre-seed stage can provide essential resources for early product development. For instance, Airbnb received initial funding from Y Combinator, which helped them refine their concept and gain early traction.</p>
                            </div>
                            <div className="column textWidthHeadline">
                                <div className="bottomBorder">
                                <h2 className="sectionTitle">Seed</h2>
                            </div>
                                <p>At the seed stage, the right VC can offer strategic guidance and connections. Uber's seed funding from First Round Capital not only provided capital but also critical business advice and introductions to further investors.</p>
                            </div>
                            <div className="column">
                                <div className="bottomBorder">
                                <h2 className="sectionTitle">Series</h2>
                            </div>
                                <div className="row" id="seriesRow">
                                    <div className="column">
                                        <h3>Series A</h3>
                                        <p>Finding the right Series A investor is crucial for scaling your operations. When WhatsApp secured Series A funding from Sequoia Capital, it benefited from Sequoia's expertise in scaling tech companies.</p>
                                    </div>
                                    <div className="column">
                                        <h3>Series B</h3>
                                        <p>During Series B, the right VC can help optimize product-market fit and expand market reach. Pinterest's Series B funding from Andreessen Horowitz allowed the company to grow its user base and improve its platform.</p>
                                    </div>
                                    <div className="column">
                                        <h3>Series C</h3>
                                        <p>At the Series C stage, securing the right VC can support market expansion and product diversification. For example, SpaceX's Series C funding from Draper Fisher Jurvetson helped the company develop its next-generation rockets and expand its market presence.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
                <WhiteComponent 
                    title="How Product Strategy Can Help Secure Funding"
                    subtitle="Case Studies"
                    textAlign=""
                    data={
                        <div className="column">
                            <div className="row">
                                <div className="column">
                                    <h3>Syrona Health</h3>
                                    <p>Syrona Health's detailed product strategy, which clearly outlined their vision, market fit, and potential impact, played a crucial role in attracting investors. Syrona Health demonstrated a thorough understanding of the problems they aimed to solve and showcased the value their product provided to potential customers.</p>
                                </div>
                                <div className="column">
                                    <h3>Perpetual Robotics</h3>
                                    <p>Perpetual Robotics' product strategy emphasized their innovative approach to using drones for wind turbine inspections, which was compelling to investors looking for novel solutions in the renewable energy sector.</p>
                                </div>
                            </div>
                        </div>
                    }
                />

                <ServicesCarousel
                    component={StartupFunding}
                />

                <ValueProposition
                    title="Take the next step"
                    subtitle=""
                    id="nextStep"
                    align=""
                    background=""
                    data={
                        <>
                            <p className="maxWidth">Learn more about product strategy and how we can help you secure funding or set up a *free* consultation.</p>
                            
                            <div className="row">
                                <Link key={contactButton.key} href={contactButton.path}>
                                    <button className="getInTouchButton">Get In Touch</button>
                                </Link>
                                <Link key={servicesButton.key} href={servicesButton.path}>
                                    <button className="button" id="learnMore">Services</button>
                                </Link> 
                            </div>
                        </>
                    }
                />
                <Footer />
            </div>
        </>
    );
}