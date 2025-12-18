// Detect if device is mobile (memoized to avoid repeated checks)
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export function slideInFromLeft(delay: number) {
  const mobile = isMobile();
  return {
    hidden: { x: mobile ? -20 : -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: mobile ? 0.2 : 0.4,
        ease: "easeOut",
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  const mobile = isMobile();
  return {
    hidden: { x: mobile ? 20 : 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: mobile ? 0.2 : 0.4,
        ease: "easeOut",
      },
    },
  };
}

export function slideInFromTop(delay: number = 0.5) {
  const mobile = isMobile();
  return {
    hidden: { y: mobile ? -20 : -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: mobile ? 0.2 : 0.4,
        ease: "easeOut",
      },
    },
  };
}

// Simplified mobile animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// No animation for mobile (instant)
export const mobileOptimized = (desktopVariant: any) => {
  return isMobile() ? { hidden: {}, visible: {} } : desktopVariant;
};
