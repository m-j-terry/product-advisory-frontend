import { useState, useEffect } from 'react'
import routes from '../app/Router/routes'
import Services from '../app/services/page'
import TechnicalConsultation from '../app/technical-consultation/page'
import Home from '../app/page'

import Link from 'next/link'

interface Props { component:(React.FunctionComponent | null), path:(string | null), key:(string | null)}

// type route = { Component: JSX.Element }

interface Route {
    Component: React.FunctionComponent;
    path: string;
    key: string;
}

type RoutesArray = Route[];

export default function ServicesCarousel(props:Props){
    const [routesCarousel, setRoutesCarousel] = useState<RoutesArray>(routes)
    useEffect(() => {
        function removeRouteByComponent(arr:RoutesArray, componentToRemove:(React.FunctionComponent | null)) {
            return arr.filter((route:Route) => route.Component !== componentToRemove);
        }
        let updatedRoutes:RoutesArray = removeRouteByComponent(routesCarousel, props.component)
        if (props.component !== Services){
            updatedRoutes = removeRouteByComponent(updatedRoutes, Services)
        }
        updatedRoutes = removeRouteByComponent(updatedRoutes, TechnicalConsultation)
        updatedRoutes = removeRouteByComponent(updatedRoutes, Home)

        setRoutesCarousel(updatedRoutes)

        console.log(routesCarousel)
    }, [])
    return(
        <div className="whiteBackground">
            <div className="buffer"></div>
            <center className="sectionHeader">
                <h2 className="sectionTitle">See other services we provide</h2>
            </center>
            <center>
                <div className="carousel" id="serviceCarousel">
                {routesCarousel.map(route => (
                    <div className="serviceCard">
                        <Link key={route.key} href={route.path}>
                            <button className="serviceButton">{route.key}</button>
                        </Link>
                    </div>
                ))}
                </div>
            </center>
        </div>
    )
}