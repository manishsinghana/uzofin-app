import { Link } from "react-router-dom";

interface FeaturedCardProps {
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({ title, description, link }:FeaturedCardProps) {
  return (
    <Link className="feature-card" to={link}>
      <div className="feature-card-inner">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="arrow-icon">
          <img src="/images/icons/arrow-up.svg" alt="arrow up icon" />
        </div>
      </div>
    </Link>
  );
}
