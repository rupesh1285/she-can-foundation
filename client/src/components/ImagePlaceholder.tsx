import React from 'react';
import { Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  path: string;
  ratio?: '16:9' | '4:3' | '1:1' | 'auto';
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  label, 
  path, 
  ratio = 'auto',
  className = ''
}) => {
  const ratioClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    'auto': 'h-full w-full'
  }[ratio];

  return (
    <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1A0A12] to-[#3a1528] text-white p-6 overflow-hidden rounded-[2rem] border-2 border-dashed border-[#FF6BB5]/50 group ${ratioClass} ${className}`}>
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#E91E8C] rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FFD6EC] shadow-inner border border-white/20 mb-2">
          <Camera size={32} />
        </div>
        
        <h4 className="font-bold text-sm md:text-base tracking-wide text-white uppercase max-w-xs leading-snug">
          {label}
        </h4>
        
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse"></span>
          {path}
        </div>
      </div>
    </div>
  );
};
