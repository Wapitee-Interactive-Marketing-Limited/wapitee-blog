---
title: "Shopify Markets: How to Sell Globally from a Single Store (Complete 2026 Guide)"
status: "published"
brand: "wapitee"
topic: "shopify"
tags: ["Shopify", "Markets", "i18n", "Global Commerce"]
created: "2026-08-04"
updated: "2026-08-05"
verified: "2026-08-05"
sources:
  - name: "Shopify Help Center — Managed Markets Requirements"
    url: "https://help.shopify.com/zh-CN/manual/markets/markets-pro/requirements-and-considerations"
  - name: "Shopify Help Center — Managing Multiple Markets"
    url: "https://help.shopify.com/manual/markets"
  - name: "Shopify Dev — Locale-aware URLs"
    url: "https://shopify.dev/themes/internationalization/multiple-currencies-languages"
  - name: "LitOS — Shopify Markets Guide"
    url: "https://litos.io/blog/shopify-markets"
  - name: "Charle Agency — What is Shopify Markets? A 2026 Guide"
    url: "https://www.charleagency.com/articles/what-is-shopify-markets"
cover: "/covers/shopify-markets-single-store.png"
summary: "Shopify Markets lets a single store manage up to 50 markets with automatic language, currency, and domain adaptation. But a single store means a single legal entity — companies needing local-entity sales (e.g., Japan) must open separate stores."
---

> One admin managing global markets, with the storefront automatically adapting language, currency, and localization.
> But "single store = single legal entity" is the hard boundary — local-entity sales require a separate store.

## Overview

**Shopify Markets** is Shopify's native internationalization feature. Within a single store, you can configure multiple country/region Markets, each with its own domain, language, currency, product catalog, and pricing — all managed from one admin dashboard.

### Core Capabilities

- **Single admin, multiple markets**: Products, inventory, and content updated once, effective globally
- **Multi-language**: Built-in translation workflow (auto-translate + manual review), with independent content strategy per Market
- **Multi-currency**: Frontend displays local currency; customers pay in their local currency
- **Multi-domain/subpath**: `/de`, `de.example.com`, `example.de` all supported
- **Per-market pricing**: Fixed price / real-time exchange rate / rounded exchange rate
- **SEO**: Automatic hreflang tags, localized URLs

### Scale Limits

- A single store supports up to **50 markets** (including sub-markets) — far more than most brands need
- Standard Markets configuration is free on all Shopify plans; **Grow and above** unlocks per-market pricing, independent product catalogs, and other advanced features

---

## Key Facts (Verified)

| # | Fact | Source |
|---|---|---|
| 1 | A Shopify store can configure up to 50 markets, each with independent language/currency/domain/catalog | Shopify Help Center / Charle 2026 |
| 2 | Markets relies on Shopify Payments for local-currency checkout and local wallets | LitOS |
| 3 | **A single store supports only one legal entity** — Markets cannot link different markets to different companies | Shopify Official / LitOS |
| 4 | Each country requiring a local retail entity needs its own store; **multiple entities require Shopify Plus** | Shopify Blog |
| 5 | Managed Markets (cross-border) also does not support multiple business entities in a single store | Shopify Help Center |
| 6 | Multi-currency payments are settled in the company's home currency, creating forced FX conversion | Shopify / Wapitee Experience |
| 7 | Pricing capabilities are tiered by plan: Basic is limited; Grow+ unlocks full features | LitOS / Charle |
| 8 | Using a third-party payment processor (Airwallex/PingPong) loses Markets' **multi-currency checkout** (all markets pay in store default currency); but **language/translation/URL localization still work fully** | Shopify Help Center (2026-08-05) |

---

## Domain & URL Structure

How multilingual pages are presented **directly determines how domains work**:

### Option A: Subfolder (Path) → Must be the Same Store

- Use `example.com/de`, `example.com/en` — **path-based** presentation for different languages/markets
- This is an internal path structure of one website project, **must be bound to the same Shopify store**
- Shopify subfolders are **created using the primary domain**
- Suitable for: Single-entity cross-border, centralized multilingual management

### Option B: Separate Domain/Subdomain → Multi-Store Logic Requires Domain Change

- Each market uses an independent domain (`example.de`) or subdomain (`de.example.com`)
- **One domain can only bind to one Shopify store** — multiple domains can point to one store, but one domain cannot point to multiple stores
- Multi-store logic **requires different domains**: either subdomains or new country TLDs
- Suitable for: Local-entity sales, independent brand/market operations

> **Path approach = single store**, suitable for Markets single-store model;
> **Multi-store = multiple domains** — one domain binds one Shopify store. This is a platform hard constraint.

---

## Multilingual URL Format: Language-Region Combination

### Format: Language Code First, Region Code Second

Shopify multilingual URL prefixes use **IETF BCP 47 language tags**, structured as **`language-region`**:

| Example URL | Language | Region | Meaning |
|---|---|---|---|
| `example.com/en-ca` | en (English) | ca (Canada) | English-Canada |
| `example.com/fr-ca` | fr (French) | ca (Canada) | French-Canada |
| `example.com/de-de` | de (German) | de (Germany) | German-Germany |
| `example.com/es-mx` | es (Spanish) | mx (Mexico) | Spanish-Mexico |
| `example.com/zh-sg` | zh (Chinese) | sg (Singapore) | Chinese-Singapore |
| `example.com/en-sg` | en (English) | sg (Singapore) | English-Singapore |

