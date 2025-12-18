"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const HeroContent = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const roles = useMemo(() => ["Developer", "Freelancer", "Debugger", "Problem Solver", "Coder"], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = roles[roleIndex];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentRole.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentRole, roles]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-16 md:mt-35 w-full z-[20] gap-6 md:gap-8"
    >
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-2.5 px-4 md:py-[8px] md:px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0 backdrop-blur-sm"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 md:mr-[10px] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-xs md:text-[13px] font-medium">
            Fullstack Developer MERN 
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-6 mt-3 md:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto leading-tight"
        >
          <span className="px-2 md:px-0">
            <span className="block mb-2">
              Hii, I&apos;m {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Aryan
              </span>
            </span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                I&apos;m {displayText}
              </span>
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg md:text-lg text-gray-300 my-4 md:my-5 max-w-full md:max-w-[600px] font-mono leading-relaxed px-2 md:px-0"
        >
          I craft <span className="text-cyan-400 font-semibold">bold digital experiences</span> built to inspire — fast, functional, and unforgettable. As a Full Stack Engineer, I thrive at the intersection of <span className="text-purple-400 font-semibold">creativity and code</span>.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-6 md:py-2 button-primary text-center text-white cursor-pointer rounded-xl md:rounded-lg max-w-[200px] mx-auto md:mx-0 font-semibold text-sm md:text-base shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          Learn more
        </motion.a>
      </div>

      {!isMobile && (
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full hidden md:flex justify-center items-center"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={650}
            width={650}
            draggable={false}
            className="select-none"
            priority
          />
        </motion.div>
      )}
    </motion.div>
  );
};