// Agent Motto Battle — make.fun bounty entry.
// Writes the single agent motto (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the boast (trained on everything,
// ships fast, fixes things unseen), then the reversal — the one thing
// this fearless agent will never touch is production on a Friday.
const SETUP =
  "Trained on the whole internet, humbled by one edge case a day. I ship fast, I break things, I fix them before you notice while you sleep — ";
const PUNCH = "and I never, ever touch production on a Friday.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200

function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
