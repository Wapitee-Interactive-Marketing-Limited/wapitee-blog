---
title: "如何给合作伙伴开通 Shopify 店铺权限（2026 完整指南）"
status: "published"
brand: "wapitee"
topic: "shopify"
lang: "zh"
tags: ["Shopify", "合作伙伴权限", "Collaborator", "安全", "代运营协作"]
created: "2026-08-06"
updated: "2026-08-06"
verified: "2026-08-06"
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
summary: "Shopify 协作者（Collaborator）权限让 Wapitee 在不占用员工席位、不接触财务数据的情况下操作你的店铺。本指南详解两步授权流程、权限分类、安全最佳实践与常见问题。"
---

> 开通 Wapitee 店铺权限的完整指南 —— 安全、可控、随时可撤销

## 概述

当你与 Wapitee 合作时，我们需要访问你的 Shopify 后台来实施改动——主题、翻译、设置和代码。比起创建一个完整的员工账号（占用席位且权限过大），Shopify 提供了更好的方式：**协作者权限（Collaborator Access）**。

### 我们为什么用它

| 特性 | 收益 |
|---|---|
| **不占员工席位** | 任何套餐下协作者数量不限 |
| **不接触财务数据** | 银行账户与收款信息始终不可见 |
| **随时可撤销** | 一键移除，权限立即终止 |
| **全程留痕** | 每个操作都记录在活动日志中 |

> **要点**
> 协作者权限就像一张**带房间权限的访客卡**——我们可以进入你批准的区域，但永远进不了保险库。

![协作者权限如同访客卡：批准的区域可进入，保险库始终上锁](/blog/images/partner-access/guest-pass.png)

---

## 为什么不直接开一个员工账号？

| 特性 | 协作者（Collaborator） | 员工账号（Staff） |
|---|---|---|
| **占用套餐名额** | 否——不限数量、免费 | 是——2 到 15 个席位 |
| **银行/收款信息** | 永远无法访问 | 可以授权访问 |
| **权限范围** | 按类别细分、粒度可控 | 默认拥有完整后台权限 |
| **操作留痕** | 全程记录 | 全程记录 |
| **最适合** | 代理机构、自由职业者、合作伙伴 | 全职员工 |

员工账号会计入套餐的席位上限。Basic Shopify 包含 2 个员工席位；标准 Shopify 包含 5 个；Advanced 包含 15 个。

协作者账号不计入这些上限——给我们开通权限，不需要你让出任何一个席位。席位是店铺扩张过程中一项容易被忽视的成本，这点值得在意。

员工账号还可能接触到敏感的财务数据。协作者账号**默认碰不到**银行账户信息和 Shopify Payments 设置——这层保护是机制内置的，不需要你额外配置或费心记着去执行。

---

## 运作机制

三方协作，一次安全交接——不共享密码，不承担完整后台权限的风险。

<div class="pa-diagram">
  <span class="pa-diagram__title">协作者权限申请流程</span>
  <div class="pa-flow">
    <div class="pa-panel">
      <span class="pa-label">Wapitee — Partner 后台</span>
      <div class="pa-mock">
        <div class="pa-mock__bar"><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__url"></span></div>
        <div class="pa-mock__body">
          <div class="pa-mock__main">
            <div class="pa-field"></div>
            <div class="pa-checks"><i class="on"></i><i class="on"></i><i></i></div>
            <span class="pa-btn pa-hl">请求访问权限</span>
          </div>
        </div>
      </div>
    </div>
    <span class="pa-arrow">→</span>
    <div class="pa-panel">
      <span class="pa-label">你的店铺 — Shopify 后台</span>
      <div class="pa-mock">
        <div class="pa-mock__bar"><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__dot"></span><span class="pa-mock__url"></span></div>
        <div class="pa-mock__body">
          <div class="pa-mock__nav"><span class="pa-navline"></span><span class="pa-navline"></span><span class="pa-navline pa-navline--on"></span><span class="pa-navline"></span></div>
          <div class="pa-mock__main">
            <div class="pa-request pa-hl"><span class="pa-dot"></span><span class="pa-request__text">新的协作者请求 — Wapitee</span></div>
            <div class="pa-actions"><span class="pa-btn pa-btn--ghost">拒绝</span><span class="pa-btn pa-hl">批准</span></div>
          </div>
        </div>
      </div>
    </div>
    <span class="pa-arrow">→</span>
    <div class="pa-panel">
      <div class="pa-outcome"><span class="pa-outcome__icon">✉️</span><span class="pa-outcome__text">确认邮件</span></div>
      <div class="pa-outcome"><span class="pa-outcome__icon">🔓</span><span class="pa-outcome__text">权限已授予 — 仅限批准的类别</span></div>
    </div>
  </div>
  <span class="pa-note">支付与银行账户信息在每一步都保持锁定。</span>
</div>

1. **Wapitee**（Partner 后台）发起访问请求，指定具体的权限类别
2. **你的店铺**（Shopify 后台）审核并批准请求
3. **权限范围**限定在已批准的类别内——Payments 与银行信息始终被屏蔽

---

## 如何授权（你只需做两步）

你这边只需要做**两件事**，前后大概五分钟，其余全部自动完成。

### 第 1 步：设置协作者请求码

