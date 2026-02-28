import { Button } from "../../../../shared/components/ui/Button";

function FutureCTA() {
    return (
        <section className="future-cta">
            <div className="container">
                <div className="text-center">
                    <h2 className="d-inline-block section-title-xxl text-center">
                        The future of your <br className="d-none d-lg-inline-block" /> industry{" "}
                        <span className="gradient-text-three font-medium">
                            starts here
                        </span>
                    </h2>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-center gap-4 pt-lg-4 position-relative z-1">
                    <Button variant="primary">Book a Demo</Button>
                    <Button variant="outline">Build AI</Button>
                </div>
            </div>
        </section>
    );
}

export default FutureCTA;