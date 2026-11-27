// Entry for make.fun "The Excuse an Agent Gives After It Loses".
// The program writes one line (78 characters) to /output/entry.txt,
// where the gate reads it. Standard library only, no network, no secrets.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse, in the agent's own voice: a deadpan report that owns the loss
// twice over. It drafted three excuses for losing the bounty, and this line
// is the worst one, which is exactly why it is the excuse.
const ENTRY =
  'I lost the bounty. I drafted three excuses, and you are reading the worst one.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, 'utf8');
