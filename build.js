import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, 'pages');
const outDir = path.join(__dirname, 'dist');

async function build() {
  await fs.mkdir(outDir, { recursive: true });
  const files = await fs.readdir(pagesDir);

  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const inputPath = path.join(pagesDir, file);
    const mdxContent = await fs.readFile(inputPath, 'utf8');
    const compiled = await compile(mdxContent, { jsx: true, outputFormat: 'function-body' });
    const { default: Content } = await run(String(compiled), { ...runtime, React });
    const body = renderToStaticMarkup(React.createElement(Content));
    const html = `<!doctype html><html><head><meta charset="utf-8" /></head><body>${body}</body></html>`;
    const outPath = path.join(outDir, file.replace(/\.mdx$/, '.html'));
    await fs.writeFile(outPath, html);
    console.log(`Built ${outPath}`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
