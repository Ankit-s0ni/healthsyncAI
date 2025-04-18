'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ActivitySquare, 
  Brain, 
  HeartPulse, 
  BarChart3, 
  Microscope,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: <ActivitySquare className="h-10 w-10 text-primary" />,
    title: 'Health Monitoring',
    description: 'Track vital signs, sleep patterns, and activity levels in real-time with seamless device integration.'
  },
  {
    icon: <Brain className="h-10 w-10 text-secondary" />,
    title: 'AI Health Insights',
    description: 'Our advanced AI analyzes your health data to provide personalized recommendations and early warning signs.'
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-accent" />,
    title: 'Personalized Plans',
    description: 'Receive customized health plans based on your unique profile, goals, and historical data.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: 'Progress Tracking',
    description: 'Visualize your health journey with intuitive charts and celebrate milestones along the way.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm">
              Powerful Features
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything You Need for <span className="text-gradient">Complete Health Management</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our comprehensive platform combines cutting-edge AI with intuitive design to give you complete control over your health journey.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary via-secondary to-accent p-[1px] rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <Microscope className="h-24 w-24 text-accent mx-auto md:mx-0" />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-heading text-2xl font-bold mb-4">Advanced Health Insights Backed by Science</h3>
                <p className="text-gray-600 mb-6">Our algorithms are developed by leading medical researchers and data scientists to ensure you get the most accurate and helpful health recommendations.</p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                    <Zap className="h-4 w-4 mr-2 text-accent" />
                    <span>Predictive Analytics</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                    <Zap className="h-4 w-4 mr-2 text-accent" />
                    <span>Medical-Grade Accuracy</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                    <Zap className="h-4 w-4 mr-2 text-accent" />
                    <span>Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}