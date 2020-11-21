import { useState, useRef, useEffect } from 'react';

export default function useHiddenOnScroll(initialValue = true) {
  const [showNav, setShowNav] = useState(initialValue);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY.current) {
        if (showNav) setShowNav(false);
      } else {
        if (!showNav) setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNav, lastScrollY]);

  return [showNav];
}
