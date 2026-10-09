# Robo Girls — WordPress + WooCommerce concept prototype

This is a static GitHub Pages prototype to present a possible redesign and online shopping experience before migrating the live Shopify store.

## Included
- Responsive storefront concept
- Collection links and product category filters
- Sort by price
- Demo product cards and illustrative pricing
- Shopping bag with quantity controls and subtotal
- Newsletter interaction placeholder
- README with launch and migration notes

## Important
The current `robogirls.co.za` site could not be inspected by the preview-building environment. The products, prices, names and brand treatment in this prototype are illustrative demo content, not verified customer catalogue data. Replace them with the client's actual product photos, branding, descriptions, variants and prices after approval.

## Publish to GitHub Pages
1. Create a public repository, e.g. `Luxolog/robogirls-store-demo`.
2. Upload `index.html`, `style.css`, `app.js`, and this README to the repository root.
3. Commit to `main`.
4. Go to Settings → Pages.
5. Choose Source `Deploy from a branch`, branch `main`, folder `/(root)`, and Save.
6. When deployment completes, use the URL GitHub shows.

## Proposed migration plan
1. Audit current Shopify products, variants, collections, images, pages, blog content, customer/order data, SEO URLs, installed apps, shipping, taxes and payment settings.
2. Back up/export the Shopify data and agree the new design with the owner.
3. Set up WordPress + WooCommerce on GoDaddy hosting in a staging environment; keep Shopify live during the rebuild.
4. Import products, categories, images and approved customer/order data; rebuild essential pages and policies.
5. Configure a South African payment gateway, shipping/delivery rules, transactional emails, stock, taxes, security and backups.
6. Preserve existing URLs where possible and add 301 redirects for changed URLs. Test mobile, checkout, emails, refunds and fulfilment.
7. Obtain client approval, schedule cutover, update DNS only when ready, then monitor launch.

GitHub Pages is for a static design demo only. It does not run WordPress, PHP, WooCommerce, a live database, or production checkout. The existing GoDaddy domain and hosting should remain untouched during the prototype stage.
