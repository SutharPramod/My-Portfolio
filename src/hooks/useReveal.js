import { useRef, useState, useEffect } from "react";
export default function useReveal(onChange) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        if (isVisible) setVisible(true);
        if (typeof onChange === "function")
          onChange(isVisible, entry.target, entry.intersectionRatio);
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
        rootMargin: "-30% 0px -40% 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [onChange]);

  return [ref, visible];
}
