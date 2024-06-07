"use client";

import { useState, useEffect } from "react"
import Link from 'next/link'
import siteRoutes from "@/app/Router/routes";

import TechnicalConsultation from "@/app/technical-consultation/page";
import Home from '../app/page'

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
                        <svg 
                            id="Layer_2" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 180.92 44.96"
                            style={{ width: '65%', height: 'auto' }}
                        >
                            <defs>
                                <style>{`
                                    .cls-1,.cls-2{stroke-width:0px;}.cls-2{fill:#f24c00;}
                                `}</style>
                            </defs>
                            <g id="Layer_1-2"><path className="cls-1" fill="#000000" d="m56.9,20.22c-.18,0-.33-.06-.46-.19-.13-.13-.19-.28-.19-.46V2.04c0-.2.06-.36.19-.48s.28-.19.46-.19h7.22c1.4,0,2.62.22,3.66.66,1.04.44,1.85,1.1,2.42,1.99.57.89.86,2,.86,3.33s-.29,2.46-.86,3.33c-.57.87-1.38,1.52-2.42,1.95-1.04.43-2.26.65-3.66.65h-4.01v6.3c0,.18-.06.33-.18.46-.12.13-.27.19-.47.19h-2.56Zm3.15-9.94h3.93c1.04,0,1.84-.25,2.4-.74.56-.49.84-1.23.84-2.2,0-.9-.26-1.62-.78-2.17s-1.34-.82-2.45-.82h-3.93v5.93Z"/>
                                <path className="cls-1" fill="#000000" d="m74.65,20.22c-.18,0-.33-.06-.46-.19-.13-.13-.19-.28-.19-.46V2.04c0-.2.06-.36.19-.48.13-.13.28-.19.46-.19h6.98c2.17,0,3.89.5,5.14,1.51,1.26,1.01,1.89,2.47,1.89,4.39,0,1.33-.33,2.43-.98,3.31-.66.88-1.53,1.52-2.63,1.91l3.93,6.87c.05.11.08.21.08.3,0,.16-.06.3-.18.4s-.25.16-.39.16h-2.45c-.31,0-.54-.08-.7-.24s-.29-.32-.38-.48l-3.47-6.38h-3.74v6.46c0,.18-.06.33-.18.46-.12.13-.27.19-.47.19h-2.45Zm3.1-10.15h3.8c1.1,0,1.91-.25,2.45-.74.54-.49.81-1.19.81-2.09s-.27-1.6-.79-2.11c-.53-.51-1.35-.77-2.46-.77h-3.8v5.71Z"/>
                                <path className="cls-1" fill="#000000" d="m99.32,20.49c-1.6,0-2.97-.27-4.12-.79-1.15-.53-2.05-1.35-2.69-2.45-.65-1.1-1-2.48-1.05-4.13-.02-.77-.03-1.54-.03-2.29s0-1.53.03-2.32c.05-1.63.41-3,1.08-4.09.66-1.1,1.58-1.92,2.73-2.48,1.16-.56,2.51-.84,4.05-.84s2.9.28,4.07.84c1.17.56,2.08,1.38,2.75,2.48s1.02,2.46,1.08,4.09c.04.79.05,1.56.05,2.32s-.02,1.52-.05,2.29c-.05,1.65-.4,3.03-1.05,4.13-.65,1.1-1.55,1.92-2.71,2.45-1.16.53-2.54.79-4.13.79Zm0-3.1c1.17,0,2.12-.35,2.85-1.04.74-.69,1.13-1.82,1.19-3.38.04-.79.05-1.52.05-2.2s-.02-1.4-.05-2.17c-.04-1.04-.23-1.89-.58-2.54s-.82-1.13-1.41-1.43c-.59-.3-1.28-.44-2.05-.44s-1.43.15-2.02.44c-.59.3-1.06.77-1.41,1.43s-.54,1.5-.58,2.54c-.02.77-.03,1.49-.03,2.17s0,1.41.03,2.2c.05,1.56.45,2.69,1.19,3.38.74.69,1.68,1.04,2.83,1.04Z"/>
                                <path className="cls-1" fill="#000000" d="m111.44,20.22c-.18,0-.33-.06-.46-.19-.13-.13-.19-.28-.19-.46V2.04c0-.2.06-.36.19-.48.13-.13.28-.19.46-.19h6.57c1.81,0,3.31.28,4.48.83,1.18.56,2.06,1.38,2.67,2.48.6,1.1.91,2.43.93,4.01.04.79.05,1.49.05,2.1s-.02,1.3-.05,2.07c-.04,1.67-.34,3.05-.92,4.13-.57,1.09-1.44,1.89-2.6,2.42-1.16.53-2.64.79-4.43.79h-6.71Zm3.1-3.1h3.47c1,0,1.82-.14,2.45-.43.63-.29,1.09-.75,1.39-1.39.3-.64.45-1.48.47-2.52.02-.54.03-1.01.04-1.41,0-.4,0-.81,0-1.21,0-.4-.02-.87-.04-1.39-.04-1.47-.4-2.56-1.1-3.26s-1.81-1.05-3.34-1.05h-3.34v12.66Z"/>
                                <path className="cls-1" fill="#000000" d="m137.24,20.49c-1.56,0-2.92-.27-4.07-.79-1.15-.53-2.04-1.35-2.67-2.45-.63-1.1-.94-2.52-.94-4.24V2.04c0-.2.06-.36.19-.48.13-.13.28-.19.46-.19h2.45c.2,0,.35.06.47.19.12.13.17.29.17.48v10.96c0,1.47.35,2.56,1.05,3.27.7.71,1.66,1.06,2.88,1.06s2.18-.35,2.87-1.06c.69-.71,1.04-1.8,1.04-3.27V2.04c0-.2.06-.36.19-.48s.29-.19.48-.19h2.42c.2,0,.35.06.47.19.12.13.17.29.17.48v10.96c0,1.72-.31,3.14-.93,4.24-.62,1.1-1.5,1.92-2.64,2.45-1.14.53-2.5.79-4.08.79Z"/>
                                <path className="cls-1" fill="#000000" d="m156.2,20.49c-1.67,0-3.08-.29-4.24-.88-1.16-.58-2.04-1.42-2.65-2.5-.61-1.09-.95-2.39-1.02-3.92-.02-.74-.03-1.53-.03-2.37s0-1.65.03-2.42c.07-1.51.42-2.81,1.04-3.91.62-1.09,1.51-1.93,2.67-2.52,1.16-.58,2.56-.88,4.21-.88,1.22,0,2.32.16,3.29.48.97.32,1.8.77,2.48,1.33s1.21,1.23,1.59,1.98c.38.75.57,1.57.59,2.45.02.16-.03.3-.15.4-.12.11-.26.16-.42.16h-2.56c-.2,0-.36-.05-.48-.15-.13-.1-.22-.26-.27-.5-.29-1.19-.78-1.99-1.48-2.42-.7-.43-1.57-.65-2.61-.65-1.2,0-2.16.34-2.88,1.01-.72.67-1.1,1.78-1.16,3.33-.05,1.47-.05,2.98,0,4.52.05,1.54.44,2.65,1.16,3.33.72.67,1.68,1.01,2.88,1.01,1.04,0,1.92-.22,2.63-.66.71-.44,1.2-1.24,1.47-2.41.05-.25.14-.42.27-.51s.29-.13.48-.13h2.56c.16,0,.3.05.42.16s.17.24.15.4c-.02.88-.22,1.7-.59,2.45-.38.75-.91,1.41-1.59,1.98s-1.51,1.01-2.48,1.33c-.97.32-2.06.48-3.29.48Z"/>
                                <path className="cls-1" fill="#000000" d="m172.14,20.22c-.18,0-.33-.06-.46-.19-.13-.13-.19-.28-.19-.46V4.68h-4.98c-.18,0-.33-.06-.46-.19-.13-.13-.19-.28-.19-.46v-1.99c0-.2.06-.36.19-.48.12-.13.28-.19.46-.19h13.74c.2,0,.36.06.48.19s.19.29.19.48v1.99c0,.18-.06.33-.19.46-.13.13-.29.19-.48.19h-4.96v14.89c0,.18-.06.33-.19.46-.13.13-.29.19-.48.19h-2.48Z"/>
                                <path className="cls-1" fill="#000000" d="m55.4,43.67c-.13,0-.26-.05-.37-.15-.11-.1-.16-.23-.16-.38,0-.07.02-.14.05-.23l6.08-16.27c.05-.17.15-.32.29-.44.14-.13.34-.19.59-.19h2.75c.25,0,.45.06.58.19.13.13.24.27.3.44l6.08,16.27c.02.08.03.16.03.23,0,.15-.05.28-.15.38-.1.1-.22.15-.35.15h-2.19c-.24,0-.41-.05-.52-.16s-.18-.21-.21-.32l-1.19-3.08h-7.49l-1.19,3.08c-.03.1-.11.21-.21.32s-.28.16-.52.16h-2.19Zm4.99-6.46h5.73l-2.88-7.79-2.85,7.79Z"/>
                                <path className="cls-1" fill="#000000" d="m74.57,43.67c-.17,0-.31-.06-.43-.18-.12-.12-.18-.26-.18-.43v-16.42c0-.18.06-.34.18-.45s.26-.18.43-.18h6.16c1.7,0,3.1.26,4.2.78,1.1.52,1.93,1.3,2.5,2.32.56,1.03.85,2.28.87,3.76.03.74.05,1.4.05,1.97s-.02,1.22-.05,1.94c-.03,1.56-.32,2.85-.86,3.87-.54,1.02-1.35,1.77-2.43,2.27-1.08.5-2.47.74-4.15.74h-6.28Zm2.9-2.9h3.25c.94,0,1.71-.13,2.3-.4.59-.27,1.02-.7,1.3-1.3.28-.6.42-1.38.44-2.36.02-.5.03-.95.04-1.32,0-.38,0-.76,0-1.14,0-.38-.02-.81-.04-1.3-.03-1.38-.38-2.4-1.03-3.05-.66-.66-1.7-.98-3.13-.98h-3.13v11.86Z"/>
                                <path className="cls-1" fill="#000000" d="m96.34,43.67c-.27,0-.48-.07-.63-.2s-.26-.3-.33-.5l-5.4-16.2c-.03-.08-.05-.16-.05-.23,0-.15.05-.28.15-.38s.23-.15.38-.15h2.22c.24,0,.42.06.54.19.13.13.21.25.24.37l4.26,12.99,4.26-12.99c.03-.12.11-.24.24-.37s.31-.19.54-.19h2.22c.13,0,.26.05.37.15.11.1.16.23.16.38,0,.07-.02.14-.05.23l-5.4,16.2c-.07.2-.18.37-.33.5s-.36.2-.63.2h-2.78Z"/>
                                <path className="cls-1" fill="#000000" d="m108.8,43.67c-.17,0-.31-.06-.43-.18-.12-.12-.18-.26-.18-.43v-16.45c0-.17.06-.31.18-.43.12-.12.26-.18.43-.18h2.37c.18,0,.33.06.44.18.11.12.16.26.16.43v16.45c0,.17-.05.31-.16.43-.11.12-.26.18-.44.18h-2.37Z"/>
                                <path className="cls-1" fill="#000000" d="m121.87,43.92c-1.56,0-2.87-.23-3.92-.69-1.05-.46-1.85-1.07-2.4-1.82s-.84-1.53-.87-2.36c0-.15.05-.28.15-.38.1-.1.23-.15.38-.15h2.24c.22,0,.38.05.49.14.11.09.21.21.29.34.1.32.29.63.58.95.29.31.68.57,1.17.77.5.2,1.12.3,1.88.3,1.21,0,2.11-.2,2.71-.61.6-.4.9-.95.9-1.64,0-.49-.16-.88-.48-1.17-.32-.29-.81-.56-1.48-.81-.66-.24-1.54-.5-2.64-.77-1.26-.3-2.32-.67-3.17-1.1-.85-.43-1.49-.97-1.92-1.63-.43-.66-.64-1.49-.64-2.5s.26-1.84.79-2.6c.53-.76,1.29-1.35,2.27-1.79.98-.44,2.16-.66,3.52-.66,1.09,0,2.06.15,2.9.44.84.29,1.54.68,2.09,1.16s.98.99,1.27,1.54.45,1.08.47,1.6c0,.13-.05.26-.14.37-.09.11-.22.16-.39.16h-2.35c-.13,0-.27-.03-.4-.1-.13-.07-.24-.19-.33-.38-.1-.52-.43-.97-.98-1.34-.55-.37-1.27-.55-2.14-.55s-1.64.17-2.19.5c-.56.34-.83.86-.83,1.56,0,.47.14.86.42,1.17.28.31.72.58,1.34.82.61.24,1.43.49,2.43.76,1.43.32,2.6.69,3.51,1.11.91.42,1.57.95,1.99,1.6.42.65.63,1.47.63,2.46,0,1.11-.3,2.06-.9,2.84-.6.78-1.43,1.38-2.51,1.8-1.08.42-2.33.63-3.76.63Z"/>
                                <path className="cls-1" fill="#000000" d="m138.72,43.92c-1.5,0-2.78-.25-3.86-.74-1.08-.5-1.92-1.26-2.52-2.3-.61-1.03-.93-2.32-.98-3.87-.02-.72-.03-1.44-.03-2.14s0-1.43.03-2.17c.05-1.53.39-2.81,1.01-3.83.62-1.03,1.48-1.8,2.56-2.32,1.08-.52,2.35-.78,3.8-.78s2.72.26,3.81.78c1.09.52,1.95,1.29,2.57,2.32.62,1.03.96,2.3,1.01,3.83.03.74.05,1.46.05,2.17s-.02,1.42-.05,2.14c-.05,1.55-.38,2.84-.98,3.87-.61,1.03-1.45,1.8-2.53,2.3-1.08.5-2.38.74-3.87.74Zm0-2.9c1.09,0,1.98-.32,2.67-.97.69-.65,1.06-1.7,1.11-3.17.03-.74.05-1.43.05-2.06s-.02-1.31-.05-2.03c-.03-.98-.21-1.77-.54-2.38s-.77-1.06-1.32-1.34c-.55-.28-1.19-.42-1.92-.42s-1.34.14-1.89.42c-.55.28-1,.72-1.32,1.34s-.51,1.41-.54,2.38c-.02.72-.03,1.4-.03,2.03s0,1.32.03,2.06c.05,1.46.42,2.52,1.11,3.17.69.65,1.57.97,2.65.97Z"/>
                                <path className="cls-1" fill="#000000" d="m150.07,43.67c-.17,0-.31-.06-.43-.18-.12-.12-.18-.26-.18-.43v-16.42c0-.18.06-.34.18-.45.12-.12.26-.18.43-.18h6.53c2.03,0,3.64.47,4.82,1.41,1.18.94,1.77,2.31,1.77,4.11,0,1.24-.31,2.28-.92,3.1-.61.82-1.43,1.42-2.46,1.79l3.68,6.43c.05.1.08.19.08.28,0,.15-.05.28-.16.38s-.23.15-.37.15h-2.3c-.29,0-.5-.08-.66-.23s-.27-.3-.35-.45l-3.25-5.98h-3.51v6.05c0,.17-.05.31-.16.43-.11.12-.26.18-.44.18h-2.3Zm2.9-9.51h3.56c1.03,0,1.79-.23,2.3-.69.5-.46.76-1.11.76-1.95s-.25-1.5-.74-1.98c-.5-.48-1.27-.72-2.31-.72h-3.56v5.35Z"/>
                                <path className="cls-1" fill="#000000" d="m171.03,43.67c-.17,0-.31-.06-.43-.18-.12-.12-.18-.26-.18-.43v-5.7l-5.95-10.54s-.03-.08-.05-.13c-.02-.05-.03-.1-.03-.15,0-.15.05-.28.15-.38s.22-.15.35-.15h2.24c.2,0,.37.05.49.15.13.1.21.21.26.33l4.29,7.34,4.26-7.34c.07-.12.16-.23.29-.33.13-.1.29-.15.49-.15h2.22c.15,0,.28.05.38.15s.15.23.15.38c0,.05,0,.1-.01.15,0,.05-.03.09-.06.13l-5.95,10.54v5.7c0,.17-.06.31-.18.43s-.27.18-.45.18h-2.3Z"/>
                                <path className="cls-2" fill="#f24c00" d="m35.01,0H9.95C4.48,0,0,4.48,0,9.95v25.07c0,5.47,4.48,9.95,9.95,9.95h25.07c5.47,0,9.95-4.48,9.95-9.95V9.95c0-5.47-4.48-9.95-9.95-9.95Zm-3.77,18.95l-.09,5.63h0s-11.09,11.09-11.09,11.09h0s-.02-.03-.02-.03l.09-5.63.09-5.63-5.63.09-5.58.09,11.06-11.07h0s5.62-.09,5.62-.09l5.63-.09-.09,5.63Z"/>
                            </g>
                        </svg>
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