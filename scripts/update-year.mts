import fs from 'node:fs/promises';
import path from 'node:path';

const REDIRECTS_PATH = path.join(import.meta.dirname, '..', 'public', '_redirects');

const currentYear = new Date().getFullYear();
const previousYear = currentYear - 1;

const redirects = await fs.readFile(REDIRECTS_PATH, 'utf8');
const updatedRedirects = redirects.replaceAll(previousYear.toString(), currentYear.toString());

await fs.writeFile(path.join(import.meta.dirname, '..', 'public', '_redirects'), updatedRedirects);
