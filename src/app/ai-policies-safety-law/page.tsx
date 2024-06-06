"use client"

import Link from "next/link"
import GreyComponent from "../../components/GreyComponent"
import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import CatchyHeadline from "../../components/CatchyHeadline"
import ServicesCarousel from "../../components/servicesCarousel"
import ValueProposition from "../../components/ValueProposition"

import TechnicalConsultation from "../technical-consultation/page"
import Services from "../services/page"

export default function PoliciesAI() {
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
                <title>Product Advisory: AI Policies, Safety & Law</title>
            </head>
            <Header />
            <div className="buffer">
                <CatchyHeadline 
                    title="AI Policies, Safety, & Law" 
                    textAlign="textAlignLeft"
                    styleBackground=""
                    data={
                        <div className="column">
                            <p className="textAlignLeft"><span className="bold">At Product Advisory,</span> we specialize in AI-driven Product Strategy & Roadmap, Product Operations, and Product Growth to help startups secure funding. Our expert team crafts clear and compelling product strategies that articulate your vision, market fit, and value proposition. By focusing on well-defined roadmaps and operational excellence, we ensure your product resonates with early adopters and attracts investors. Our comprehensive approach not only showcases your startup’s potential but also demonstrates its readiness to tackle real problems and achieve significant growth.</p>
                        </div>
                    }
                />
                
                <WhiteComponent 
                    title="How AI Kickstarts New Business Concepts"
                    subtitle="from Forbes"
                    textAlign=""
                    data={
                            <div className="column">
                                <p>"AI is taking the most time-consuming parts of business formation and continuity out of the equation for business leaders, automating tasks that were traditionally done by hand and analyzing massive amounts of data in only a few minutes. This gives entrepreneurs and startup businesses a great advantage..."</p>
                                <p className="readMore"><a href='https://www.forbes.com/sites/joemckendrick/2024/04/17/ai-helps-kick-start-new-business-concepts/?sh=17f62ee22edc' target='_blank' rel="noreferrer">Read More</a></p>
                            </div>
                    }
                />
                <GreyComponent 
                    title="How Poor AI Implementation Can Affect Business Growth"
                    subtitle=""
                    textAlign=""
                    data={
                        <div className="column">
                            <p>Anki aimed to integrate robotics and AI with children's toys. However, Anki struggled to find a strong market fit. The toys were considered expensive and complex for younger children, and the AI features needed to resonate more with older audiences. Ultimately, they failed to secure funding and shut down in 2019. One of the key reasons for this failure is not understanding the customer characteristics, segmentation & MVP approach.</p>
                            <p className="readMore"><a href='https://www.therobotreport.com/anki-shutdown-reinforces-difficulties-of-robot-toys-market/' target='_blank' rel="noreferrer">Read More</a></p>
                        </div>
                    }
                />
                <WhiteComponent 
                    title=""
                    subtitle=""
                    textAlign=""
                    data={
                        <div className="column">
                            <h2 className="sectionTitle">Product Roadmaps</h2>
                            <p>Product Advisory consults on product operations, growth, and monetizing needs for the business through product-led strategy. We bring in experts to evaluate market share, focus on strengths and devise unique strategy. By prioritizing customer-centricity and leveraging data-driven insights, we create and refine product roadmaps that drive success.</p>
                        </div>
                    }
                />

                <GreyComponent
                    title=""
                    subtitle=""
                    textAlign=""
                    data={
                        <div className="column">
                            <h2 className="sectionTitle">Software Development</h2>
                            <p>Product Advisory specialize in delivering comprehensive software consulting services tailored to your unique business needs. Our team of experts excels in guiding you through the entire software development lifecycle, from initial planning and design to implementation and support.</p>
                            <p>We leverage the latest technologies and industry best practices to ensure your software solutions are robust, scalable, and secure. Our approach is customer-centric, focusing on understanding your specific requirements to deliver solutions that drive efficiency and innovation.</p>
                        </div>
                    }
                />

                <WhiteComponent
                    title="Product Operations, Growth & Monetization Strategy/Roadmap with AI first mindset "
                    subtitle=""
                    textAlign=""
                    data={
                        <div className="column">
                                <ol>
                                    <li>With an AI-first mindset & innovation at forefront, we integrate advanced analytics and machine learning at the core of our operations. This enables us to predict market trends, streamline processes, and identify new revenue opportunities with remarkable accuracy. Our AI-driven methodologies enhance decision-making, fostering rapid innovation and efficient scaling.</li>
                                    <li>Product Advisory can help with Product Growth Strategy boosting user acquisition, activation, engagement, retention & monetization.</li>
                                    <li><a href="https://experience.dropbox.com/resources/how-ai-can-supercharge-product-led-sales" target='_blank' rel="noreferrer">This article</a> demonstrates how www.dropbox.com supercharged the platform via product led sales strategy using AI. </li>
                                </ol>
                            </div>                        
                    }
                />

                <ServicesCarousel
                    component={PoliciesAI}
                />

                <ValueProposition
                    title="Take the Next Step"
                    subtitle=""
                    id="FinalValueProposition"
                    align=""
                    background="greyBackground"

                    data={
                        
                        <div className="column">
                            <p>Learn more about other services we offer or sign up for a *free* consultation</p> 
                            <div className="row">
                                <Link key={contactButton.key} href={contactButton.path}>
                                    <button className="getInTouchButton">Get In Touch</button>
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