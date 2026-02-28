import FinancialFeatureCard from "./FinancialFeatureCard";

function FinancialSuiteSection() {
  return (
    <div className="financial-suite-section">
      <div className="container">
        <div className="financial-suite-row">
            <div className="left-texts">
                <div className="left-texts-inner">
                    <h2>Our Intelligent Financial Suite</h2>
                    <p><span>Tools that accelerate every step of your financial workflow.</span></p>
                </div>
            </div>

          <div className="financial-cards-container">
            <div className="masonry-wrapper">
              <div className="column column-1">
                <FinancialFeatureCard
                  accent="blue"
                  title="AI Banking"
                  description="Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations."
                  stat="3,969"
                  statLabel="TRANSACTIONS PER SECOND"
                />

                <FinancialFeatureCard
                  accent="purple"
                  title="Payouts"
                  description="Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements."
                  stat="163,077,581,394"
                  statLabel="TOTAL TRANSACTIONS"
                />

              </div>
              <div className="column column-2">
                <FinancialFeatureCard
                  accent="yellow"
                  title="Payments"
                  description="Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease."
                  stat="1,675"
                  statLabel="VALIDATOR NODES"
                />
                

                <FinancialFeatureCard
                  accent="green"
                  title="Merchant Onboarding"
                  description="Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes."
                  stat="100%"
                  statLabel="ON-TIME MERCHANT ONBOARD"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialSuiteSection;
