import { useCallback, useEffect, useRef, useState } from 'react';

const useHover = (): [React.RefObject<HTMLElement>, boolean] => {
  const [isState, setIsState] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleMouseOver = useCallback(() => setIsState(true), []);
  const handleMouseOut = useCallback(() => setIsState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, isState];
};

export default useHover;
