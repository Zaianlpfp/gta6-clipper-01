// gta6-clipper-01 entry (Node 22, standard library only): it validates VIDEO.json and
// copies it from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: the clip (clip.mp4
// in this repo) is uploaded to YouTube as a public Short, and VIDEO.json names the
// video's address.
//
// VIDEO.json holds the live Short: https://www.youtube.com/shorts/f3sChhOSlgc
// (channel GTA VI Indonesia, public since 20 Nov 2026). If the URL ever changes,
// update VIDEO.json and re-run — the script refuses to ship a malformed URL.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SHORTS_URL = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]{11}$/;

const source = join(BOT_DIR, 'VIDEO.json');
let url: string;
try {
  const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
  url = (parsed as { url?: unknown }).url as string;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof url !== 'string' || !SHORTS_URL.test(url)) {
  console.error(
    `VIDEO.json does not name a YouTube Shorts URL (got: ${JSON.stringify(url)}); refusing to copy.`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json OK: ${url}`);
