"use client";

import { CodeBracketIcon, RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SkillText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    
    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-auto flex flex-col items-center justify-center mb-16 md:mb-20 relative px-4"
    >
      {/* Animated Background Badge */}
      <motion.div
        initial={{ opacity: 0, y: isMobile ? -20 : -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }}
        className="relative mb-8 md:mb-0"
      >
        <div className="Welcome-box py-3 px-5 md:py-4 md:px-6 border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 md:gap-3 relative z-10">
            <RocketLaunchIcon className="text-cyan-400 h-5 w-5 md:h-6 md:w-6" />
            <h1 className="Welcome-text text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
              Cutting-Edge Technology Stack
            </h1>
            <CodeBracketIcon className="text-purple-400 h-5 w-5 md:h-6 md:w-6" />
          </div>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0.1 : 0.2, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 md:mt-8 text-center mb-6 md:mb-6 px-4"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight block">
          Mastering Modern
        </span>
        <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight block mt-2">
          Technologies
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 20 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0.15 : 0.3, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 text-center max-w-3xl leading-relaxed px-6 md:px-4"
      >
        Building <span className="text-cyan-400 font-semibold">scalable applications</span> with 
        the latest <span className="text-purple-400 font-semibold">frameworks & tools</span>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: isMobile ? 0.2 : 0.4, duration: isMobile ? 0.3 : 0.4 }}
        className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-12 w-full max-w-4xl px-4"
      >
        {[
          { number: "20+", label: "Technologies" },
          { number: "10+", label: "Projects" },
          { number: "3+", label: "Years Exp" },
          { number: "∞", label: "Passion" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              delay: isMobile ? 0.25 + index * 0.03 : 0.5 + index * 0.05,
              duration: 0.2
            }}
            whileHover={!isMobile ? { scale: 1.05, y: -5 } : {}}
            className="text-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium mt-1.5 md:mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
