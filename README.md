# Node PDF

This project merges multiple PDF files into a single PDF using Node.js.

## 1. Prerequisites
- Node.js (latest LTS recommended)
- npm

## 2. Features

### 2.1. PDF Merge
This tool merges multiple PDF files into a single PDF using Node.js.

Place your PDF files in the project directory. Run:

```
node merge.js file1.pdf file2.pdf ... -o output.pdf
```

- Replace `file1.pdf file2.pdf ...` with the PDFs you want to merge.
- `-o output.pdf` specifies the output file name.

#### 2.1.1. Example
```
node merge.js file1.pdf file2.pdf c.pdf -o merged.pdf
```

#### 2.1.2. Notes
- At least two input PDF files are required.
- The script checks if input files exist before merging.
