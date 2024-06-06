"use client";

import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.svg'
import logoBlack from '../../public/logo_black.svg'
import siteRoutes from "@/app/Router/routes";

import TechnicalConsultation from "@/app/technical-consultation/page";
import Home from '../app/page'
// interface Route {
//     Component: React.ComponentType;
//     path: string;
//     key: string;
// }

// type RoutesArray = Route[];

// type site = {Component:(value: Route, index: number, array: Route[]) => Element, key:string, path:string }

interface Route {
    Component: React.ComponentType;
    path: string;
    key: string;
}

type RoutesArray = Route[]
export default function Header() {
    const [routes, setRoutes] = useState<RoutesArray>(siteRoutes)
    const [dropdownOne, setDropdownOne] = useState<RoutesArray>([])
    const [dropdownTwo, setDropdownTwo] = useState<RoutesArray>([])
    const [dropdownThree, setDropdownThree] = useState<RoutesArray>([])
    const [dropdownFour, setDropdownFour] = useState<RoutesArray>([])

    function resetNav(){
        setDropdownOne([])
        setDropdownTwo([])
        setDropdownThree([])
        setDropdownFour([])
    }

    function setRouteState(num:number){
        if (num === 1 && dropdownOne.length > 0){
            setDropdownOne([])
        } else if (num === 2 && dropdownTwo.length > 0){
            setDropdownTwo([])
        } else if (num === 3 && dropdownThree.length > 0){
            setDropdownThree([])
        } else if (num === 4 && dropdownFour.length > 0){
            setDropdownFour([])
        } else if (num === 1){
            setDropdownTwo([])
            setDropdownThree([])
            setDropdownFour([])
            setDropdownOne(siteRoutes.slice(1, 3))
        } else if (num === 2) {
            setDropdownOne([])
            setDropdownThree([])
            setDropdownFour([])
            setDropdownTwo(siteRoutes.slice(3, 5))
        } else if (num === 3) {
            setDropdownOne([])
            setDropdownTwo([])
            setDropdownFour([])
            setDropdownThree(siteRoutes.slice(5, 6))
        } else if (num === 4) {
            setDropdownOne([])
            setDropdownTwo([])
            setDropdownThree([])
            setDropdownFour(siteRoutes.slice(6, 7))
        }
    }

    const homeButton = {
        Component: Home,
        key: 'Product Advisory',
        path: '/'
    }
    
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }
    return (
        <div className="Navbar">
            <div className="Header">
                <div className="left" id="logo">
                    <Link onClick={() => resetNav()} className="headerTitle" key={homeButton.key} href={homeButton.path}>
                        {/* <img src={logo} className="App-logo" id="headerLogo" alt="logo" />
                        <img src={logoBlack} className="App-logo" id="headerLogoBlack" alt="logo" /> */}
                        <Image 
                            src={logo}
                            alt=""
                            className="App-logo"
                            id="headerLogo"
                        />
                        <Image 
                            src={logoBlack}
                            alt=""
                            className="App-logo"
                            id="headerLogoBlack"
                        />
                        <p className="homeButton">Product<br />Advisory</p>
                    </Link>
                </div>
                <div className="right">
                    {/* <Link onClick={() => resetNav()} key={contactButton.key} to={contactButton.path}>
                        <button className="headerButton" id="contact">Contact</button>
                    </Link>
                    <Link onClick={() => resetNav()} key={infoButton.key} to={infoButton.path}>
                        <button className="headerButton" id="learnMore">Learn More</button>
                    </Link> */}
                    <Link onClick={() => resetNav()} key={contactButton.key} href={contactButton.path}>
                        <button onClick={() => resetNav()} className="getInTouchButton" id="navButton">Get In Touch</button>
                    </Link>
                </div>
                {/* {routes.map((route:Route) => (
                    <Link href={route.path}>{route.key}</Link>
                ))} */}
            </div>
            <nav className="routes">
                <div className="dropdown" id="dropdown1">
                    <button className="dropdownButton" onClick={() => setRouteState(1)}>Startup Funding</button>
                    {dropdownOne.map(({ key, path }) => (
                        <Link onClick={() => resetNav()} className="route" key={key} href={path}>
                            {key}
                        </Link>
                    ))}
                </div>

                <div className="dropdown" id="dropdown2">
                <button className="dropdownButton" onClick={() => setRouteState(2)}>Go to Market</button>
                    {dropdownTwo.map(({ key, path }) => (
                        <Link onClick={() => resetNav()} className="route" key={key} href={path}>
                            {key}
                        </Link>
                    ))}
                </div>

                <div className="dropdown" id="dropdown3">
                <button className="dropdownButton" onClick={() => setRouteState(3)}>Partnerships</button>
                    {dropdownThree.map(({ key, path }) => (
                        <Link onClick={() => resetNav()} className="route" key={key} href={path}>
                            {key}
                        </Link>
                    ))}
                </div>

                <div className="dropdown" id="dropdown4">
                <button className="dropdownButton" onClick={() => setRouteState(4)}>Services</button>
                    {dropdownFour.map(({ key, path }) => (
                        <Link onClick={() => resetNav()} className="route" key={key} href={path}>
                            {key}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}