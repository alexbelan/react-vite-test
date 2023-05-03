import { useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState({x: 0, y: 0})

    const getScroll = () => {
        const top  = window.pageYOffset || document.documentElement.scrollTop;
        const left = window.pageXOffset || document.documentElement.scrollLeft;
        setScroll({x: left, y: top})
    }

    const scrollTo = () => {
        window.scrollTo(0, 0);
    }

    useWindowEvent('scroll', getScroll, null)

    return [
        scroll,
        scrollTo
    ]
} 