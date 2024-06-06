"use client"

import Link from "next/link"
import Header from "../components/Header"
import Footer from '../components/Footer'


export default function ErrorElement() {
    return (
        <div>
            <Header />
            <center className="buffer" id="error">
                <h2>Error 404 Not Found</h2>
                <Link href="/" className="return">Return Home</Link>
            </center>
            <Footer />
        </div>
    );
}