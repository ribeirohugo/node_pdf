# Node PDF

This project merges multiple PDF files into a single PDF using Node.js.

It can be used either as a command-line tool or imported as a library in another Node.js application.

## 1. Prerequisites
- Node.js (latest LTS recommended)
- npm

## 2. Features

### 2.1. PDF Merge

#### 2.1.1. CLI usage
Place your PDF files in the project directory. Run:

```
node merge.js file1.pdf file2.pdf ... -o output.pdf
```

- Replace `file1.pdf file2.pdf ...` with the PDFs you want to merge.
- `-o output.pdf` specifies the output file name.

Once installed as a dependency, the same CLI is also available via the `node-pdf-merge` bin:

```
npx node-pdf-merge file1.pdf file2.pdf ... -o output.pdf
```

##### Example
```
node merge.js file1.pdf file2.pdf c.pdf -o merged.pdf
```

##### Notes
- At least two input PDF files are required.
- The script checks if input files exist before merging.

#### 2.1.2. Programmatic usage
Install it in your project (`npm install node_pdf`, or `npm install <git-url>`), then:

```js
import mergePdfs from 'node_pdf';

await mergePdfs(['file1.pdf', 'file2.pdf', 'c.pdf'], 'merged.pdf');
```

`mergePdfs(inputFiles, outputFile)` returns a promise resolving to the output file path, and
throws an `Error` (rather than exiting the process) if fewer than two input files are given,
an input file doesn't exist, or no output file is specified — so callers can `try`/`catch` it.
