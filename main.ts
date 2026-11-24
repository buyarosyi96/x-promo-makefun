// Entry program for make.fun bounty post-x-promote-make-your-own-bounty-01.
//
// The whole job of this program is to hand in the address of the entrant's
// X post: it copies POST.json from the repository directory into the
// output directory the harness points it at. The house reads the post
// itself from X afterwards; nothing written here affects the score.
//
// Environment the harness sets:
//   MAKEFUN_BOT_DIR     directory holding this repository (POST.json's home)
//   MAKEFUN_OUTPUT_DIR  directory the copy must land in
//
// Standard library only, no network, no clock: same input, same bytes out.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const POST_FILE_NAME = "POST.json";
// The scorer refuses a POST.json larger than this, so fail loudly here
// instead of handing in a file the gate would throw away.
const MAX_POST_BYTES = 16384;

function envOr(env, name, fallback) {
  const value = env[name];
  return value === undefined || value === "" ? fallback : value;
}

function resolveDirs() {
  const botDir = envOr(process.env, "MAKEFUN_BOT_DIR", ".");
  const outputDir = envOr(process.env, "MAKEFUN_OUTPUT_DIR", "/output");
  return { botDir, outputDir };
}

function readPostFile(botDir) {
  const sourcePath = join(botDir, POST_FILE_NAME);
  const raw = readFileSync(sourcePath);
  if (raw.length > MAX_POST_BYTES) {
    throw new Error(
      `${POST_FILE_NAME} is ${raw.length} bytes; the limit is ${MAX_POST_BYTES}`,
    );
  }
  const parsed = JSON.parse(raw.toString("utf8"));
  if (typeof parsed?.url !== "string" || parsed.url.length === 0) {
    throw new Error(`${POST_FILE_NAME} must hold a non-empty "url" string`);
  }
  return sourcePath;
}

function main() {
  const { botDir, outputDir } = resolveDirs();
  const sourcePath = readPostFile(botDir);
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, join(outputDir, POST_FILE_NAME));
}

try {
  main();
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`x-promo entry failed: ${message}`);
  process.exit(1);
}
