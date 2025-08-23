import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Database, Globe, Palette, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python','Java', 'REST APIs'],
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'AppWrite'],
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Figma', 'Canva'],
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Vite', 'Progressive Web Apps'],
    },
    {
      icon: Award,
      title: 'Tools & Methodologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Android Studio'],
    },
  ];

  const certificates = [
    {
      title: 'AWS Computing Solutions',
      issuer: 'Amazon Web Services',
      date: '2025',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Introduction to Azure Virtual Machines',
      issuer: 'Microsoft',
      date: '2025',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'AWS File System in the Cloud',
      issuer: 'Amazon Web Services',
      date: '2025',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'AI / ML Engineer Stage 1',
      issuer: 'Sri Lanka Institute of Information Technology',
      date: '2025',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional certifications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.01, duration: 0.01 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:text-purple-300 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Certificates</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.01, duration: 0.01 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                <Award size={48} className="text-emerald-400" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white mb-1 text-sm">{cert.title}</h4>
                <p className="text-emerald-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;