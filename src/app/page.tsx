import Link from "next/link"
import ValueProposition from '@/components/ValueProposition'
// import GreyComponent from "../components/GreyComponent"
// import WhiteComponent from "../components/WhiteComponent"
import Header from "../components/Header"
import Footer from '../components/Footer'
import TechnicalConsultation from "./technical-consultation/page";
import Services from "./services/page";
import Process from "../components/LandingPage/Process/Process"
import ServicesComponent from "@/components/LandingPage/Services/ServicesComponent";
import MeetTheTeam from "@/components/LandingPage/Team/MeetTheTeam";
// import CatchyHeadline from "../components/CatchyHeadline"

export default function Home() {
  const contactButton = {
    key: "Get in Touch",
    path: "/technical-consultation",
    Component: TechnicalConsultation
  }

  const servicesButton = {
    key: "Services",
    path: "/services",
    Component: Services
  }
  return (
    <>
      <head>
        <title>Product Advisory</title>
      </head>
      <Header />
      <div className="buffer" id="ProductAdvisory">
        {/* <Link href="/startup-funding">Startup Funding</Link> */}
        
        <ValueProposition 
            title="Looking for innovative new ways to make your product grow?"
            subtitle="We can help you at every stage of the process"
            id="propositionMargin"
            background="greyBackground"
            align="leftAlign"
            data={
                <div>   
                    {/* <Link key={contactButton.key} to={contactButton.path}> */}
                        <button className="getInTouchButton" id="navButton">Get In Touch</button>
                    {/* </Link> */}
                    {/* <Link key={servicesButton.key} to={servicesButton.path}> */}
                        <button className="button" id="learnMore">Learn More</button>
                    {/* </Link>  */}
                    
                </div>
            }
        />
        <ServicesComponent />
        <Process />
        <MeetTheTeam />
        <ValueProposition
            title="We're Here For You"
            background="whiteBackground"
            align="centerAlign"
            id="FinalValueProposition"
            subtitle="Send us an inquiry or continue reading about the different ways we can help your business grow"
            data={
                <div>
                    <Link key={contactButton.key} href={contactButton.path}>
                        <button className="getInTouchButton">Get In Touch</button>
                    </Link>
                    <Link key={servicesButton.key} href={servicesButton.path}>
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
