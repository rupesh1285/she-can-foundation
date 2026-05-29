import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Heart, Laptop, Users, Shield } from 'lucide-react';

export const Programs = ({ isPreview = false }) => {
  const programs = [
    {
      title: "Education & Skill Development",
      description: "Providing quality education and vocational training to underprivileged women to build sustainable, independent livelihoods.",
      icon: <Laptop size={32} />,
      imageLabel: "PROGRAM — Women in education/training session",
      imagePath: "/images/A volunteer teaching students.avif",
      activities: ["Vocational training", "Digital education", "Scholarship support", "Livelihood programs"],
      stat: null
    },
    {
      title: "Healthcare & Menstrual Hygiene",
      description: "Promoting healthcare access, menstrual hygiene awareness, and distributing sanitary pads and dignity kits to girls across India.",
      icon: <Heart size={32} />,
      imageLabel: "PROGRAM — Sanitary pad distribution drive photo",
      imagePath: "/images/Pad Distribution.png",
      activities: ["Free sanitary pad distribution", "Menstrual hygiene workshops", "Dignity kit drives", "School awareness programs"],
      stat: "1,20,000+ girls reached"
    },
    {
      title: "Digital Literacy",
      description: "Teaching essential digital skills to bridge the technology gap for women across India in the modern, connected economy.",
      icon: <Shield size={32} />,
      imageLabel: "PROGRAM — Women learning on computers/phones",
      imagePath: "/images/new image 5.jpeg",
      activities: ["Computer training", "Mobile literacy", "Online safety workshops", "Digital entrepreneurship"],
      stat: null
    },
    {
      title: "Community Programs",
      description: "Building strong support networks, self-help groups, and community-driven initiatives for lasting social impact.",
      icon: <Users size={32} />,
      imageLabel: "PROGRAM — Community gathering or self-help group",
      imagePath: "/images/Kids and mother with food.avif",
      activities: ["Self-help groups", "Community kitchens", "Cloth donation drives", "Awareness campaigns"],
      stat: null
    }
  ];

  const displayPrograms = isPreview ? programs.slice(0, 4) : programs;

  return (
    <section className={`py-24 ${isPreview ? 'bg-white' : 'bg-[#FDFBF7] pt-32'}`}>
      <div className="container mx-auto px-4 md:px-8">
        
        {!isPreview && (
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0F172A] mb-6">Creating Impact Through Action</h1>
            <p className="text-xl text-gray-600">Our structured initiatives are designed to provide immediate relief and long-term empowerment.</p>
          </div>
        )}

        {isPreview && (
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-serif font-bold text-[#0F172A]">Our Programs</h2>
            <Link to="/programs" className="text-[#FF4500] font-bold hover:underline hidden md:block">View All Programs &rarr;</Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {displayPrograms.map((prog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF4500]/20 transition-all duration-500"
            >
              <ImagePlaceholder 
                label={prog.imageLabel}
                path={prog.imagePath}
                ratio="16:9"
                className="rounded-b-none border-b-0"
              />
              <div className="p-8">
                <div className="w-14 h-14 bg-[#FFDED6] text-[#FF4500] rounded-2xl flex items-center justify-center mb-6">
                  {prog.icon}
                </div>
                <h3 className="text-3xl font-bold font-serif text-[#0F172A] mb-4">{prog.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{prog.description}</p>
                
                {!isPreview && (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-[#0F172A] mb-4 uppercase text-sm tracking-wider">Key Activities:</h4>
                    <ul className="space-y-3">
                      {prog.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 shrink-0"></span>
                          {act}
                        </li>
                      ))}
                    </ul>
                    {prog.stat && (
                      <div className="mt-6 inline-block px-4 py-2 bg-[#0F172A] text-white font-bold rounded-lg text-sm">
                        ⭐ {prog.stat}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {isPreview && (
          <div className="mt-12 text-center md:hidden">
            <Link to="/programs" className="inline-block px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-[#FF4500]">View All Programs</Link>
          </div>
        )}

        {!isPreview && (
          <div className="mt-24 text-center bg-[#FFDED6] p-12 rounded-[3rem]">
            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6">Support our programs</h2>
            <a href="https://shecanfoundation.org/donate" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#FF4500] text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-shadow">
              Donate Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
