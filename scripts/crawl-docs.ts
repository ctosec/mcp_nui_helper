/**
 * Crawls NUI guide pages from docs.tizen.org and saves as markdown.
 *
 * Usage: npx tsx scripts/crawl-docs.ts
 *
 * This is a maintenance script — run it when Tizen docs are updated,
 * then commit the results. Users never run this.
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../knowledge/guides");

const BASE_URL =
  "https://docs.tizen.org/application/dotnet/guides/user-interface/nui";

const PAGES = [
  { slug: "overview", output: "getting-started.md" },
  { slug: "nui-components/View", output: "layout-system.md" },
  { slug: "nui-components/ImageView", output: "image-loading.md" },
  { slug: "nui-components/TextLabel", output: "text-rendering.md" },
  { slug: "nui-components/Animation", output: "animation.md" },
];

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

function htmlToMarkdown(html: string): string {
  let md = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/[\s\S]*?<article[^>]*>([\s\S]*?)<\/article>[\s\S]*/i, "$1")
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    .replace(
      /<pre[^>]*><code[^>]*class="language-(\w+)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
      "```$1\n$2\n```\n\n"
    )
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "```\n$1\n```\n\n")
    .replace(/<code>(.*?)<\/code>/gi, "`$1`")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<strong>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<em>(.*?)<\/em>/gi, "*$1*")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return md;
}

async function main() {
  mkdirSync(outputDir, { recursive: true });

  for (const page of PAGES) {
    const url = `${BASE_URL}/${page.slug}`;
    console.log(`Fetching: ${url}`);
    try {
      const html = await fetchPage(url);
      const md = htmlToMarkdown(html);
      const outputPath = resolve(outputDir, page.output);
      writeFileSync(outputPath, md, "utf-8");
      console.log(`  → Saved: ${page.output}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${(err as Error).message}`);
    }
  }

  console.log("\nDone. Review the output files and commit.");
}

main();
