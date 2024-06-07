"use client"

// import Link from "next/link"
import Head from 'next/head'
import ClientRequestForm from '../../components/ClientRequestForm';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnicalConsultation() {
    return (
        <>
            <Head>
                <title>Product Advisory: Technical Consultation</title>
            </Head>
            <Header />
            <div className="buffer"></div>
            <div className="buffer greyBackground">
                <center>
                    <h1 className="pageHeader">We can answer your questions</h1>
                    <p>Connect with us if you have any questions, feedback, or partnership inquiries.</p>
                    <div className="sectionBorder">
                        <ClientRequestForm />                
                    </div>
                </center>
                
            </div>

            <Footer />
        </>        
    );
}