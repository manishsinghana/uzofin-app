import HeroBanner from "./components/HeroBanner";
import TrustedBrands from "./components/TrustedBrands";
import CoreSolutions from "./components/CoreSolutions";
import WhyUzofin from "./components/WhyUzofin";
import PowerfulAPIS from "./components/PowerfulAPIS";
import Industry from "./components/Industry";
import FutureCTA from "./components/FutureCTA";

function LandingPage(){
    return(
        <>
        <HeroBanner />
        <TrustedBrands />
        <CoreSolutions />
        <WhyUzofin />
        <PowerfulAPIS />
       <Industry /> 
       <FutureCTA />
       </>
    )
}

export default LandingPage;