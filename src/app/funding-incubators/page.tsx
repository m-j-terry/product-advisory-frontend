"use client"

import Link from "next/link"
import GreyComponent from "../../components/GreyComponent"
import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import ValueProposition from "@/components/ValueProposition"
import CatchyHeadline from "../../components/CatchyHeadline"
import ServicesCarousel from "@/components/servicesCarousel"

import TechnicalConsultation from "../technical-consultation/page"
import ProductMarketing from "../product-marketing/page"

interface Props { key:string, path:string, page:string }

export default function FundingIncubators(props: Props) {
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }

    const productMarketing = {
        Component: ProductMarketing,
        key: 'Product Marketing & Sales',
        path: '/product-marketing-sales'
    }
    return (
        <>
            <head>
                <title>Product Advisory: Funding Incubators</title>
            </head>
            <Header />
            <div className="buffer">
                <CatchyHeadline 
                    title="Funding Incubators"
                    textAlign="textAlignLeft"
                    styleBackground=""
                    data={
                        <>
                            <p className="textAlignLeft"><span className="bold">At Product Advisory,</span> we connect you with the right funding incubator to meet your product's needs.</p>
                        </>
                    }
                />
                <WhiteComponent 
                    title="What are Funding Incubators?"
                    subtitle=""
                    textAlign=""
                    data={
                        <p className="textAlignLeft">Funding Incubators are organizations or programs that provide early-stage startups with financial support, mentorship, resources, and networking opportunities to help them grow and succeed.</p>
                    }
                />
                <GreyComponent 
                    title="Finding the Right Incubator"
                    subtitle="Stories of success and failure"
                    textAlign=""
                    data={
                        <div className="row">
                            <div className="column">
                                <h3>The right incubator will have ...</h3>
                                <ul>
                                    <li>Strategic Alignment: It will align with the startup's vision, mission, and values</li>
                                    <li>Expertise and Network: It brings valuable expertise, experience, and industry connections to the table</li>
                                    <li>Financial Resources: It will offer fair terms, reasonable valuations, and appropriate funding levels that meet the startup's financing needs without diluting its ownership excessively or imposing undue constraints on its operations</li>
                                    <li>Long-Term Partnership - It will support the startup throughout its journey, from early-stage development to scaling.</li>
                                </ul>
                            </div>
                        
                            <div className="column">
                                <h3>The wrong incubator might have ...</h3>
                                <ul>
                                    <li>Shortsighted focus on quick wins might not align with your long-term vision</li>
                                    <li>Rigid investment terms or may pressure you to compromise on your vision</li>
                                </ul>
                            </div>
                        </div>
                    }
                />
                <WhiteComponent 
                    title="Top Funding Incubators Worldwide"
                    subtitle=""
                    textAlign=""
                    data={
                        <ol>
                            <li>Y Combinator (US)</li>
                            <li>500 Startups (Global)</li>
                            <li>Techstars (Global)</li>
                            <li>AngelPad (US)</li>
                            <li>Seedcamp (Europe)</li>
                            <li>Venture Catalysts (India)</li>
                            <li>Chinaccelerator (China)</li>
                        </ol>
                    }
                />

                <ServicesCarousel
                    component={FundingIncubators}
                />

                <ValueProposition
                    title="How we can help"
                    subtitle=""
                    align=""
                    id=""
                    background=""
                    data={
                        <div className="valueProposition">
                            <p>We can leverage our experience by connecting you with the right incubators that provide strategic alignment, expertise, financial resources, long-term partnership, reputation, and alignment of interests.</p>
                            <Link key={contactButton.key} href={contactButton.path}>
                                <button className="getInTouchButton">Get In Touch</button>
                            </Link>
                            <Link key={productMarketing.key} href={productMarketing.path}>
                                <button className="button" id="learnMore">Learn More</button>
                            </Link>
                        </div>
                    }
                />
                <Footer />
            </div>
        </>
    );
}