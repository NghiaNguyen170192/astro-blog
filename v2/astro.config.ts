// @ts-check
import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";
// import mdx from "@astrojs/mdx";
// import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "static",
  compressHTML: true,
  integrations: [
    // tailwind({
    //   applyBaseStyles: false,
    // }),
    // mdx(),
    // compress({
    //   CSS: true,
    //   HTML: {
    //     "html-minifier-terser": {
    //       removeAttributeQuotes: false,
    //     },
    //   },
    //   Image: false,
    //   JavaScript: true,
    //   SVG: false,
    //   Logger: 1,
    // }),
  ]
});
