declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.mdx' {
    const mdx: string;
    export default mdx;
}

declare module '*.html' {
    const html: string;
    export default html;
}
