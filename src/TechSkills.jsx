import React, { useState, useEffect, useRef } from "react";
import ReactSVG from "./assets/ReactSVG.svg"; 
import express from "./assets/express.svg";
import mongoDB from "./assets/mongoDB.svg";
import nodeJS from "./assets/nodeJS.svg";
import bootstrap from "./assets/bootstrap.svg";
import mui from "./assets/mui.svg";
import tailwind from "./assets/tailwind.svg";
import firebase from "./assets/firebase.svg";
import php from "./assets/php.svg";
import laravel from "./assets/laravel.svg";
import mysql from "./assets/mysql.svg";
import github from "./assets/github.svg";

const technologies = [
  { name: "React", icon: ReactSVG, progress: 80 },
  { name: "Express", icon: express, progress: 70 },
  { name: "MongoDB", icon: mongoDB, progress: 75 },
  { name: "NodeJS", icon: nodeJS, progress: 70 },
  { name: "Bootstrap", icon: bootstrap, progress: 80 },
  { name: "Material UI", icon: mui, progress: 85 },
  { name: "Tailwind CSS", icon: tailwind, progress: 90 },
  { name: "Firebase", icon: firebase, progress: 80 },
  { name: "PHP", icon: php, progress: 75 },
  { name: "Laravel", icon: laravel, progress: 75 },
  { name: "MySQL", icon: mysql, progress: 70 },
  { name: "github", icon: github, progress: 70 },
];

const TechnologySkills = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {technologies.map((tech, index) => (
        <TechProgress key={index} tech={tech} />
      ))}
    </div>
  );
};

const TechProgress = ({ tech }) => {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const techRef = useRef(null);

  useEffect(() => {
    const animateProgress = () => {
      const timer = setInterval(() => {
        setWidth((prev) => {
          if (prev < tech.progress) {
            return Math.min(prev + 1, tech.progress);
          } else {
            clearInterval(timer);
            return tech.progress;
          }
        });
      }, 50);
    };

    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateProgress();
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.3,
    });

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, [tech.progress, hasAnimated]);

  return (
    <div ref={techRef} className="flex items-center space-x-4  py-5 px-5 text-white  rounded-lg">
      <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
      <div className="w-full">
        <div className="text-lg font-semibold">{tech.name}</div>
        <div className="relative pt-1">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold inline-block py-1 ml-auto">{width}%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1 bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${width}%`,
                  background: `linear-gradient(90deg, #FF007F 0%, #6A1B9A 100%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySkills;
