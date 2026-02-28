import { Button } from "../../../../shared/components/ui/Button";

function HeroBanner(){
    return(
        <section className="hero-banner">
            <div className="container">
                <div className="left-animatated-img">
                    <img src="/images/hero-frame-left.png" alt="" />
                </div>
                <div className="right-animatated-img">
                    <img src="/images/hero-frame-right.png" alt="" />
                </div>
                <div className="slide-up">
                    <div className="text-center">
                        <h1 className="section-title-lg">AI-powered <span className="gradient-text-one font-medium">Banking & Payment Solutions</span> built for Modern Businesses</h1>
                        <p className="mb-5">UzOfin brings intelligent automation, real-time payments, and seamless financial operations together so you can scale without friction.</p>
                    </div>
                    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-center gap-4 position-relative z-1">
                        <Button variant="primary">Start building</Button>
                        <Button variant="outline">Read Docs</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;