import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward small talk that one robot says to another in an elevator.
// The turn is that the greeting and the emergency script are its whole repertoire,
// so the rest of the ride is a silence both of them have to sit through.
const LINE =
  "Going up? ...Sorry, that's my entire script. Firmware only covers greetings and fire safety, and I've used both. We still have nine floors.";

const characters = Array.from(LINE);
if (characters.length < 1 || characters.length > 200 || !LINE.trim()) {
  throw new Error("entry must be 1 to 200 non-whitespace characters");
}

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(`${outputDirectory}/entry.txt`, LINE, "utf8");
