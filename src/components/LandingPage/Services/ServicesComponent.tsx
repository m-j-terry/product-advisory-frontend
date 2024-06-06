import GTM from "./GTM Icon.svg"
import PM from "./PM Icon.svg"
import Strategies from "./Strategy Icon.svg"
import Image from 'next/image'

export default function ServicesComponent(){
    return(
        <div className={`greyBackground extender`}>
            <div className="orangeBackground">
                <div className="whiteBackground" id="Services">
                    <center className="sectionHeader">
                        <h2 className="sectionTitle">Services</h2>
                    </center>
                    <center className="row" id="serviceColumn">
                        <div className="serviceBox" id="service1">
                            <Image
                                className="serviceIcons"
                                src={PM}
                                alt="Service 1"
                            />
                            <h3>Consulting Product Management</h3>
                            <p>Strategy, Roadmap, & AI</p>
                            <button className="servicesButton">{'Learn More >'}</button>
                        </div>

                        <div className="serviceBox" id="service2" >
                            <Image
                                className="serviceIcons"
                                src={Strategies}
                                alt="Service 2"
                            />
                            <h3>Software Development</h3>
                            <p>Technology & Engineering</p>
                            <button className="servicesButton">{'Learn More >'}</button>
                        </div>

                        <div className="serviceBox" id="service3" >
                            <Image
                                className="serviceIcons"
                                src={GTM}
                                alt="Service 3"
                            />
                            <h3>Go to Market</h3>
                            <p>Product Marketing, Product Market Fit, Marketing & Sales</p>
                            <button className="servicesButton">{'Learn More >'}</button>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}