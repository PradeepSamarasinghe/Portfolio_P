import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

// If the image is in src/assets/images/my.jpeg:
import myPhoto from '../assets/images/my.jpeg'; // or '../assets/images/my.jpeg'
// If you keep it in /public/assets/images/my.jpeg, remove the import and use src="/assets/images/my.jpeg" below.

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  // 👉 Edit avatar size here
  const avatarSize = 'w-6 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          
          {/* 👇 New: Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="p-[5px] rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-emerald-400">
              <img
                // If using /public: src="/assets/images/my.jpeg"
                src={myPhoto}
                alt="Profile"
                loading="lazy"
                decoding="async"
                className={`rounded-full object-cover ring-1 ring-white/10 shadow-xl ${avatarSize}`}
              />
            </div>
          </div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Creative Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting digital experiences with modern technologies and innovative solutions.
            Passionate about creating beautiful, functional, and user-centered applications.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.6, duration: 0.8 }}
            transition={{ delay: 0.01, duration: 0.01 }}
          >
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.01, duration: 0.01 }}
          >
            {[
              { Icon: Github, href: 'https://github.com/PradeepSamarasinghe', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/pradeep-samarasinghe-4b66912a1/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:samarasingjepradeep@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 0.8, y: { repeat: Infinity, duration: 2 } }}
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
