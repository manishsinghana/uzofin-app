import IndustryMarquee from "./IndustryMarquee";

function Industry(){
    return(
        <section className="industry">
            <div className="container">
                <div className="text-center">
                    <p className="section-subtitle pb-4">24/7 support</p>
                    <h2 className="section-title-xxl">Industry <span className="gradient-text-two font-medium">Standard</span></h2>
                </div>
            </div>
            <IndustryMarquee />
        </section>
    )
}

export default Industry;