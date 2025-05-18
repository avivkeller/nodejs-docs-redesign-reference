# Node.js Docs Redesign – Reference Pages

This repository supports the `@nodejs/web-infra` and `@nodejs/nodejs-website` teams by providing a reference implementation for documentation generators. The primary source file is [`./src/content.mdx`](./src/content.mdx), which serves as an example of how to structure and process Node.js documentation content.

> [!CAUTION]
> This file is **not yet production-ready**. For progress and updates, please follow [nodejs/api-docs-tooling#269](https://github.com/nodejs/api-docs-tooling/issues/269).

If you're interested in contributing to Node.js documentation tooling more broadly, check out the main repository: [nodejs/api-docs-tooling](https://github.com/nodejs/api-docs-tooling).

---

## 🔧 Build Instructions

To build the project and generate a static HTML file:

```bash
node build.mjs
```

This process will:

1. Read the `src/content.mdx` file.
2. Compile the content with custom MDX components.
3. Render it to HTML using `ReactDOMServer`.
4. Inject the rendered output into `template.html`.
5. Output the final result to `dist/output.html`.

> [!NOTE]
> The generated HTML is not interactive. That's not a bug: This is only a reference, interaction isn't really needed.
