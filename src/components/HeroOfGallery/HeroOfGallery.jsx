import { useEffect, useRef, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import './HeroOfGallery.css';

const HeroOfGallery = ({
  text = `Extracurricular events are the heartbeat of our school life, sparking creativity, building lifelong friendships, and unlocking hidden talents. They empower students to grow, lead, and experience learning beyond the classroom.`,
  delay = 20,
  animationFrom = { opacity: 0, transform: 'translateY(20px)' },
  animationTo = { opacity: 1, transform: 'translateY(0)' },
  easing = t => (--t) * t * t + 1,
  threshold = 0.3,
  rootMargin = '-50px',
  onComplete,
}) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        //   observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
    useEffect(() => {
    if (!inView) {
      animatedCount.current = 0;
    }
  }, [inView]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async next => {
            await next(animationTo);
            animatedCount.current += 1;
            if (
              animatedCount.current === letters.length &&
              typeof onComplete === 'function'
            ) {
              onComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <section className="hero-gallery-container">
      <p ref={ref} className="hero-gallery-text">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="word-wrapper">
            {word.map((letter, letterIndex) => {
              const index =
                words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
                letterIndex;

              return (
                <animated.span
                  key={index}
                  className="letter"
                  style={springs[index]}
                >
                  {letter}
                </animated.span>
              );
            })}
            <span className="space">&nbsp;</span>
          </span>
        ))}
      </p>
    </section>
  );
};

export default HeroOfGallery;