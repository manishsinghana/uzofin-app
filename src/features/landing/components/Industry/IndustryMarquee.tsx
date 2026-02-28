import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import IndustryCard from "./IndustryCard";
import { industryData } from "./industryData";

export default function IndustryMarquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  const pauseAll = () => {
    animationsRef.current.forEach((anim) => anim.pause());
  };

  const resumeAll = () => {
    animationsRef.current.forEach((anim) => anim.resume());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      const cards = gsap.utils.toArray<HTMLElement>(".card-wrapper");

      const isMobile = window.innerWidth < 768;
      const floatDistance = isMobile ? 30 : 60;
      const duration = isMobile ? 25 : 15;

      const horizontalAnim = gsap.to(marquee, {
        xPercent: -50,
        duration,
        ease: "none",
        repeat: -1,
      });

      animationsRef.current.push(horizontalAnim);

      cards.forEach((card, i) => {
        const floatAnim = gsap.fromTo(
          card,
          { y: i % 2 === 0 ? -floatDistance : floatDistance },
          {
            y: i % 2 === 0 ? floatDistance : -floatDistance,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );

        animationsRef.current.push(floatAnim);

        card.addEventListener("mouseenter", pauseAll);
        card.addEventListener("mouseleave", resumeAll);
      });
    }, marqueeRef);

    return () => {
      ctx.revert();
      animationsRef.current = [];
    };
  }, []);

  return (
    <div className="industry-marquee-wrapper">
      <div className="marquee" ref={marqueeRef}>
        {[...industryData, ...industryData].map((item) => (
          <div key={item.id} className="card-wrapper">
            <IndustryCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}