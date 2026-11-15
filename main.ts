import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8'));
writeFileSync(join(OUTPUT_DIR, 'html.json'), JSON.stringify(cases.map(() => '')));
