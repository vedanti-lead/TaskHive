import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-darkPrimary-600 dark:to-darkPrimary-500 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative px-6 py-16 md:py-20 md:px-12 lg:px-16 overflow-hidden">
            {/* Background hexagons */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 150 + 50}px`,
                  }}
                  initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                  animate={{ 
                    opacity: 0.5, 
                    scale: [0.7, 1, 0.7], 
                    rotate: 360,
                    x: [10, -10, 10],
                    y: [10, -10, 10],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.5,
                  }}
                >
                  ⬡
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Join the Hive?
                </h2>
                <p className="text-xl text-white/80 max-w-2xl">
                  Start your journey today and become part of a thriving community dedicated to personal and professional growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth?signup=true"
                  className="btn bg-white text-primary-600 hover:bg-gray-100 group flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/auth"
                  className="btn bg-transparent text-white border border-white hover:bg-white/10"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;