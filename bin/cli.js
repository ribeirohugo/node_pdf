#!/usr/bin/env node
// bin/cli.js
// Usage: node merge.js file1.pdf file2.pdf ... -o output.pdf

import mergePdfs from '../lib/mergePdfs.js';

function parseArgs() {
  const args = process.argv.slice(2);
  const outputIndex = args.indexOf('-o');
  if (outputIndex === -1 || outputIndex === args.length - 1) {
    console.warn('Usage: node merge.js file1.pdf file2.pdf ... -o output.pdf');
    process.exit(1);
  }
  const inputFiles = args.slice(0, outputIndex);
  const outputFile = args[outputIndex + 1];
  return { inputFiles, outputFile };
}

(async() => {
  const { inputFiles, outputFile } = parseArgs();
  try {
    await mergePdfs(inputFiles, outputFile);
    console.info(`Merged PDF saved as ${outputFile}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
