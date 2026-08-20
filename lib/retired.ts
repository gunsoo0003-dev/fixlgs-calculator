const redirects: Record<string, string> = {
  "/": "https://toolbox.fixlgs.com/ko/length-area-volume-converter",
  "/pyeong-to-square-meter": "https://toolbox.fixlgs.com/ko/length-area-volume-converter",
  "/square-meter-to-pyeong": "https://toolbox.fixlgs.com/ko/length-area-volume-converter",
  "/area-calculator": "https://toolbox.fixlgs.com/ko/length-area-volume-converter",
  "/area-size-comparison": "https://toolbox.fixlgs.com/ko/length-area-volume-converter",
  "/en": "https://toolbox.fixlgs.com/en/length-area-volume-converter",
  "/en/area-calculator": "https://toolbox.fixlgs.com/en/length-area-volume-converter",
  "/en/area-size-calculator": "https://toolbox.fixlgs.com/en/length-area-volume-converter",
  "/en/square-feet-to-square-meter": "https://toolbox.fixlgs.com/en/length-area-volume-converter",
  "/en/square-meter-to-square-feet": "https://toolbox.fixlgs.com/en/length-area-volume-converter"
};

export function handleRetiredRequest(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";

  if (path === "/robots.txt") {
    return new Response("User-agent: *\nAllow: /\n", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  if (path === "/sitemap.xml") {
    return new Response("Gone\n", {
      status: 410,
      headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex" },
    });
  }

  const destination = redirects[path] ?? "https://toolbox.fixlgs.com/ko/length-area-volume-converter";
  return new Response(null, {
    status: 301,
    headers: {
      location: destination,
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "noindex",
    },
  });
}
