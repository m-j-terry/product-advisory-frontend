import Home from "../page";
import StartupFunding from "../startup-funding/page";
import FundingIncubators from "../funding-incubators/page";
import PoliciesAI from "../ai-policies-safety-law/page";
import ProductMarketing from "../product-marketing/page";
import TechnicalConsultation from "../technical-consultation/page";
import MinorityEntrepreneurs from "../minority-entrepreneurs/page";
import Services from "../services/page";
import Products from "../products/page";
import PartnershipProgram from "../partnership-program/page";
// import ErrorElement from '../error-element/page'
interface Route {
    Component: React.FunctionComponent;
    path: string;
    key: string;
}

type RoutesArray = Route[];

const siteRoutes:RoutesArray = [
    {
        Component: Home,
        key: 'Product Advisory',
        path: '/'
    }, 
    {
        Component: StartupFunding,
        key: 'Startup Funding',
        path: '/startup-funding'
    },
    {
        Component: FundingIncubators,
        key: 'Funding Incubators',
        path: '/funding-incubators'    
    },
    {
        Component: Products,
        key: 'Products',
        path: '/products'
    },
    {
        Component: MinorityEntrepreneurs,
        key: 'Supporting Minority Entrepreneurs',
        path: '/minority-entrepreneurs'
    },
    {
        Component: PartnershipProgram,
        key: 'Partnership Program',
        path: '/partnership-program'
    },
    {
        Component: Services,
        key: 'Services',
        path: '/services'
    },
    {
        Component: PoliciesAI,
        key: 'AI Policies, Safety & Law',
        path: '/ai-policies-safety-law'
    },
    {
        Component: ProductMarketing,
        key: 'Product Marketing & Sales',
        path: '/product-marketing'
    },
    {
        Component: TechnicalConsultation,
        key: 'Technical Consultation',
        path: '/technical-consultation'
    }
]

export default siteRoutes