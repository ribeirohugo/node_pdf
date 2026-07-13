#!/usr/bin/env node
// bin/images-to-pdf-cli.js
// Usage: node images-to-pdf.js file1.jpg file2.jpg ... -o output.pdf

import imagesToPdf from '../lib/imagesToPdf.js';

function parseArgs() {
  const args = process.argv.slice(2);
  const outputIndex = args.indexOf('-o');
  if (outputIndex === -1 || outputIndex === args.length - 1) {
    console.warn('Usage: node images-to-pdf.js file1.jpg file2.jpg ... -o output.pdf');
    process.exit(1);
  }
  const inputFiles = args.slice(0, outputIndex);
  const outputFile = args[outputIndex + 1];
  return { inputFiles, outputFile };
}

(async () => {
  const { inputFiles, outputFile } = parseArgs();
  try {
    await imagesToPdf(inputFiles, outputFile);
    console.info(`PDF saved as ${outputFile}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
