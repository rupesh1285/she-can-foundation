const fs = require('fs');

async function extractColors() {
  const Jimp = (await import('jimp')).default;
  try {
    const image = await Jimp.read('client/public/images/logo.png');
    console.log("Image dimensions:", image.bitmap.width, "x", image.bitmap.height);
    
    // Sample a few pixels from the logo
    // Usually the logo background is dominant, or the logo icon color
    // Let's print out a 5x5 grid of pixels
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    const colors = new Set();
    
    for (let x = 0; x < w; x += Math.floor(w/10)) {
      for (let y = 0; y < h; y += Math.floor(h/10)) {
        const hex = image.getPixelColor(x, y).toString(16).padStart(8, '0');
        // ignore white and transparent and black
        const r = parseInt(hex.substring(0,2), 16);
        const g = parseInt(hex.substring(2,4), 16);
        const b = parseInt(hex.substring(4,6), 16);
        if (r > 240 && g > 240 && b > 240) continue; // nearly white
        if (r < 15 && g < 15 && b < 15) continue; // nearly black
        if (hex.endsWith('00')) continue; // fully transparent
        
        colors.add(`#${hex.substring(0,6)}`);
      }
    }
    
    console.log("Sampled colors:", Array.from(colors));
  } catch (e) {
    console.error(e);
  }
}
extractColors();
