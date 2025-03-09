// src/components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Voice Assistants',
    description: 'Custom-built voice assistants powered by advanced AI to handle customer inquiries and support.',
    icon: '🎯',
  },
  {
    title: 'Process Automation',
    description: 'Streamline your business operations with intelligent automation solutions.',
    icon: '⚡',
  },
  {
    title: 'Natural Language Processing',
    description: 'Transform voice and text data into actionable insights using cutting-edge NLP.',
    icon: '🔍',
  },
  {
    title: 'Custom Integration',
    description: 'Seamlessly integrate AI solutions with your existing business systems.',
    icon: '🔄',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive AI solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;