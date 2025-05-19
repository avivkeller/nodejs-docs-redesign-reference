import ReactDOMServer from "react-dom/server";
import { readFileSync, writeFileSync } from "fs";
import "@node-core/ui-components/styles/index.css";
// @ts-ignore
import raw from "./content.tsx";

const html = readFileSync("src/template.html", "utf-8");
const output = html.replace("{content}", ReactDOMServer.renderToString(raw));

writeFileSync("dist/output.html", output, "utf-8");