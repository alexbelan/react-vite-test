import { useEffect, useState } from 'react';

function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}

export const useViewportSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const getViewpostSize = (e) => {
        setWidth(e.target.innerWidth)
        setHeight(e.target.innerHeight)
    }

    useWindowEvent('resize', getViewpostSize, null)

    return {
        width,
        height
    }
} 