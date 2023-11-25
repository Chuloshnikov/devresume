'use client'
import { motion, useAnimation } from 'framer-motion';
import ServiceCard from "./ServiceCard";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedServiceCard = ({ data, index }) => {
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
      <ServiceCard data={data} />
    </motion.div>
  );
};

export default AnimatedServiceCard;