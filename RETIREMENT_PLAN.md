# fixlgs-calculator retirement deployment

- Domain: `https://calc.fixlgs.com`
- Mode: `redirect`
- Keep the Vercel project and DNS active while Google processes the retirement.
- `robots.txt` stays crawlable so crawlers can observe 301/410 responses.
- `sitemap.xml` is retired with HTTP 410.
- Do not restore the legacy sitemap or legacy content after deployment.

## Permanent redirect map

- `/` → `https://toolbox.fixlgs.com/ko/length-area-volume-converter` (301)
- `/pyeong-to-square-meter` → `https://toolbox.fixlgs.com/ko/length-area-volume-converter` (301)
- `/square-meter-to-pyeong` → `https://toolbox.fixlgs.com/ko/length-area-volume-converter` (301)
- `/area-calculator` → `https://toolbox.fixlgs.com/ko/length-area-volume-converter` (301)
- `/area-size-comparison` → `https://toolbox.fixlgs.com/ko/length-area-volume-converter` (301)
- `/en` → `https://toolbox.fixlgs.com/en/length-area-volume-converter` (301)
- `/en/area-calculator` → `https://toolbox.fixlgs.com/en/length-area-volume-converter` (301)
- `/en/area-size-calculator` → `https://toolbox.fixlgs.com/en/length-area-volume-converter` (301)
- `/en/square-feet-to-square-meter` → `https://toolbox.fixlgs.com/en/length-area-volume-converter` (301)
- `/en/square-meter-to-square-feet` → `https://toolbox.fixlgs.com/en/length-area-volume-converter` (301)

- Any other legacy path also redirects to the default replacement tool.
