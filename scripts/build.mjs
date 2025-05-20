import { readFile, writeFile } from "fs/promises";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read content file
const contentPath = path.join(__dirname, "./content.txt");
const content = (await readFile(contentPath, "utf8")).trim();

// Read template and replace content
const templatePath = path.join(__dirname, "../src/content.tsx.tpl");
const outputPath = path.join(__dirname, "../src/content.tsx");

const template = await readFile(templatePath, "utf8");
const result = template.replace(
  "{content}",
  content.substring(0, content.length - 1),
);

// Write output file
await writeFile(outputPath, result);
execSync("webpack", { stdio: "inherit" });
