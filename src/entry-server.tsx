import { Analytics } from "@vercel/analytics/react";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";
import { getPageSeo, seoRoutes } from "./lib/seo";

export { seoRoutes };

export async function render(path: string) {
  const html = await new Promise<string>((resolve, reject) => {
    const output = new PassThrough();
    const chunks: Buffer[] = [];
    let renderError: Error | null = null;
    output.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    output.on("end", () => renderError ? reject(renderError) : resolve(Buffer.concat(chunks).toString("utf8")));
    output.on("error", reject);
    const { pipe } = renderToPipeableStream(
      <><StaticRouter location={path}><AppContent /></StaticRouter><Analytics /></>,
      {
        onAllReady() { pipe(output); },
        onShellError(error) { reject(error); },
        onError(error) { renderError = error instanceof Error ? error : new Error(String(error)); },
      },
    );
  });
  return { html, metadata: getPageSeo(path) };
}
