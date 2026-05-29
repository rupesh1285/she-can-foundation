import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export const InstagramSection = () => {
  const posts = [
    "/images/insta-1.png",
    "/images/insta-2.png",
    "/images/insta-3.png",
    "/images/insta-4.png",
    "/images/insta-5.png",
    "/images/insta-6.png",
    "/images/insta-7.png",
    "/images/insta-8.png",
    "/images/insta-9.png",
    "/images/insta-10.png",
    // Duplicate for seamless marquee
    "/images/insta-1.png",
    "/images/insta-2.png",
    "/images/insta-3.png",
    "/images/insta-4.png",
    "/images/insta-5.png",
    "/images/insta-6.png",
    "/images/insta-7.png",
    "/images/insta-8.png",
    "/images/insta-9.png",
    "/images/insta-10.png",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1A1A2E] mb-4">Our Journey on Instagram</h2>
            <p className="text-lg text-gray-600 font-medium">Follow our daily impact and stories @shecanfoundation.ngo</p>
          </div>
          <a 
            href="https://www.instagram.com/shecanfoundation.ngo" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#FF4500] to-[#FF6BB5] hover:shadow-[0_10px_25px_-5px_rgba(233,30,140,0.4)] transition-all hover:scale-105 shrink-0"
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
            <a
              key={index}
              href="https://www.instagram.com/shecanfoundation.ngo"
              target="_blank"
              rel="noreferrer"
              className="relative w-[280px] md:w-[350px] aspect-square rounded-3xl overflow-hidden shrink-0 cursor-pointer shadow-sm group/card block"
            >
              <img src={post} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A12]/90 via-[#FF4500]/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3"
                >
                  <Instagram size={48} className="text-white" />
                  <span className="text-white font-bold tracking-wide text-lg">View our page</span>
                </motion.div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
