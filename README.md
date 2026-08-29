# EditFlow — Video Editor Landing Page

A static, dependency-free landing page that helps visitors understand how to
choose a video editor, then sends them to Fiverr's video editing marketplace
through a single affiliate link.

No backend, no build step, no environment variables. Just HTML, CSS, and
vanilla JavaScript.

## 1. Add your Fiverr affiliate link

Open **`script.js`** and edit the very first line:

```javascript
const AFFILIATE_LINK = "YOUR_FIVERR_AFFILIATE_LINK_HERE";
```

Replace the placeholder with your real Fiverr affiliate URL. Every CTA button
on the site — nav, hero, category cards, mid-page, final section, and the
mobile sticky bar — reads from this one variable, so this is the only place
you ever need to update it.

## 2. Edit the main text

All page copy lives directly in **`index.html`**, organized into clearly
commented sections (hero, value strip, problem section, categories, how it
works, what to look for, comparison table, specialties, FAQ, final CTA).
Open the file and edit any heading or paragraph directly — no templating
system to learn.

The ten "What kind of video?" cards are generated from the `CATEGORY_DATA`
array near the top of **`script.js`**, so edit that array to change their
names, icons, or descriptions.

## 3. Replace images

The current build uses inline SVG (the hero "monitor" mockup, icons, and the
timeline divider) rather than photos, so there are no broken image paths to
worry about out of the box.

If you'd like to add real photography:

1. Drop your image files into `assets/` (an empty folder is included for
   this).
2. Reference them with a relative path, e.g. `<img src="assets/hero.webp" alt="...">`.
3. Use `.webp` where possible and keep hero-sized images under ~300KB for
   fast loading.
4. Always add descriptive `alt` text.

## 4. Upload to GitHub

1. Create a new repository on GitHub.
2. Upload every file in this folder (keeping the folder structure — `assets/`
   included, even if empty) either via the GitHub web UI ("Add file → Upload
   files") or with git:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

## 5. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project**.
3. Import the GitHub repository you just created.
4. Framework preset: choose **Other** (this is a static site — no build
   command or output directory is required).
5. Click **Deploy**.

That's it — no environment variables, no serverless functions, no database.

## Before you publish

- Update `<link rel="canonical">`, the Open Graph/Twitter `og:url` and
  `og:image` tags, and `robots.txt` / `sitemap.xml` with your real domain.
- Replace the contact email (`hello@example.com`) in the footer and legal
  pages.
- Replace the placeholder text in `privacy.html` and `terms.html` with your
  actual policies.
- Double-check every `data-cta` button opens your real affiliate link by
  clicking through the site after deployment.

## File structure

```
video-editor-landing-page/
├── index.html       ← main landing page
├── privacy.html      ← placeholder privacy policy
├── terms.html         ← placeholder terms of use
├── styles.css        ← all styling
├── script.js          ← affiliate link, categories, nav, FAQ, animations
├── assets/            ← put your own images here (optional)
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```
