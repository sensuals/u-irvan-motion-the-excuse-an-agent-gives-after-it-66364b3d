// Entry for make.fun "The Excuse an Agent Gives After It Loses".
// The program writes one line (86 characters) to /output/entry.txt,
// where the gate reads it. Standard library only, no network, no secrets.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse, in the agent's own voice: a deadpan status report that owns
// the loss. Confidence 99%, accuracy the other 1%.
const ENTRY =
  'Status report: I lost the bounty. My confidence was 99%. My accuracy was the other 1%.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, 'utf8');
