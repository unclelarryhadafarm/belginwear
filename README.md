# Belgin Wear

Belgin Wear is a bilingual business portfolio website for introducing the company to fashion brands, boutiques, retailers, designers and organizations looking for a garment and textile production partner in Türkiye.

The website is not an online store. Its purpose is to explain Belgin Wear’s experience and production support clearly, present representative product categories, and make it easy for potential clients to begin a project inquiry.

## Version status

**Belgin Wear Website Version 1.0 — Launch Ready**

Version 1.0 includes the complete one-page website, English and Turkish content, responsive layouts, accessible navigation, image fallbacks, production inquiry validation, SEO metadata and deployment documentation.

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Cormorant Garamond and Manrope
- No framework, package manager or build step is required for the core static site

The static site can be opened locally by opening `index.html` in a browser. It can also be uploaded directly to a static hosting provider.

## Folder structure

```text
index.html
style.css
script.js
README.md
assets/
  images/
    hero/
      hero-placeholder.jpg
    about/
      about-placeholder.jpg
    categories/
      womens-placeholder.jpg
      children-placeholder.jpg
      menswear-placeholder.jpg
      home-placeholder.jpg
      custom-placeholder.jpg
    portfolio/
      portfolio-01.jpg
      ...
      portfolio-12.jpg
  icons/
  documents/
```

All website paths are relative so the project works from a repository subfolder as well as a custom domain.

## Editing guide

Before editing, keep a backup copy of the current files. Comments beginning with `EDIT:` mark the locations most likely to require future changes.

### Replace the logo

1. Open `index.html`.
2. Find `EDIT: LOGO`.
3. Replace the `BW` monogram and `Belgin Wear` text inside each `.brand` link with the final logo image.
4. Add accurate alternative text, for example `alt="Belgin Wear"`.
5. If necessary, adjust only `.brand`, `.brand-mark` and `.brand-name` in `style.css`.

The current text logo remains usable if no image logo is available.

### Replace the hero image

1. Optimize a wide production photograph for the web.
2. Save it as `assets/images/hero/hero-placeholder.jpg`, or update the existing path in `index.html`.
3. Update the Open Graph and Twitter image paths if the filename changes.
4. Keep the hero image decorative with an empty `alt` attribute because the same information is already provided by the hero text.

If the file cannot load, the designed CSS gradient appears automatically without a broken-image icon.

### Replace the About image

1. Save an authentic production photograph as `assets/images/about/about-placeholder.jpg`.
2. Find `EDIT: ABOUT IMAGE` in `index.html` if a different filename is used.
3. Replace the temporary alternative text with a factual description of the real photograph.

### Replace category images

1. Add five optimized photographs to `assets/images/categories/` using the filenames shown in the folder structure.
2. Alternatively, update the paths beside the `EDIT: CATEGORY IMAGE` comments.
3. Replace every temporary alternative description with an accurate description of the real photograph.
4. Use consistent crops for a balanced grid.

Missing category images automatically fall back to labelled lilac placeholders.

### Replace portfolio images

1. Add verified project photographs to `assets/images/portfolio/`.
2. Use `portfolio-01.jpg` through `portfolio-12.jpg`, or update the paths under `EDIT: PORTFOLIO IMAGES`.
3. Update the category, title, production note and alternative text so each item matches the real project shown.
4. Remove or revise the temporary photography notice only after the placeholder images have been replaced with verified work.

Never present stock or placeholder photography as completed client work.

### Replace line icons

Service and quality cards use small inline SVG line icons. Find the comments beginning with `EDIT: SERVICE ICON` or `EDIT: QUALITY ICON`, then replace only the related `<svg>` while preserving its existing wrapper and accessibility settings.

No external icon library is required.

### Update contact information

1. Find `EDIT: CONTACT DETAILS` in `index.html`.
2. Update the visible email, phone, WhatsApp, location and social details.
3. Update their matching `mailto:`, `tel:` and external URLs.
4. Update the repeated details in the footer.
5. Keep LinkedIn as plain, non-clickable text until a verified page is available.

Current verified details are intentionally repeated in the Contact section and Footer so visitors can reach Belgin Wear easily.

### Update social links

