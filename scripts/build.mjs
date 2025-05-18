import { stat } from "fs/promises";
import { existsSync } from "fs";
import { execSync } from "child_process";

const bundle = new URL("../dist/bundle.js", import.meta.url);
const source = new URL("../src/entrypoint.tsx", import.meta.url);

let needsBuild = !existsSync(bundle);

if (!needsBuild) {
  const [bundleStat, sourceStat] = await Promise.all([
    stat(bundle),
    stat(source),
  ]);
  needsBuild = sourceStat.mtime > bundleStat.mtime;
}

if (needsBuild) {
  execSync("pnpm exec webpack", { stdio: "inherit" });
}

await import("../dist/bundle.js");