'use client';
import { useEffect, useState, useRef } from 'react';

const NumberIncrement = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const numberRef = useRef(null);

  const incrementNumber = () => {
    let increment = Math.ceil(targetNumber / 100);
    let current = 0;

    const interval = setInterval(() => {
      if (current >= targetNumber) {
        clearInterval(interval);
      } else {
        current += increment;
        setCurrentNumber(current);
      }
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          incrementNumber();
        }
      },
      { threshold: 1 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [hasStarted]);

  return <span ref={numberRef}>{currentNumber}</span>;
};

export default NumberIncrement;
