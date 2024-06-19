import { useEffect, useRef } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = scrollRef.current;
    const observer = new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        callback();
      }
    });

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [scrollRef, callback]);

  return scrollRef;
};
export default useInfiniteScroll;
