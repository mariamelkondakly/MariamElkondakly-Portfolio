import { useEffect, useRef, useState } from "react";

export const SkillBar = ({ level }) => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-white h-2 rounded-full overflow-hidden" ref={barRef}>
      <div
        className={`h-2 rounded-full parent ${
          visible ? "animate-grow" : "scale-x-0"
        }`}
        style={{
          width: level + "%",
          transformOrigin: "left",
        }}
      />
    </div>
  );
};
