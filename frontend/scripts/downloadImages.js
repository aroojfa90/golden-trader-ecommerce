const fs = require('fs');
const https = require('https');
const path = require('path');

// Create directories if they don't exist
const imagesDir = path.join(process.cwd(), 'public', 'images', 'products');
fs.mkdirSync(imagesDir, { recursive: true });

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        const filePath = path.join(imagesDir, filename);
        const writeStream = fs.createWriteStream(filePath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${filename} (Status: ${response.statusCode})`);
      }
    }).on('error', reject);
  });
};

// Just download the ST London powder image
const imageToDownload = {
  url: 'https://dummyimage.com/600x600/000/fff.jpg&text=ST+London+Powder',
  filename: 'st-london-powder.jpg'
};

async function downloadImage() {
  try {
    await downloadImage(imageToDownload.url, imageToDownload.filename);
    console.log('Download completed!');
  } catch (error) {
    console.error('Error downloading image:', error);
  }
}

downloadImage(); 