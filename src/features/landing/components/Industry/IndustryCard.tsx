import { Link } from "react-router-dom";

interface IndustryCardProps {
  title: string;
  description: string;
  linkText?: string;
  onClick?: () => void;
}

export default function IndustryCard({
  title,
  description,
  linkText = "Know more",
  onClick,
}: IndustryCardProps) {
  return (
    <div className="industry-card" onClick={onClick}>
      <h4>{title}</h4>
      <p>
        {description}&nbsp;
        {linkText && <Link to="/">{linkText}</Link>}
      </p>
      <span className="check-icon">
        <img src="/images/icons/check-blue.svg" alt="Check Icon" />
      </span>
    </div>
  );
}