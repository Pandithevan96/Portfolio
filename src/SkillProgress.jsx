import React, { useState, useEffect, useRef } from "react";

const SkillProgress = ({ skill, color1, color2, label }) => {
  const radius = 45;
  const circleLength = 2 * Math.PI * radius;
  const [currentSkill, setCurrentSkill] = useState(0);
  const [strokeOffset, setStrokeOffset] = useState(circleLength);
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const steps = 100;
    const increment = skill / steps;
    let step = 0;

    const animateProgress = () => {
      if (step <= steps) {
        const progress = step * increment;
        setCurrentSkill(progress);
        setStrokeOffset(circleLength - (circleLength * progress) / 100);
        step++;
        if (progress < skill) {
          requestAnimationFrame(animateProgress);
        } else {
          setHasAnimated(true);
        }
      }
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateProgress();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [skill, hasAnimated]);

  return (
    <div
      ref={skillRef}
      className="progress-circle flex flex-col items-center  lg:p-5 rounded-md"
    >
      <svg width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id={`gradient-${skill}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color1 }} />
            <stop offset="100%" style={{ stopColor: color2 }} />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={radius} stroke="#e6e6e6" strokeWidth="15" fill="none" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={`url(#gradient-${skill})`}
          strokeWidth="15"
          fill="none"
          style={{
            strokeDasharray: circleLength,
            strokeDashoffset: strokeOffset,
            transition: "stroke-dashoffset 0.1s ease-out",
          }}
        />
        <text
          fill="white"
          fontSize="1.5em"
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {Math.round(currentSkill)}%
        </text>
      </svg>
      <h2 className="text-white text-md mt-3 font-semibold text-center">{label}</h2>
    </div>
  );
};

const SkillProgressContainer = () => {
  return (
    <div className="bg-neutral-800 p-8">
      <h5 className="text-slate-100 font-quicksand font-bold text-2xl mb-6 text-center">
        Soft Skills
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <SkillProgress skill={85} color1="#f06" color2="#ff9a9e" label="Creativity" />
        <SkillProgress skill={80} color1="#f06" color2="#ff9a9e" label="Flexibility" />
        <SkillProgress skill={90} color1="#f06" color2="#ff9a9e" label="Teamwork" />
        <SkillProgress skill={70} color1="#f06" color2="#ff9a9e" label="Learning" />
      </div>
    </div>
  );
};

export default SkillProgressContainer;
