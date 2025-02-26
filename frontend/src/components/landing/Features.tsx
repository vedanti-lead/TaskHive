import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  CheckSquare, 
  Globe, 
  Trophy, 
  Award, 
  Users, 
  BookHeart, 
  LineChart, 
  Building 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-darkPrimary-900 text-primary-600 dark:text-darkPrimary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "AI-Powered Goals",
      description: "Personalized goal tracking with professional dashboard and progress visualization.",
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Task Section",
      description: "Daily tasks assigned by teachers, evaluated for task points based on goal templates.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Board",
      description: "Community-driven tasks offering points, cash prizes, internships, and startup opportunities.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Competition Board",
      description: "Badge-level competitions where higher-level users can host their own challenges.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Badge System",
      description: "Merit points exchangeable for coins or badge upgrades, unlocking advanced features.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentorship Program",
      description: "One-on-one mentorship from higher badge users with a star rating system.",
    },
    {
      icon: <BookHeart className="h-6 w-6" />,
      title: "Smart Journaling",
      description: "Journaling with sentiment analysis to detect burnout and provide AI recommendations.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Leaderboard",
      description: "Rankings by badge level and competition wins to showcase top performers.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Student Chapters",
      description: "Integration with student chapters for collaborative growth and community building.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Complete Ecosystem for Growth
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Task Hive combines AI-powered goal setting, community tasks, and mentorship
            to create a hive-like connected ecosystem for personal and professional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;