### Key Rules (Verified)

1. **Language first, region second**: `en-sg` means "English for Singapore," not the reverse
2. **Language-only prefix only for primary market**: e.g., `example.com/fr` only for the primary market; **secondary markets must use language-region combos** (like `/fr-ca`, `/en-eu`)
3. **Primary market has no prefix**: Primary market URLs have no locale prefix (`example.com/products/xxx`); secondary markets auto-add prefix (`example.com/en-ca/products/xxx`)
4. **Prefixes are auto-generated, not customizable**: The locale segment is auto-generated by Shopify (community cases: cannot change `/ja` to `/jp`, cannot remove `en-` from `en-ca`)
5. **Region suffix is customizable**: The market-level "region suffix" can be set (e.g., Europe uses `eu`, Canada uses `ca`); the language segment is automatic

---

## The Limitation: Single Store = Single Legal Entity

This is the boundary most easily overlooked but with the biggest impact on international expansion.

### What It Means

- Shopify Markets **does not support linking different markets to different legal entities**
- If you operate in multiple countries with different companies, you cannot split tax handling and payment settlement by entity
- In this case, **multiple stores (expansion stores) are still necessary**

### When You Hit This Wall

1. **Selling as a "local company" in a specific market** — many countries require local-entity operations at scale for tax/legal/trust reasons
2. **Different company entities per country** — parent company (e.g., Hong Kong) + subsidiaries/JVs
3. **Tax filing by entity** — need to invoice and file independently per local entity
4. **Payment entity separation** — local company wants revenue directly into local accounts, not via parent company

---

## Case Study: Why Japan Requires a Separate Store

**Scenario**: Parent entity in Hong Kong, main Shopify store registered under HK company. Japanese online sales reach a threshold where:

| Driver | Explanation |
|---|---|
| **Tax compliance** | Japan Consumption Tax (JCT): annual taxable sales over ¥10M triggers registration; since Oct 2023, the small-amount exemption was removed — foreign companies selling to Japanese consumers must register. JCT registration doesn't require a Japanese company, but filing needs a designated Japanese tax accountant |
| **Legal identity** | If selling as a "Japanese company" for invoicing and statutory obligations (e.g., Specified Commercial Transactions Act), a Japanese entity is required |
| **Consumer trust & payments** | Japanese consumers trust local companies significantly more; local payment methods (konbini, PayPay) typically require a Japanese entity/local bank account |
| **Local operations** | Returns, customer service, after-sales, local inventory work better with a local entity |

**Conclusion**: When business requires "selling as a Japanese company," the HK-entity single-store Markets model fails — Japan needs its own Shopify store with Japanese company information.

> **Number of markets requiring "local-entity sales" = number of additional Shopify stores needed (main store + N local stores)**
>
> Pure cross-border selling without local entity → single-store Markets is sufficient.
> Any market requiring local entity → that market needs a separate store.

---

## Comparison: Single-Store Markets vs. Multi-Store

| Dimension | Single-Store Markets | Multi-Store (Expansion Stores) |
|---|---|---|
| Admin count | 1 | N |
| Operating cost | Low (one action, global effect) | High (N× operations) |
| Multi-language/currency | Automatic | Each store independent |
| Per-market pricing | Yes | Yes (per store) |
| Legal entity | **1 (hard limit)** | N (one per store) |
| Tax/payment splitting | No | Yes |
| Localization depth | Medium (translation layer) | High (independent brand/content/inventory) |
| Best for | Single-entity cross-border, fast multi-country coverage | Multi-entity, heavy local operations |

---

## FAQ

<details class="faq-item" open>
<summary>How many markets can a single store have?</summary>

Up to 50 markets (including sub-markets). Most brands use 3–10.

</details>

<details class="faq-item">
<summary>How to avoid FX losses?</summary>

The official path is Shopify Payments multi-currency accounts. Third-party processors (Airwallex/PingPong) can collect independently but lose Markets' **multi-currency checkout** (all markets pay in default currency). What you're trading off is currency experience, not multilingual capability — **language/translation/URL localization are unaffected**.

</details>

<details class="faq-item">
<summary>Does JCT registration require a Japanese company?</summary>

No. JCT registration can be completed by foreign companies through a Japanese tax accountant (requires power of attorney + local accountant). But "selling as a Japanese company" is different — that requires a real Japanese entity + separate store.

</details>

<details class="faq-item">
<summary>Does multi-entity require Shopify Plus?</summary>

Advanced multi-entity features (per-market business entity, checkout block customization) require Shopify Plus+. If you're just opening independent standard stores per entity, Plus is not mandatory.

</details>

<details class="faq-item">
<summary>Why is the multilingual URL `/en-ca` instead of `/en` or `/ca`?</summary>

Shopify uses IETF BCP 47 language tags for URL prefixes, structured as language-region (language first). Language-only prefixes (like `/fr`) are only for the primary market; secondary markets must use language-region combos (like `/fr-ca`, `/en-sg`) to distinguish the same language across different countries.

</details>
