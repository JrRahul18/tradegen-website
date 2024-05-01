import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const StatsAnimation = ({ target }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        observer.disconnect();
      }
      setVisible(entry.isIntersecting);
      // observer.disconnect();
    }, {threshold: 1});

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: visible ? target : 0 },
    // delay: 500,
    config: { duration: 2500 },
    immediate: !visible,
  });
  return (
    <div>
      <animated.span ref={ref}>
        {number.to((val) => Math.ceil(val))}
      </animated.span>
    </div>
  );
};

export default StatsAnimation;
