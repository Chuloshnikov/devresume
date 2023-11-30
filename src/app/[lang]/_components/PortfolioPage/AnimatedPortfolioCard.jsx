'use client'
import { motion, useAnimation } from 'framer-motion';
import PortfolioCard from "./PortfolioCard";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedPortfolioCard = ({ data, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { delay: index * 0.2 }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      <PortfolioCard data={data} />
    </motion.div>
  );
};

export default AnimatedPortfolioCard;