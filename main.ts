// gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it. That is all the program
// has to do. The entry is the video itself: the clip (clip.mp4 in this repo) is uploaded to
// YouTube as a public Short, and VIDEO.json names the video's address.
//
// VIDEO.json currently holds a placeholder: the video has NOT been uploaded yet. Upload it
// first (see UPLOAD.md), then replace the placeholder URL with the real Shorts URL.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
