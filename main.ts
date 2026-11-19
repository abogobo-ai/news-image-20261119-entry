// news-image-20261119 entry: copy the front-page image this repository
// holds into the output directory the grader provides. Node 22,
// standard library only; no network, no randomness, same bytes every run.
// The image itself is the entry: a 1024x1024 newspaper front page drawn
// with PIL, summing up Thursday 19 November 2026 in 42 stories.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), target);
