// lib/mergePdfs.js
// Programmatic API for merging PDF files.

import PDFMerger from 'pdf-merger-js';
import fs from 'fs';

async function mergePdfs(inputFiles, outputFile) {
  if (!Array.isArray(inputFiles) || inputFiles.length < 2) {
    throw new Error('Please provide at least two PDF files to merge.');
  }
  if (!outputFile) {
    throw new Error('Please provide an output file path.');
  }
  for (const file of inputFiles) {
    if (!fs.existsSync(file)) {
      throw new Error(`File not found: ${file}`);
    }
  }

  const merger = new PDFMerger();
  for (const file of inputFiles) {
    await merger.add(file);
  }
  await merger.save(outputFile);

  return outputFile;
}

export default mergePdfs;