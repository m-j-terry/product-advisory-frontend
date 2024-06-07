"use client"

// import Link from "next/link"
import Head from 'next/head'
import GreyComponent from "../../components/GreyComponent"
import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header";
import Footer from '../../components/Footer'
import CatchyHeadline from "../../components/CatchyHeadline"
import ServicesCarousel from '../../components/servicesCarousel'
// import TechnicalConsultation from "../technical-consultation/page"

export default function Services() {
    return (
        <>
            <Head>
                <title>Product Advisory: Services</title>
            </Head>
            <Header />
            <div className="buffer"></div>

            <CatchyHeadline 
                title="Services"
                textAlign="textAlignLeft"
                styleBackground=""
                data={
                    <div className="row" id="servicesRow">
                        <a className="anchorText" href="#AI">AI Services</a>
                        <a className="anchorText" href="#Roadmap">Product Roadmap Services</a>
                        <a className="anchorText" href="#Strategy">Product Strategy Services</a>
                        <a className="anchorText" href="#Operations">Product Operations Services</a>
                    </div>
                }
            />

            <div className="anchor" id="AI"></div>
            <WhiteComponent
                title="AI Services"
                subtitle=""
                textAlign=""
                data={
                    <ol>
                        <li>Product Advisory will use tactics to propose AI for product that deliver value to your customers and achieves your business goalsMarket analysis, identifying customer needs, understanding competitors, and determining how AI can generate value for users</li>
                        <li>Product Advisory has experts in identifying specific AI techniques such as machine learning, natural language processing, computer vision, LLMs etc., that can be applied to solve problems or improve user experiences</li>
                        <li>We can help with a detailed plan that outlines how you'll develop and launch your AI product. This includes prioritizing features,technology, estimating timelines, and managing risks.</li>
                    </ol>
                }
            />

            <div className="anchor" id="Roadmap"></div>
            <GreyComponent 
                title="Roadmap Services"
                subtitle=""
                textAlign=""
                data={
                    <ol>
                        <li>Priorities and Initiatives - It highlights the key priorities, strategic initiatives, and areas of focus that align with the product vision and goals.</li>
                        <li>Timeline: Define the timeline covered by the roadmap, indicating when specific initiatives or milestones are expected to be completed.</li>
                        <li>Prioritization and Dependencies: Prioritize initiatives and features based on their importance, impact, and alignment with strategic goals as well as identify dependencies between different initiatives.</li>
                        <li>Risk Management: Identify potential risks and challenges, such as technical constraints, market changes, or resource limitations, that may impact the execution of the product roadmap.</li>
                    </ol>
                }
            />

            <div className="anchor" id="Strategy"></div>
            <WhiteComponent
                title="Product Strategy Services"
                subtitle=""
                textAlign=""
                data={
                    <ol>
                        <li>Market Analysis: Understanding the target market is fundamental. This involves researching customer segments' needs, preferences, behaviors, and pain points.</li>
                        <li>Value Proposition: Clearly articulate the value the product or service offers customers.</li>
                        <li>Product Positioning: Determine how the product will be positioned in the market relative to competitors.</li>
                        <li>Go-to-Market Strategy: Plan how the product will be launched and introduced to the market.</li>
                        <li>Business Model: Define the business model that will support the product, including revenue streams, cost structure, pricing strategies, and monetization approaches.</li>
                    </ol>
                }
            />

            <div className="anchor" id="Operations"></div>
            <GreyComponent
                title="Product Operations Services"
                subtitle=""
                textAlign=""
                data={
                    <ol>
                        <li>Tools and Technology Stack Management: This includes project management tools, user research platforms, data analytics tools, and product development software.</li>
                        <li>Data Management and Analysis: Establishing processes for data governance and ensuring data quality.</li>
                        <li>Process and Workflow Optimization: This involves creating and maintaining efficient workflows for various aspects of product development.</li>
                        <li>Communication and Collaboration: Facilitate collaboration and communication between different teams involved in product development and management.</li>
                        <li>Infrastructure and Resources:  Managing the infrastructure and resources needed for efficient product development.</li>
                    </ol>
                }
            />

            <ServicesCarousel 
                component={null}
            />

            <Footer />
        </>
    );
}