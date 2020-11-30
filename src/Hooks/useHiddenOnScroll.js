import { useState, useRef, useEffect } from 'react';
import { throttle } from 'throttle-debounce';

export default function useHiddenOnScroll(initialValue = true) {
  const [showNav, setShowNav] = useState(initialValue);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(100, () => {
      if (window.scrollY > lastScrollY.current) {
        if (showNav) setShowNav(false);
      } else {
        if (!showNav) setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNav, lastScrollY]);

  return [showNav];
}
