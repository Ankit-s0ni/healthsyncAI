'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for individuals just starting their health journey',
    monthlyPrice: 9.99,
    annualPrice: 99.99,
    features: [
      'Basic health monitoring',
      'Connect up to 2 devices',
      'Weekly health reports',
      'Basic AI insights',
      'Email support',
    ],
    notIncluded: [
      'Advanced analytics',
      'Personalized recommendations',
      'Unlimited device connections',
      'Priority support',
    ],
    buttonText: 'Get Started',
    isPopular: false,
  },
  {
    name: 'Premium',
    description: 'Ideal for health-conscious individuals seeking detailed insights',
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    features: [
      'Advanced health monitoring',
      'Connect up to 5 devices',
      'Daily health reports',
      'Advanced AI insights',
      'Personalized recommendations',
      'Priority email support',
      'Health trend analysis',
    ],
    notIncluded: [
      'Custom health algorithms',
      'Family account management',
    ],
    buttonText: 'Choose Premium',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    description: 'For healthcare providers and organizations managing multiple users',
    monthlyPrice: 49.99,
    annualPrice: 499.99,
    features: [
      'Complete health ecosystem',
      'Unlimited device connections',
      'Real-time health alerts',
      'Custom health algorithms',
      'Advanced AI insights & predictions',
      'Team management features',
      'Dedicated account manager',
      'API access for integration',
      'HIPAA compliant data storage',
    ],
    notIncluded: [],
    buttonText: 'Contact Sales',
    isPopular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-white">
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
              Pricing
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Choose the Perfect Plan for Your <span className="text-gradient">Health Journey</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            All plans include a 14-day free trial. No credit card required.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium flex items-center ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <Badge variant="outline" className="ml-2 bg-green-100 text-green-800 border-green-200 text-xs">
                Save 20%
              </Badge>
            </span>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`relative rounded-xl border ${plan.isPopular ? 'border-primary shadow-lg' : 'border-gray-200'} overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.isPopular ? 'bg-primary/5' : 'bg-white'}`}>
                <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6 h-12">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="font-heading font-bold text-4xl">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-1">/ {isAnnual ? 'year' : 'month'}</span>
                </div>
                
                {plan.isPopular ? (
                  <ButtonGradient className="w-full mb-6">
                    {plan.buttonText}
                  </ButtonGradient>
                ) : (
                  <Button variant="outline" className="w-full mb-6">
                    {plan.buttonText}
                  </Button>
                )}
                
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-medium text-sm mb-4">What's included:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-sm mb-4 text-gray-500">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <X className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="font-heading font-semibold text-xl mb-2">Need a custom solution?</h3>
              <p className="text-gray-600">Our enterprise team can work with you to create a tailored plan for your organization's specific needs.</p>
            </div>
            <div className="md:w-1/3">
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            All plans include HIPAA-compliant data storage, industry-standard encryption, and a 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}