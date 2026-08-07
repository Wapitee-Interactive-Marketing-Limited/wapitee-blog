---
title: "Grant Partner Access to Your Shopify Store (2026 Guide)"
status: "published"
brand: "wapitee"
topic: "shopify"
tags: ["Shopify", "Partner Access", "Collaborator", "Security", "Agency Collaboration"]
created: "2026-06-18"
updated: "2026-06-25"
verified: "2026-06-25"
sources:
  - name: "Shopify Help Center — Collaborator Request Codes"
    url: "https://help.shopify.com/en/manual/your-account/staff-accounts/collaborator-accounts/collaborator-request-codes"
  - name: "Shopify Partners — Collaborator Access"
    url: "https://www.shopify.com/partners/blog/collaborator-accounts"
  - name: "Adfinite — How to Request Collaborator Access in Shopify (2026)"
    url: "https://adfinite.com/blog/collaborator-access-shopify"
  - name: "Shopify Dev — Partner Dashboard (March 2026 migration)"
    url: "https://shopify.dev/docs/apps/partner-dashboard"
cover: "/covers/shopify-partner-access.png"
summary: "Shopify Collaborator Access lets Wapitee work on your store without consuming staff seats or exposing financial data. This guide walks you through the 2-step authorization process, permission categories, security best practices, and FAQs."
---

> Everything you need to set up Wapitee's access to your store — secure, limited, and fully revocable.

## Overview

When you work with Wapitee, we need access to your Shopify admin to implement changes — themes, translations, settings, and code. Instead of creating a full staff account (which consumes a seat and has broad permissions), Shopify provides a better way: **Collaborator Access**.

### Why We Use It

| Feature | Benefit |
|---|---|
| **No Staff Seat** | Unlimited collaborators on any plan |
| **No Financial Access** | Bank details & payments stay hidden |
| **Instantly Revocable** | One click to remove, access ends immediately |
| **Fully Logged** | Every action recorded in Activity Log |

> **Key Point**
> Collaborator access is like a **guest pass with specific room permissions** — we can enter the rooms you approve, but never the vault.

![Collaborator access works like a guest pass — approved rooms open, the vault stays locked](/blog/images/partner-access/guest-pass.png)

---

## Why Not Just Create a Staff Account?

| Feature | Collaborator | Staff Account |
|---|---|---|
| **Counts toward plan limit** | No — unlimited, free | Yes — 2 to 15 seats |
| **Bank / payment details** | Never accessible | Can be granted |
| **Permission scope** | Category-specific, granular | Full admin by default |
| **Activity logging** | Fully logged | Fully logged |
| **Best for** | Agencies, freelancers, partners | Full-time employees |

Staff accounts count against your plan's seat limits. Basic Shopify includes 2 staff seats; standard Shopify includes 5; Advanced includes 15.

Collaborator accounts don't count toward these limits — you can give us access without giving up a single seat. That matters, because seats are one of the quiet costs of growing a store.

Staff accounts can also access sensitive financial data. Collaborator accounts **cannot** touch bank account details or Shopify Payments settings by default. That protection is built in — it's not something you have to configure or remember to enforce.

---

## How It Works

Three parties, one secure handoff — no password sharing, no full admin risk.

<div class="pa-diagram">
  <span class="pa-diagram__title">The collaborator access flow</span>
  <div class="pa-flow">
    <div class="pa-panel">
      <span class="pa-label">Wapitee — Partner Dashboard</span>
      <div class="pa-mock">
        <div class="pa-mock__bar"><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__url"></span></div>
        <div class="pa-mock__body">
          <div class="pa-mock__main">
            <div class="pa-field"></div>
            <div class="pa-checks"><i class="on"></i><i class="on"></i><i></i></div>
            <span class="pa-btn pa-hl">Request access</span>
          </div>
        </div>
      </div>
    </div>
    <span class="pa-arrow">→</span>
    <div class="pa-panel">
      <span class="pa-label">Your Store — Shopify Admin</span>
      <div class="pa-mock">
        <div class="pa-mock__bar"><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__url"></span></div>
        <div class="pa-mock__body">
          <div class="pa-mock__nav"><span class="pa-navline"></span><span class="pa-navline"></span><span class="pa-navline pa-navline--on"></span><span class="pa-navline"></span></div>
          <div class="pa-mock__main">
            <div class="pa-request pa-hl"><span class="pa-dot"></span><span class="pa-request__text">New collaborator request — Wapitee</span></div>
            <div class="pa-actions"><span class="pa-btn pa-btn--ghost">Deny</span><span class="pa-btn pa-hl">Approve</span></div>
          </div>
        </div>
      </div>
    </div>
    <span class="pa-arrow">→</span>
    <div class="pa-panel">
      <div class="pa-outcome"><span class="pa-outcome__icon">✉️</span><span class="pa-outcome__text">Confirmation email</span></div>
      <div class="pa-outcome"><span class="pa-outcome__icon">🔓</span><span class="pa-outcome__text">Access granted — scoped permissions only</span></div>
    </div>
  </div>
  <span class="pa-note">Payments &amp; bank details stay locked at every step.</span>
</div>

