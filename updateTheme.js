const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'client', 'src');

const replacements = [
  { regex: /#E11D48/g, replacement: '#FF4500' }, // Primary Pink to Orange Red
  { regex: /#E91E8C/g, replacement: '#FF4500' }, // Admin Pink to Orange Red
  { regex: /#FDA4AF/g, replacement: '#FF8C66' }, // Light Pink to Light Orange
  { regex: /#be1238/g, replacement: '#CC3700' }, // Hover Pink to Hover Orange
  { regex: /#FFE4E6/g, replacement: '#FFDED6' }, // Very Light Pink to Very Light Orange
  { regex: /bg-pink-100/g, replacement: 'bg-orange-100' },
  { regex: /text-pink-600/g, replacement: 'text-orange-600' },
  { regex: /text-pink-500/g, replacement: 'text-orange-500' },
  { regex: /bg-pink-50/g, replacement: 'bg-orange-50' },
  { regex: /text-pink-700/g, replacement: 'text-orange-700' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      replacements.forEach(r => {
        content = content.replace(r.regex, r.replacement);
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated colors in: ${filePath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log('Color theme update complete!');
