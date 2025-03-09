// src/components/BenefitsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline workflows to save time and resources.',
  },
  {
    title: 'Cost Reduction',
    description: 'Minimize operational costs through intelligent automation and optimization.',
  },
  {
    title: '24/7 Availability',
    description: 'Provide round-the-clock service to your customers with AI-powered solutions.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Easily scale your AI implementation as your business grows.',
  },
  {
    title: 'Enhanced Accuracy',
    description: 'Reduce human error and improve consistency in your operations.',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Gain valuable insights from voice and text data analysis.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the advantages of working with a leading AI voice and automation provider
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;