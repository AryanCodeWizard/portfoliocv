"use client";

import { useEffect, useMemo, useState } from "react";

import { HeroContent } from "@/components/sub/hero-content";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 10,
          y: (e.clientY / window.innerHeight - 0.5) * 10
        });
      }
    };

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const particleCount = useMemo(() => isMobile ? 20 : 80, [isMobile]);

  // Enhanced animation variants with 3D
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const nebulaVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateX: -45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0, z: -100 },
    visible: (i: number) => ({
      scale: 1,
      opacity: [0, 1, 0.7],
      z: 0,
      transition: {
        delay: i * 0.015,
        duration: 1.8,
        ease: "easeOut",
        opacity: {
          duration: 4,
          times: [0, 0.5, 1]
        }
      }
    })
  };

  const heroContentVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.6,
        duration: 1.4,
        ease: "easeOut"
      }
    }
  };

  const scrollIndicatorVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.8,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="relative flex flex-col h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Simplified Background - reduce complexity on mobile */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-purple-600/15 to-pink-500/10 rounded-full blur-3xl"
          animate={!isMobile ? {
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-blue-600/10 to-cyan-500/15 rounded-full blur-3xl"
          animate={!isMobile ? {
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          } : {}}
          transition={{
            delay: 0.4,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Optimized Starfield */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => {
          const size = 0.3 + Math.random() * 1;
          const opacity = 0.3 + Math.random() * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full will-change-transform"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [opacity * 0.5, opacity, opacity * 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center">
        <HeroContent />
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          <span className="text-white/70 text-xs md:text-sm font-light tracking-widest uppercase bg-black/20 px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-xl border border-white/10">
            Scroll Down
          </span>
          <div className="w-6 md:w-10 h-10 md:h-16 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-xl bg-black/10">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 md:w-2 h-4 md:h-6 bg-gradient-to-b from-cyan-300 to-purple-300 rounded-full mt-2 md:mt-4"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

