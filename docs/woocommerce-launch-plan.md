# RoboGirls WooCommerce Store — Launch Foundation

## Project decisions
- Store domain: `robogirls.co.za` (currently registered with GoDaddy).
- Commerce platform: WordPress + WooCommerce.
- Hosting provider: xneelo (account/setup pending).
- Technical provider: Ekhaya Technologies.
- Existing Shopify storefront must remain live and unchanged during development.
- Existing repository: `Luxolog/Robo-Girls`; this work is isolated on `woocommerce-store-foundation` and does not change `main`.

## Deployment approach
1. Provision a separate xneelo WordPress installation and database for RoboGirls.
2. Configure a temporary/staging URL and enable SSL before touching the public domain.
3. Build and review the WooCommerce storefront on staging, using verified RoboGirls brand assets and supplied product data only.
4. Configure product variations, stock, payment gateway, shipping zones/rates, order emails, tax settings, privacy and returns information.
5. Run end-to-end checkout tests, including successful and failed payments, order notifications, mobile layouts, and stock changes.
6. Back up the existing Shopify store and verify the new store is ready.
7. At launch, update the GoDaddy DNS records to point `robogirls.co.za` to xneelo, enable/verify HTTPS, and retain Shopify until DNS propagation and the new store are confirmed.

## Guardrails
- Do not change GoDaddy DNS while the WooCommerce store is under development.
- Do not cancel Shopify before the WooCommerce launch is verified.
- Do not invent catalogue details, prices, sizes, stock, shipping fees, or policy terms.
- Keep RoboGirls customer/order data and configuration separate from Ekhaya Scents.
- Store credentials and payment secrets must be configured privately in hosting/plugin settings, never committed to Git.

## Immediate blocker / next input
xneelo hosting is pending. Once the hosting account is provisioned, obtain its temporary site URL or server details and WordPress access so the staging build can be installed. Product catalogue, payment gateway, shipping rates, and business policies should be confirmed before checkout testing.