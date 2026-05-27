import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';

export const InstagramSection = () => {
  const posts = [
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    // Duplicate for seamless marquee
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0F172A] mb-4">Our Journey on Instagram</h2>
            <p className="text-lg text-gray-600 font-medium">Follow our daily impact and stories @shecanfoundation.ngo</p>
          </div>
          <a 
            href="https://www.instagram.com/shecanfoundation.ngo" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#E11D48] to-[#FDA4AF] hover:shadow-[0_10px_25px_-5px_rgba(233,30,140,0.4)] transition-all hover:scale-105 shrink-0"
          >
            <Instagram size={20} />
            Follow Us
          </a>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-x-hidden group pb-8">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-4 px-2"
        >
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative w-[280px] md:w-[350px] aspect-square rounded-3xl overflow-hidden shrink-0 cursor-pointer shadow-sm group/card"
            >
              <img src={post} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#E11D48]/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3"
                >
                  <Heart size={48} className="text-white fill-white animate-pulse" />
                  <span className="text-white font-bold tracking-wide">View Post</span>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
