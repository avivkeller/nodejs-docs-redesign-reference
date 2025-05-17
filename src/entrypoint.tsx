import ReactDOMServer from 'react-dom/server';
import { readFileSync, writeFileSync } from 'fs';
// @ts-ignore
import compile from '@node-core/mdx/compiler';
import { VFile } from 'vfile';

import html from './template.html';

import CodeTabs from './components/CodeTabs';
import CodeBox from './components/CodeBox';

import "@node-core/ui-components/styles/index.css"

async function build() {
  const mdx = readFileSync('src/content.mdx', 'utf-8');
  const { content: Comp } = await compile(new VFile(mdx), 'mdx', { CodeTabs, pre: CodeBox });
  const rendered = ReactDOMServer.renderToString(Comp);
  const output = html.replace('{content}', rendered);
  writeFileSync('dist/output.html', output, 'utf-8');
  console.log('output.html created');
}

build();
