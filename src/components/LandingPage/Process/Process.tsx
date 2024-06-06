import Arrow from './Arrow.svg'
import Image from 'next/image'
export default function Priorities(){
    return(
        <div className="greyBackground" id="Process">
            <center className="sectionHeader">
                <h2 className="sectionTitle">Our Process</h2>
                <p>How our process prioritizes and supports your goals as a startup or an entrepreneur:</p>
            </center>
            <div className="row" id="process">
                <div className="box">
                    <h3>Get in Touch</h3>
                    <p>Simply fill out our questionnaire; we’ll review your info to see how we can best fit your needs before scheduling a consultation.</p>
                    
                </div>
                <div className="arrowContainer">
                    {/* <img className="arrow" src={Arrow} alt=">>>"></img> */}
                    <Image 
                        className="arrow"
                        src={Arrow}
                        alt=">>>"
                    />
                </div>                
                <div className="box">
                    <h3>Consultation</h3>
                    <p>Together we will go over the details of how to best address your company’s roadblocks and create a plan for overcoming them.</p>
                    
                </div>
                <div className="arrowContainer">
                    {/* <img className="arrow" src={Arrow} alt=">>>"></img> */}
                    <Image 
                        className="arrow"
                        src={Arrow}
                        alt=">>>"
                    />
                </div>
                <div className="box">
                    <h3>Unique Solutions</h3>
                    <p>We know every situation is unique. We’re here to ensure the delivery of comprehensive, attainable solutions to help take your company to the next level.</p>
                </div>
            </div>
        </div>
    )
}