1. **Wapitee** (Partner Dashboard) sends an access request with specific permission categories
2. **Your Store** (Shopify Admin) reviews and approves the request
3. **Access Scope** is limited to approved categories — Payments and Bank details are always blocked

---

## How to Grant Access (Your Side)

You only need to do **two things** on your end — takes about five minutes in total. The rest is automatic.

### Step 1: Set Up a Collaborator Request Code

Go to **Settings → Users and permissions → Collaborators**. Click "Enable collaborator request code." Shopify generates a 4-digit code (e.g., `4821`). Share this code with us.

### Step 2: Approve Our Request

After we send the access request, you'll receive an email + in-admin notification. Go to **Settings → Users and permissions → Collaborators**, find the pending request, review the permission categories, and click **Approve**.

> ⚠️ **Important**
> The 4-digit request code is the key security gate. Share it only with us (Wapitee) — never post it publicly. You can change or disable it at any time.

---

## What We'll Request

For typical localization and development projects, we request these specific permission categories:

| Permission | What It Includes | Status |
|---|---|---|
| **Products** | Product listings, inventory, collections | ✓ |
| **Content** | Blog posts, pages, metaobjects | ✓ |
| **Online Store** | Themes, navigation, preferences | ✓ |
| **Settings** | Store settings, languages, markets | ✓ |
| **Apps** | App installations, channels | ✓ |
| **Orders** | Order management, fulfillment | Optional |
| **Payments / Bank** | — | ✗ **Never accessible** — blocked by design |

We always start with the minimum permissions a project needs, and only ask for more if a specific task requires it. You stay in control of every escalation.

---

## Keeping Your Store Safe

<div class="pa-diagram">
  <span class="pa-diagram__title">Your security checklist</span>
  <div class="pa-list">
    <div class="pa-list__item">
      <span class="pa-list__icon">✓</span>
      <div class="pa-list__body">
        <span class="pa-list__text">Enable the collaborator request code</span>
        <span class="pa-path">Settings <i>→</i> Users and permissions <i>→</i> Collaborators</span>
      </div>
    </div>
    <div class="pa-list__item">
      <span class="pa-list__icon">✓</span>
      <div class="pa-list__body">
        <span class="pa-list__text">Review the store activity log weekly</span>
        <span class="pa-path">Settings <i>→</i> Store activity log</span>
      </div>
    </div>
    <div class="pa-list__item">
      <span class="pa-list__icon">✓</span>
      <div class="pa-list__body">
        <span class="pa-list__text">Remove access when the project ends — one click, access ends immediately</span>
        <span class="pa-path">Settings <i>→</i> Users and permissions <i>→</i> Collaborators <i>→</i> Remove access</span>
      </div>
    </div>
    <div class="pa-list__item">
      <span class="pa-list__icon">🔒</span>
      <div class="pa-list__body">
        <span class="pa-list__text">Payments &amp; bank details — never accessible to collaborators</span>
        <span class="pa-path">Blocked by design, on every plan</span>
      </div>
    </div>
  </div>
</div>

### Turn On the Request Code

The request code keeps strangers out: only people who have your code — right now, that's us — can even send an access request. If you ever end the engagement, change or disable the code and that door closes for good.

### Keep an Eye on the Activity Log

Go to **Settings → Store activity log** to see every change we make. Filter by user to see exactly what we touched. During an active project, a weekly glance is plenty — and if you ever spot something you don't recognize, flag it to us right away.

### Remove Our Access When We're Done

When the project wraps, revoking us takes one click: **Settings → Users and permissions → Collaborators → Remove access**. Our access ends instantly — no grace period, no leftover sessions.

### A Note on AI Tools

Modern Shopify stores increasingly use AI tools like Shopify Sidekick. These tools interact with store data based on your permission settings. As stores integrate more AI systems, sensible permissions matter even more.

The good news: we can't grant AI tools any extra permissions on your behalf. Only you control AI access levels — that separation is by design.

---

## FAQ

<details class="faq-item" open>
<summary>Will this cost me anything?</summary>

No. Collaborator accounts are free and don't count toward your plan's staff seat limit — our access costs you nothing on any Shopify plan.

</details>

<details class="faq-item">
<summary>Can Wapitee see my bank details or payment settings?</summary>

**No.** Collaborator accounts are blocked from accessing Shopify Payments settings and bank account details by default. This protection exists regardless of which other permissions are granted.

</details>

<details class="faq-item">
<summary>How long does the request code last?</summary>

The code remains active until you change or disable it — it doesn't expire on its own. Once our project wraps up, we recommend rotating it.

</details>

<details class="faq-item">
<summary>Can I approve from my phone?</summary>

Yes. Open the Shopify mobile app → Users section → pending requests appear with notification badges. You can review and approve directly from your phone.

</details>

<details class="faq-item">
<summary>What if I want to remove access mid-project?</summary>

You can revoke access at any time, instantly. Go to Settings → Users and permissions → Collaborators, find our name, and click "Remove access." We lose entry immediately.

</details>

<details class="faq-item">
<summary>Can I limit what Wapitee can see or change?</summary>

Absolutely. When approving our request, you can uncheck any permission category you don't want us to have. You can also adjust permissions after approval at any time without notifying us.

</details>
