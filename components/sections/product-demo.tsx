'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { Play, Heart, Activity, Brain, BarChart3 } from 'lucide-react';

// Sample data for the demo charts
const healthData = [
  { name: 'Mon', sleep: 7.2, steps: 8400, heartRate: 68 },
  { name: 'Tue', sleep: 6.8, steps: 10200, heartRate: 72 },
  { name: 'Wed', sleep: 7.5, steps: 9100, heartRate: 70 },
  { name: 'Thu', sleep: 8.1, steps: 7600, heartRate: 65 },
  { name: 'Fri', sleep: 6.5, steps: 11400, heartRate: 75 },
  { name: 'Sat', sleep: 7.8, steps: 12500, heartRate: 69 },
  { name: 'Sun', sleep: 8.3, steps: 9800, heartRate: 67 },
];

export default function ProductDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="demo" className="py-20 bg-white overflow-hidden">
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
              Interactive Demo
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See HealthSync<span className="text-accent">AI</span> in Action
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience how our platform helps you monitor, analyze, and improve your health with personalized insights.
          </motion.p>
        </div>
        
        <div ref={containerRef} className="relative">
          {/* Main Dashboard Demo */}
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-xl">Health Dashboard</h3>
                <div className="flex items-center space-x-3">
                  <span className="text-sm">John Smith</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    JS
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 font-medium">Heart Rate</span>
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-3xl font-bold">72</span>
                      <span className="text-gray-500 ml-1">bpm</span>
                    </div>
                    <div className="text-xs text-green-500 flex items-center">
                      <span>↑ 2%</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 font-medium">Daily Steps</span>
                    <Activity className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-3xl font-bold">8,547</span>
                      <span className="text-gray-500 ml-1">steps</span>
                    </div>
                    <div className="text-xs text-green-500 flex items-center">
                      <span>↑ 12%</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 font-medium">Sleep Score</span>
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-3xl font-bold">85</span>
                      <span className="text-gray-500 ml-1">/100</span>
                    </div>
                    <div className="text-xs text-red-500 flex items-center">
                      <span>↓ 5%</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-medium">Weekly Health Trends</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                      <span className="text-xs text-gray-500">Sleep</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-secondary mr-1"></div>
                      <span className="text-xs text-gray-500">Steps</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-accent mr-1"></div>
                      <span className="text-xs text-gray-500">Heart Rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="sleep" 
                        stroke="#00A6B4" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="steps" 
                        stroke="#6366F1"
                        strokeWidth={2} 
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="heartRate" 
                        stroke="#A855F7" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-medium">Personalized Insights</h4>
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Your sleep quality has improved by 15% over the last month.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Your stress levels tend to increase on Thursdays - consider scheduling breaks.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">Based on your activity patterns, we recommend adding strength training on Tuesdays.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-medium">Upcoming Goals</h4>
                    <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      3 Active Goals
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-secondary/10 p-2 rounded-full mr-3">
                          <Activity className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">10,000 steps daily</p>
                          <div className="w-32 h-1.5 bg-gray-200 rounded-full mt-1">
                            <div className="h-1.5 bg-secondary rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">85%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">8 hours sleep</p>
                          <div className="w-32 h-1.5 bg-gray-200 rounded-full mt-1">
                            <div className="h-1.5 bg-primary rounded-full" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">60%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-accent/10 p-2 rounded-full mr-3">
                          <Heart className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Reduce resting HR</p>
                          <div className="w-32 h-1.5 bg-gray-200 rounded-full mt-1">
                            <div className="h-1.5 bg-accent rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Video demo button */}
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2 rounded-full px-6 py-6"
            >
              <div className="bg-primary rounded-full p-2 mr-1">
                <Play className="h-4 w-4 text-white" fill="white" />
              </div>
              Watch Product Demo Video
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}