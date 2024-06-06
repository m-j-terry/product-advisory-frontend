"use client"

import Link from "next/link"
import GreyComponent from "../../components/GreyComponent"
import WhiteComponent from "../../components/WhiteComponent"
import Header from "@/components/Header"
import Footer from '../../components/Footer'
import CatchyHeadline from "../../components/CatchyHeadline"
// import ServicesCarousel from '../../../components/ServicesCarousel'


export default function ErrorElement() {
    return (
        <>
            <Header />
            <h2>Error 404 Not Found</h2>
            <Link href="/"><a>Return Home</a></Link>
        </>
    );
}