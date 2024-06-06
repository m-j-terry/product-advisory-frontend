import Link from "next/link";
import GreyComponent from "../../components/GreyComponent";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import TechnicalConsultation from "../technical-consultation/page";
import Services from "../services/page";
import ServicesCarousel from '../../components/servicesCarousel';
type Ticket {id:Number}
interface Props { ticket:Ticket }

export default function FormSuccess(props:Props) {
    const contactButton = {
        Component: TechnicalConsultation,
        key: "Technical Consultation",
        path: '/technical-consultation'
    }
    const servicesButton = {
        Component: Services,
        key: "Services",
        path: "/services"
    }
    return (
        <>
            <Header />
            <div className="buffer">
                <GreyComponent 
                    title="Congrats! Your inquiry was successfully submitted!"
                    subtitle={`Your ticket number is ${props.ticket.id}`}
                    textAlign=""
                    data={
                        <div>
                            <p>You should receive a confirmation email in your inbox shortly. If there are any issues, please reach out to <a href="mailto:rashu@productadvisory.org">rashu@productadvisory.org.</a></p>
                        </div>
                    }
                />
                

                {/* <ServicesCarousel
                    component={StartupFunding}
                /> */}

                <Footer />
            </div>
        </>
    );
}