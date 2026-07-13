// lib/imagesToPdf.js
// Programmatic API for turning ordered JPG files into a single PDF.

import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function imagesToPdf(inputFiles, outputFile) {
  if (!Array.isArray(inputFiles) || inputFiles.length < 1) {
    throw new Error('Please provide at least one JPG file.');
  }
  if (!outputFile) {
    throw new Error('Please provide an output file path.');
  }
  for (const file of inputFiles) {
    if (!fs.existsSync(file)) {
      throw new Error(`File not found: ${file}`);
    }
  }

  const pdfDoc = await PDFDocument.create();
  for (const file of inputFiles) {
    const jpgBytes = Uint8Array.from(fs.readFileSync(file));
    const jpgImage = await pdfDoc.embedJpg(jpgBytes);
    const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);
    page.drawImage(jpgImage, { x: 0, y: 0, width: jpgImage.width, height: jpgImage.height });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputFile, pdfBytes);

  return outputFile;
}

export default imagesToPdf;