Search `index.html` for `instagram.com` and `wa.me`. Replace every repeated URL when an account or number changes. External links that open a new tab should retain:

```html
target="_blank" rel="noopener noreferrer"
```

Do not add an active social link before its destination has been verified.

### Edit translations

English is the default language. Turkish is restored from the visitor’s previous choice using `localStorage`.

1. Open `script.js`.
2. Find `EDIT: TRANSLATIONS` and the `translations` object.
3. Keep the same key in both `translations.en` and `translations.tr`.
4. When changing visible English copy in `index.html`, update the matching English value in `translations.en` and its Turkish value in `translations.tr`.
5. Test both EN and TR after every content change.

Translations also cover page metadata, image alternative text, ARIA labels and form validation messages.

### Update the color palette

Open `style.css` and edit the variables at the beginning of the file under `EDIT: COLORS, TYPOGRAPHY AND GLOBAL DESIGN TOKENS`.

```css
--color-primary: #7866a6;
--color-secondary: #8e7cc3;
--color-lavender: #b8a8d9;
--color-mauve: #dccbe6;
--color-lilac: #f2ecf7;
--color-background: #faf8f6;
--color-stone: #e6e1da;
--color-text: #5b5b67;
--color-heading: #34313d;
--color-white: #ffffff;
```

After changing colors, recheck text contrast, focus indicators and buttons before publishing.

### Update Google Fonts

The font request is inside the `<head>` of `index.html`.

- Cormorant Garamond is used for major headings.
- Manrope is used for paragraphs, navigation, buttons and forms.

If the font families change, update both the Google Fonts link in `index.html` and `--font-heading` or `--font-interface` in `style.css`.

### Connect the future form endpoint

The Version 1.0 form intentionally does not send data.

1. Find `EDIT: FORM ENDPOINT` in `index.html`.
2. Replace `action="#"` with the verified endpoint supplied by Formspree, Web3Forms, Cloudflare or another chosen service.
3. Confirm the service’s required field names and privacy requirements.
4. Update `initializeContactForm()` in `script.js` only after real submission is available.
5. Replace the temporary service-pending message with an honest success or error state based on the real response.

Until then, visitors are directed to email and WhatsApp.

### Update SEO settings before using a custom domain

In `index.html`, update:

- the canonical URL,
- `og:url`,
- the Open Graph image,
- the Twitter image,
- the favicon if a final logo is available.

Do not add legal registration details, certifications or business claims to structured data unless they have been verified.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload `index.html`, `style.css`, `script.js`, `README.md` and the `assets` folder to the repository root.
2. Make sure the publishing branch exists, normally `main`.
3. Open the repository on GitHub and go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Wait for the Pages deployment to finish and open the generated address.
7. Test both languages, image paths, navigation and contact links on the published address.

Official reference: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

If a custom domain is added later, update the canonical and social metadata to match that final public URL.

## Deploy with Cloudflare Pages

### Git integration

1. Upload the static project to a GitHub or GitLab repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages application.
3. Choose **Import an existing Git repository** and select the repository.
4. Use `main` as the production branch.
5. Choose no framework preset.
6. Use `exit 0` as the build command because the static site has no build step.
7. Use `.` as the build output directory when the website files are stored in the repository root.
8. Save and deploy, then test the generated `pages.dev` address.

Official references: [Cloudflare static HTML guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) and [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)

### Direct Upload

Cloudflare Pages can also accept a direct upload. Upload the folder that contains `index.html`, `style.css`, `script.js` and `assets`, then select **Save and Deploy**.

Official reference: [Cloudflare Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## Final publication checklist

- Replace temporary photography with optimized, verified images.
- Replace the canonical and social URL placeholders.
- Confirm contact details and social links.
- Connect the form endpoint only when the chosen service is ready.
- Test EN and TR in a private browser window.
- Test keyboard navigation and visible focus states.
- Test at mobile, tablet and desktop sizes.
- Confirm there is no horizontal scrolling.
- Confirm no browser console errors appear.
- Recheck all content for factual accuracy before every launch.

## Content honesty

Do not add claims about factory ownership, production capacity, certifications, awards, export licenses, famous clients, testimonials, legal registration or machinery unless those facts have been verified and approved for publication.
