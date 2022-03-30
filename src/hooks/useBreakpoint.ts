import { useEffect, useState } from 'react';
import { Breakpoints } from '@/enums/breakpoints';

export const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState<string>('');
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 600) {
      setBreakPoint(Breakpoints.XS);
    }
    if (600 < windowSize.width && windowSize.width < 960) {
      setBreakPoint(Breakpoints.SM);
    }
    if (960 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(Breakpoints.MD);
    }
    if (windowSize.width >= 1280) {
      setBreakPoint(Breakpoints.LG);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);

  return breakpoint;
};
