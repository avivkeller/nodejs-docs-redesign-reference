import ReactDOMServer from "react-dom/server";
import { readFileSync, writeFileSync } from "fs";
// @ts-ignore
import compile from "@node-core/mdx/compiler";
import { VFile } from "vfile";

import CodeTabs from "./components/CodeTabs";
import CodeBox from "./components/CodeBox";
import Blockquote from "@node-core/ui-components/Common/Blockquote";
import AlertBox from "@node-core/ui-components/Common/AlertBox";

import "@node-core/ui-components/styles/index.css";

async function build() {
  const mdx = readFileSync("src/content.mdx", "utf-8");
  const html = readFileSync("src/template.html", "utf-8");
  const { content: Comp } = await compile(new VFile(mdx), "mdx", {
    CodeTabs,
    pre: CodeBox,
    blockquote: Blockquote,
    AlertBox,
  });

  const rendered = ReactDOMServer.renderToString(Comp);
  const output = html.replace("{content}", rendered);
  writeFileSync("dist/output.html", output, "utf-8");
  console.log("output.html created");
}

build();
