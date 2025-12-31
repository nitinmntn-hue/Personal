import { useEffect, useRef } from "react";

const FadeInSection = ({ children, className = "", direction = "left" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`fade-section fade-${direction} ${className}`}
    >
      {children}
    </section>
  );
};

export default FadeInSection;