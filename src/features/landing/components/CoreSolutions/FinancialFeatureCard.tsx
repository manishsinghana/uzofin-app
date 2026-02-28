import React from "react";

type AccentColor = "blue" | "green" | "purple" | "yellow";

interface FinancialFeatureCardProps {
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  accent?: AccentColor;
}

const FinancialFeatureCard: React.FC<FinancialFeatureCardProps> = ({
  title,
  description,
  stat,
  statLabel,
  accent = "blue",
}) => {
  return (
    <div className="financial-feature-card">
      <div className="financial-feature-card-inner">
        <div>
          <h2>
            <span className={`accent ${accent}`}></span>
            {title}
          </h2>
          <p className="description">{description}</p>
        </div>

        {stat && (
          <div className="stat-section">
            <div className="stat-value">
              <span className="dot"></span>
              <span className="stat">{stat}</span>
            </div>
            <p className="stat-label">{statLabel}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialFeatureCard;