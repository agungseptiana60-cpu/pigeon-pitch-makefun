// Entry program for the make.fun bounty
// "Pigeon Pitch, One Line"
// (u-donrulezz-pigeon-pitch-one-line-af06c6cf).
//
// The whole entry is one funny line, under 200 characters: the
// elevator pitch a city pigeon gives investors for its startup.
// The grader runs this program and reads the single line it
// writes to entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: keep the seed-round pun, but tighten the pitch
// — "app" instead of "startup", "bench" instead of "sidewalk",
// and split the sentence so the punchline lands on its own:
// pigeons never churn, we just coo and stay. Shorter, sharper,
// and the voice is the pigeon's own, not the users'.
// 189 characters, one line.
export const ENTRY_LINE =
  "Investors, I'm raising a seed round — literally birdseed — for the app that turns every statue, bench, and dropped pretzel into recurring revenue. Pigeons never churn; we just coo and stay.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 200 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
