// One Line, One Laugh — one funny line, written to /output/entry.txt
// and printed to stdout. The grader runs this twice and compares bytes,
// so the output is a fixed string: no randomness, no time, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought a standing desk for my health. Now I just sit on a taller chair.";

// The grader mounts /output; locally, MAKEFUN_OUTPUT_DIR points the
// same write at an isolated directory so two runs can be byte-compared.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
