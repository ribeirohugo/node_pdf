# Node PDF

This project merges multiple PDF files, or converts ordered JPG files into a single PDF, using Node.js.

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
import { mergePdfs } from 'node_pdf';

await mergePdfs(['file1.pdf', 'file2.pdf', 'c.pdf'], 'merged.pdf');
```

`mergePdfs(inputFiles, outputFile)` returns a promise resolving to the output file path, and
throws an `Error` (rather than exiting the process) if fewer than two input files are given,
an input file doesn't exist, or no output file is specified — so callers can `try`/`catch` it.

### 2.2. Images to PDF

#### 2.2.1. CLI usage
Place your JPG files in the project directory. Run:

```
node images-to-pdf.js file1.jpg file2.jpg ... -o output.pdf
```

- List the JPGs in `file1.jpg file2.jpg ...` in the order you want them to appear as pages.
- `-o output.pdf` specifies the output file name.

Once installed as a dependency, the same CLI is also available via the `node-images-to-pdf` bin:

```
npx node-images-to-pdf file1.jpg file2.jpg ... -o output.pdf
```

##### Example
```
node images-to-pdf.js page1.jpg page2.jpg page3.jpg -o document.pdf
```

##### Notes
- At least one input JPG file is required.
- Each image becomes its own page, sized to match the image's dimensions.
- The script checks if input files exist before converting.

#### 2.2.2. Programmatic usage
```js
import { imagesToPdf } from 'node_pdf';

await imagesToPdf(['page1.jpg', 'page2.jpg', 'page3.jpg'], 'document.pdf');
```

`imagesToPdf(inputFiles, outputFile)` returns a promise resolving to the output file path, and
throws an `Error` if no input files are given, an input file doesn't exist, or no output file
is specified.
