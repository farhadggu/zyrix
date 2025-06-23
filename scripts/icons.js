import fs from 'fs';
import path from 'path';

const spriteConfigPath = path.join(process.cwd(), 'sprite.config.json');
const spriteConfig = JSON.parse(fs.readFileSync(spriteConfigPath, 'utf-8'));
const breakpoints = ['', Object.keys(spriteConfig.breakpoints)];

const spriteFilename = spriteConfig.filename;

const cssFilename = spriteConfig.css.filename;
const cssPath = path.join(process.cwd(), 'src', 'app', cssFilename + '.css');
let spriteCSS = fs.readFileSync(cssPath, 'utf-8');

const filenames = breakpoints.map(bp => [spriteFilename, bp].filter(Boolean).join('-') + '.svg');
const filenameRegex = new RegExp(`(\/?${filenames.join('|')})`, 'g');

spriteCSS = spriteCSS.replace(filenameRegex, match => {
  return match.startsWith('/') ? match : '/' + match;
});

fs.writeFileSync(cssPath, spriteCSS, 'utf-8');

const mainTagRegex = /<main.*>([\s\S]*)<\/main>/g;
const returnStatementRegex = /return\s*\(([\s\S]*)\)\s*;/g;

const devPagePath = path.join(process.cwd(), 'src', 'app', '(app)', 'dev', 'page.tsx');
const devPageTsx = fs.readFileSync(devPagePath, 'utf-8');

const demoPath = path.join(process.cwd(), '_temp', 'demo.html');
const demoHtml = fs.readFileSync(demoPath, 'utf-8');

const iconsHtml = devPageTsx.replace(returnStatementRegex, () => {
  let html = mainTagRegex.exec(demoHtml)[1];

  const classRegex = /class=/g;
  html = html.replace(classRegex, () => `className=`);

  return `return (\n<main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>${html}</main>\n);`;
});

fs.writeFileSync(devPagePath, iconsHtml, 'utf-8');
