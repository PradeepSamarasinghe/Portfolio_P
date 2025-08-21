import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      Icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      Icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces with attention to detail and user experience.',
    },
    {
      Icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and implementing creative solutions.',
    },
    {
      Icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating ideas clearly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-80"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl backdrop-blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
              My journey began with curiosity about how things work on the web, and has evolved into a 
              career focused on building exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern web technologies including React, TypeScript, Node.js, and various 
              frameworks. I believe in writing clean, maintainable code and creating designs that not 
              only look great but also provide intuitive user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.Icon size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;