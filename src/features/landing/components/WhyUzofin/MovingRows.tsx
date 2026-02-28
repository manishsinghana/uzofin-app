import FeatureCard from "./FeatureCard";
import { featureData } from "./featureData";

export default function MovingRows() {
  return (
    <div className="moving-tracks">
      {featureData.map((row, i) => (
        <div className="marquee-track-wrapper" key={i}>
          <div
            className={`marquee-track ${
              i % 2 === 0 ? "scroll-left" : "scroll-right"
            }`}
          >
            {[...row, ...row].map((item, index) => (
              <FeatureCard key={`${item.id}-${index}`} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}