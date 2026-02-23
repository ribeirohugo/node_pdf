// merge.js
// Usage: node merge.js file1.pdf file2.pdf ... -o output.pdf

import PDFMerger from 'pdf-merger-js';
import fs from 'fs';

async function mergePDFs(inputFiles, outputFile) {
  const merger = new PDFMerger();
  for (const file of inputFiles) {
    await merger.add(file);
  }
  await merger.save(outputFile);
  console.info(`Merged PDF saved as ${outputFile}`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const outputIndex = args.indexOf('-o');
  if (outputIndex === -1 || outputIndex === args.length - 1) {
    console.warn('Usage: node merge.js file1.pdf file2.pdf ... -o output.pdf');
    process.exit(1);
  }
  const inputFiles = args.slice(0, outputIndex);
  const outputFile = args[outputIndex + 1];
  if (inputFiles.length < 2) {
    console.warn('Please provide at least two PDF files to merge.');
    process.exit(1);
  }
  for (const file of inputFiles) {
    if (!fs.existsSync(file)) {
      console.error(`File not found: ${file}`);
      process.exit(1);
    }
  }
  return { inputFiles, outputFile };
}

(async() => {
  const { inputFiles, outputFile } = parseArgs();
  await mergePDFs(inputFiles, outputFile);
})();
