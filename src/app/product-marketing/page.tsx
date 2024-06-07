"use client"

import Link from "next/link"
import Head from 'next/head'
import GreyComponent from "../../components/GreyComponent"
import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import CatchyHeadline from "../../components/CatchyHeadline"
import ValueProposition from "@/components/ValueProposition"
import ServicesCarousel from '../../components/servicesCarousel'

import TechnicalConsultation from "../technical-consultation/page"
import PoliciesAI from "../ai-policies-safety-law/page"

export default function ProductMarketing() {
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }
    const AIButton = {
        Component: PoliciesAI,
        key: "Policies AI",
        path: '/policies-ai'
    }
    return (
        <>
            <Head>
                <title>Product Advisory: Product Marketing</title>
            </Head>
            <Header />
            <div className="buffer">
                <CatchyHeadline
                    title="Product Marketing"
                    textAlign="textAlignLeft"
                    styleBackground=""
                    data={
                        <div className="column">
                            <p className="textAlignLeft"><span className="bold">At Product Advisory,</span> we understand that a well-defined product strategy articulates the vision, market fit, and impact of a startup's offering, increasing the rate of success and attracting investors by demonstrating value and addressing real problems. A product roadmap guides feature inclusion in the MVP to align with the vision and resonate with early adopters.</p>
                            <div className="row" id="articleLinks">
                                    <p>See <a className="articleLink" href="https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/04/03/the-ai-strategy-roadmap-navigating-the-stages-of-value-creation/" target='_blank' rel="noreferrer">this article</a> from Microsoft</p>
                                    <p>See <a className="articleLink" href="https://www.forbes.com/sites/abdoriani/2024/03/22/5-famous-startup-examples-of-finding-product-market-fit/" target='_blank' rel="noreferrer">this article</a> from Forbes</p>
                            </div>
                        </div>
                    }
                />

                <WhiteComponent
                    title=""
                    subtitle=""
                    textAlign=""
                    data={
                        <div className="row" id="productDefinitions">
                            <div className="column">
                                <h2 className="sectionTitle">Product Strategy</h2>
                                <p>A product strategy is a comprehensive plan that defines the vision, customer segmentation, competitive analysis, product market fit, and roadmap for an idea's execution and success.</p>
                                <a href="#ProductStrategies"><button className="servicesButton">Jump Ahead</button></a>
                            </div>
                            <div className="column">
                                <h2 className="sectionTitle">Product Roadmap</h2>
                                <p>A product roadmap outlines the high-level strategic vision and plan for developing and evolving a product over time.</p>
                                <a href="#ProductRoadmap"><button className="servicesButton">Jump Ahead</button></a>
                            </div>
                            <div className="column">
                                <h2 className="sectionTitle">Product Operations</h2>
                                <p>Product operations (prodops) is an organizational function that aims to optimize and streamline the processes, tools, and operations surrounding product development and management.</p>
                                <a href="#ProductOperations"><button className="servicesButton">Jump Ahead</button></a>
                            </div>
                        </div>
                    }
                />

                {/* PRODUCT STRATEGIES */}
                <div className="anchor" id="ProductStrategies">
                <WhiteComponent 
                    title="Product Strategies"
                    subtitle="Why Product Strategy Matters"
                    textAlign=""
                    data={
                        <div className="row">
                            <div className="column">
                                <h3>Example of a poor Product Strategy:</h3>
                                <p>Anki aimed to integrate robotics and AI with children's toys. However, Anki struggled to find a strong market fit. The toys were considered expensive and complex for younger children, and the AI features needed to resonate more with older audiences. Ultimately, they failed to secure funding and shut down in 2019. One of the key reasons for this failure is not understanding the customer characteristics, segmentation & MVP approach.</p>
                            </div>
                            <div className="column">
                                <h3>Example of a successful Product Strategy:</h3>
                                <p>Slack disrupted traditional work communication by creating a collaborative platform specifically designed for teams. Their strategy focused on real-time messaging, seamless file sharing, integrations with various third-party tools, and a focus on fostering a more engaging and interactive work environment.</p>
                                <p className="readMore"><a href="https://nira.com/slack-history/">Read More</a></p>
                            </div>
                        </div>
                    }
                />
                </div>

                {/* PRODUCT ROADMAP */}
                <div className="anchor" id="ProductRoadmap"></div>
                <GreyComponent 
                    title="Product Roadmap"
                    subtitle="Why a Good Product Roadmap Matters"
                    textAlign=""
                    data={
                        <div className="row">
                            <div className="column">
                                <h3>Example of a poor Product Roadmap:</h3>
                                <p>Showtime is a streaming service that aims to compete with giants like Netflix by offering first-run movies and TV shows directly from Hollywood studios. Showtime's roadmap had flaws; their initial focus was on expensive original content before building a solid library of established shows and movies. This roadmap approach did not help Showtime's original goal to compete with Netflix.</p>
                            </div>
                            {/* <div className="column">
                                <h3>Example of a successful Product Roadmap:</h3>
                                <p>We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example.</p>
                            </div> */}
                        </div>
                    }
                />

                {/* PRODUCT OPERATIONS */}
                <div className="anchor" id="ProductOperations"></div>
                <WhiteComponent 
                    title="Product Operations"
                    subtitle="Why Strategic Product Operations Matter"
                    textAlign=""
                    data={
                        <div className="row">
                            <div className="column">
                                <h3>Example of poor Product Operations:</h3>
                                <p>Juicero aimed to make at-home juicing more convenient with a high-pressure juicer and pre-portioned juice packs. However, the company struggled with supply chain issues, including high manufacturing costs and difficulties sourcing and distributing its proprietary juice packs. These operational challenges contributed to its downfall, and the company shut down in 2017.</p>
                            </div>
                            {/* <div className="column">
                                <h3>Example of successful Product Operations:</h3>
                                <p>We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example. We need another example.</p>
                            </div> */}
                        </div>
                    }
                />

                <ServicesCarousel
                    component={ProductMarketing}
                />

                <ValueProposition
                    title="Take the Next Step"
                    subtitle=""
                    id="FinalValueProposition"
                    align=""
                    background=""
                    data={
                        <div className="column">
                            <p>Connect with us for a *free* consultation or learn more about how we can help you leverage AI to take your product even further!</p>
                            <div className="row">
                                <Link key={contactButton.key} href={contactButton.path}>
                                    <button className="getInTouchButton">Get In Touch</button>
                                </Link>
                                <Link key={AIButton.key} href={AIButton.path}>
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