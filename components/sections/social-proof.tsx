'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    content: "HealthSync AI has completely transformed how I approach my health. The personalized insights helped me identify sleep patterns that were affecting my energy levels, and the suggestions for improvement were spot on.",
    author: {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    }
  },
  {
    id: 2,
    content: "As someone with chronic conditions, having all my health data in one place with AI-powered analysis has been game-changing. The early warning signals helped me prevent a major flare-up last month.",
    author: {
      name: "Michael Chang",
      role: "Healthcare Professional",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  },
  {
    id: 3,
    content: "The integration with my existing devices was seamless, and the dashboard provides insights I never thought possible. I've been able to optimize my workout routine based on real data rather than guesswork.",
    author: {
      name: "Emma Wilson",
      role: "Marathon Runner",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  },
  {
    id: 4,
    content: "I was skeptical about AI health platforms, but HealthSync AI surprised me with its accuracy. The nutrition recommendations alone have helped me lose 15 pounds while maintaining my energy levels.",
    author: {
      name: "David Rodriguez",
      role: "Weight Loss Success Story",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  }
];

const companyLogos = [
  {
    name: "Mayo Clinic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mayo_Clinic_wordmark.svg/320px-Mayo_Clinic_wordmark.svg.png"
  },
  {
    name: "Cleveland Clinic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cleveland_Clinic_logo.svg/320px-Cleveland_Clinic_logo.svg.png"
  },
  {
    name: "Blue Cross Blue Shield",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Blue_Cross_Blue_Shield_Association_logo.svg/320px-Blue_Cross_Blue_Shield_Association_logo.svg.png"
  },
  {
    name: "Humana",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Humana_logo_2011.svg/320px-Humana_logo_2011.svg.png"
  },
  {
    name: "Kaiser Permanente",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kaiser_Permanente_logo.svg/320px-Kaiser_Permanente_logo.svg.png"
  },
  {
    name: "Fitbit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Fitbit_logo.svg/320px-Fitbit_logo.svg.png"
  }
];

export default function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="text-gradient">Thousands</span> of Users
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See what our users are saying about how HealthSync AI has transformed their approach to health management.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          style={{ y }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.author.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-sm mb-16"
        >
          <h3 className="text-center font-heading font-semibold text-xl mb-8">Trusted by Leading Healthcare Providers</h3>
          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              {companyLogos.map((company) => (
                <div key={company.name} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img src={company.logo} alt={company.name} className="h-10 md:h-12 object-contain" />
                </div>
              ))}
              {companyLogos.map((company) => (
                <div key={`repeat-${company.name}`} className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img src={company.logo} alt={company.name} className="h-10 md:h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="px-6 py-12 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3 text-white">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Join thousands of satisfied users today</h3>
              <p className="mb-0 text-white/90">Start your journey to better health with personalized AI insights.</p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <motion.button
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}