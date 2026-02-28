function PlatformHighlights() {
  return (
    <div className="platform-highlights">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="platform-highlights-media">
              <h2>Your Business Pays Are Now Faster and Secure</h2>
              <div className="sprial-cicle-wrapper">
                <img src="/images/sprial-circle.png" alt="Sprial circle" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="stats-container">
              <div className="stat">
                <div className="stat-number gradient-purple">11.5M+</div>
                <div className="stat-label">Transactions Processed Monthly</div>
              </div>

              <div className="stat">
                <div className="stat-number gradient-blue">99.9%</div>
                <div className="stat-label">Platform Uptime and Reliability</div>
              </div>

              <div className="stat">
                <div className="stat-number gradient-green">70% <span>Faster</span></div>
                <div className="stat-label">
                  Merchant Onboarding with AI Automation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformHighlights;
