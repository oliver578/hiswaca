// src/components/hiswaca/CounterUp.tsx

import React, { useState, useEffect, useRef } from 'react';

interface CounterUpProps {
  endValue: number;
  duration?: number;
  decimalPlaces?: number; 
  suffix?: string; 
}

const CounterUp: React.FC<CounterUpProps> = ({ 
  endValue, 
  duration = 2000, 
  decimalPlaces = 0, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const startValue = 0;
  const startTimeRef = useRef(0);

  useEffect(() => {
    // Si la valeur finale est 0, on affiche 0
    if (endValue === 0) return;

    // Fonction d'animation
    const animateCount = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const timeElapsed = timestamp - startTimeRef.current;
      
      // Calcule la progression (entre 0 et 1)
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Calcule la valeur actuelle basée sur la progression
      const currentValue = startValue + (endValue - startValue) * progress;

      setCount(currentValue);

      // Si la progression n'est pas terminée (moins de 1), on continue l'animation
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    // Démarre l'animation
    requestAnimationFrame(animateCount);

    // Fonction de nettoyage
    return () => {
      startTimeRef.current = 0;
    };
  }, [endValue, duration]); // Se réexécute si endValue ou duration changent

  // Fonction pour formater le nombre (décimales et séparateur de milliers)
  const formatNumber = (num: number) => {
    return num.toLocaleString('fr-FR', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
  };

  return (
    <>{formatNumber(count)}{suffix}</>
  );
};

export default CounterUp;