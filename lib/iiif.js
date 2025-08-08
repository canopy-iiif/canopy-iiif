import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export async function generateFromCollection(collection, outDir) {
  await fs.mkdir(outDir, { recursive: true });
  const items = collection.items || [];
  for (const item of items) {
    const label = getLabel(item.label);
    const body = renderToStaticMarkup(
      React.createElement('div', null, React.createElement('h1', null, label))
    );
    const html = `<!doctype html><html><head><meta charset="utf-8" /></head><body>${body}</body></html>`;
    const slug = getSlug(item);
    await fs.writeFile(path.join(outDir, `${slug}.html`), html);
    console.log(`Generated ${slug}.html`);
  }
}

function getLabel(labelObj) {
  if (!labelObj) return 'Untitled';
  const values = labelObj.en || labelObj.none || [];
  return values[0] || 'Untitled';
}

function getSlug(item) {
  if (item.id) {
    try {
      const url = new URL(item.id);
      const parts = url.pathname.split('/').filter(Boolean);
      return parts.pop();
    } catch {
      return item.id;
    }
  }
  return getLabel(item.label).toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

async function loadCollection(source) {
  if (source.startsWith('http://') || source.startsWith('https://')) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`Failed to fetch collection: ${res.status}`);
    return res.json();
  }
  const raw = await fs.readFile(source, 'utf8');
  return JSON.parse(raw);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const source = process.argv[2];
  if (!source) {
    console.error('Usage: node lib/iiif.js <collection.json> [outDir]');
    process.exit(1);
  }
  const outDir = process.argv[3] || path.join(process.cwd(), 'dist', 'iiif');
  const collection = await loadCollection(source);
  await generateFromCollection(collection, outDir);
}