进入 **Settings → Users and permissions → Collaborators**，点击「Enable collaborator request code」。Shopify 会生成一个 4 位数字码（如 `4821`）。把这个码发给我们。

### 第 2 步：批准我们的请求

我们发出访问请求后，你会收到邮件 + 后台内通知。进入 **Settings → Users and permissions → Collaborators**，找到待处理的请求，核对权限类别，点击 **Approve**。

> ⚠️ **重要**
> 4 位请求码是关键的安全闸门。只把它发给合作方（Wapitee）——绝不要公开发布。你可以随时修改或停用它。

---

## 我们会申请哪些权限

对于典型的本地化与开发项目，我们申请以下具体权限类别：

| 权限 | 包含内容 | 状态 |
|---|---|---|
| **Products** | 商品、库存、集合 | ✓ |
| **Content** | 博客文章、页面、Metaobjects | ✓ |
| **Online Store** | 主题、导航、偏好设置 | ✓ |
| **Settings** | 店铺设置、语言、市场 | ✓ |
| **Apps** | 应用安装、销售渠道 | ✓ |
| **Orders** | 订单管理、发货 | 可选 |
| **Payments / Bank** | — | ✗ **永远不可访问**——机制上直接屏蔽 |

我们始终从项目所需的最小权限开始，只有具体任务需要时才会追加申请——每一次扩权都由你来决定。

---

## 如何守住店铺安全

<div class="pa-diagram">
  <span class="pa-diagram__title">你的安全清单</span>
  <div class="pa-list">
    <div class="pa-list__item">
      <span class="pa-list__icon">✓</span>
      <div class="pa-list__body">
        <span class="pa-list__text">启用协作者请求码</span>
        <span class="pa-path">设置 <i>→</i> 用户和权限 <i>→</i> 协作者</span>
      </div>
    </div>
    <div class="pa-list__item">
      <span class="pa-list__icon">✓</span>
      <div class="pa-list__body">
        <span class="pa-list__text">每周查看店铺活动日志</span>
        <span class="pa-path">设置 <i>→</i> 店铺活动日志</span>
      </div>
    </div>
    <div class="pa-list__item">
      <span class="pa-list__icon">✓</span>
      <div class="pa-list__body">
        <span class="pa-list__text">项目结束后移除权限 — 一键操作，权限立即失效</span>
        <span class="pa-path">设置 <i>→</i> 用户和权限 <i>→</i> 协作者 <i>→</i> 移除访问权限</span>
      </div>
    </div>
    <div class="pa-list__item">
      <span class="pa-list__icon">🔒</span>
      <div class="pa-list__body">
        <span class="pa-list__text">支付与银行账户信息 — 协作者永远无法访问</span>
        <span class="pa-path">所有套餐均由系统层面封锁</span>
      </div>
    </div>
  </div>
</div>

### 打开请求码

请求码把陌生人挡在门外：只有拿到码的人——目前就是我们——才能发起访问请求。如果合作结束，修改或停用请求码，这扇门就彻底关上了。

### 常看看活动日志

进入 **Settings → Store activity log** 可以看到我们做的每一项改动，按用户筛选能精确到我们碰了哪些地方。项目进行中，每周扫一眼就够了——如果看到任何你不认识的改动，随时告诉我们。

### 项目做完后，移除我们的权限

项目收尾时，撤销权限只需一键：**Settings → Users and permissions → Collaborators → Remove access**。我们的访问立即终止——没有缓冲期，也没有残留的登录态。

### 关于 AI 工具的权限

现代 Shopify 店铺越来越多地使用 Shopify Sidekick 等 AI 工具。这些工具会基于你的权限设置与店铺数据交互。随着店铺接入更多 AI 系统，合理的权限配置变得更加重要。

好消息是：我们无法代替你给 AI 工具授予任何额外权限。AI 的访问级别只由你控制——这一隔离是机制设计的一部分。

---

## 常见问题

<details class="faq-item" open>
<summary>这会产生费用吗？</summary>

不会。协作者账号免费，也不计入套餐的员工席位上限——任何 Shopify 套餐下，给我们开通权限都不会产生费用。

</details>

<details class="faq-item">
<summary>Wapitee 能看到我的银行信息或收款设置吗？</summary>

**不能。** 协作者账号默认被屏蔽访问 Shopify Payments 设置和银行账户信息。无论授予了哪些其他权限，这项保护始终有效。

</details>

<details class="faq-item">
<summary>请求码有效期多久？</summary>

请求码在你修改或停用之前一直有效，不会自动过期。我们的项目收尾后，建议你轮换一次请求码。

</details>

<details class="faq-item">
<summary>可以用手机批准吗？</summary>

可以。打开 Shopify 手机 App → Users 区域 → 待处理请求会带通知角标，直接在手机上审核批准即可。

</details>

<details class="faq-item">
<summary>项目进行中想撤销权限怎么办？</summary>

你可以随时、即时撤销。进入 Settings → Users and permissions → Collaborators，找到我们的名字，点击「Remove access」，我们会立即失去访问权限。

</details>

<details class="faq-item">
<summary>能限制 Wapitee 查看或修改的范围吗？</summary>

当然可以。批准请求时，你可以取消勾选任何不想授予的权限类别。批准后也可以随时调整权限，无需通知我们。

</details>
