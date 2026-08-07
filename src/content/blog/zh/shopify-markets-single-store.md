---
title: "Shopify Markets：如何用一个店铺卖向全球（2026 完整指南）"
status: "published"
brand: "wapitee"
topic: "shopify"
lang: "zh"
tags: ["Shopify", "Markets", "多语言", "全球电商"]
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
summary: "Shopify Markets 让单个店铺最多管理 50 个市场，自动适配语言、货币与域名。但单店 = 单一法律主体——需要本地主体销售（如日本）的公司必须另开独立店铺。"
---

> 一个后台管理全球市场，店铺前台自动适配语言、货币与本地化。
> 但「单店 = 单一法律主体」是硬性边界——本地主体销售必须另开店铺。

## 概述

**Shopify Markets** 是 Shopify 官方的国际化功能。在单个店铺内，你可以配置多个国家/地区市场（Market），每个市场拥有独立的域名、语言、货币、产品目录和定价——全部在一个后台统一管理。

### 核心能力

- **单后台、多市场**：商品、库存、内容一次更新，全球生效
- **多语言**：内置翻译工作流（自动翻译 + 人工审校），每个市场可独立制定内容策略
- **多货币**：前端展示本地货币，消费者以本地货币付款
- **多域名/子路径**：支持 `/de`、`de.example.com`、`example.de` 等多种形式
- **按市场定价**：固定价格 / 实时汇率 / 取整汇率
- **SEO**：自动生成 hreflang 标签与本地化 URL

### 规模上限

- 单个店铺最多支持 **50 个市场**（含子市场）——远超大多数品牌的需求
- 标准 Markets 配置在所有 Shopify 套餐中免费；**Grow 及以上套餐**解锁按市场定价、独立产品目录等进阶功能

---

## 核心事实（已核查）

| # | 事实 | 来源 |
|---|---|---|
| 1 | 单个 Shopify 店铺最多可配置 50 个市场，每个市场拥有独立的语言/货币/域名/目录 | Shopify Help Center / Charle 2026 |
| 2 | Markets 的本地货币结账与本地钱包依赖 Shopify Payments | LitOS |
| 3 | **单个店铺只支持一个法律主体**——Markets 无法把不同市场关联到不同公司 | Shopify 官方 / LitOS |
| 4 | 每个需要本地零售主体的国家都要单独开店；**多主体需要 Shopify Plus** | Shopify Blog |
| 5 | Managed Markets（跨境托管）同样不支持单店多商业主体 | Shopify Help Center |
| 6 | 多币种收款最终以公司注册地货币结算，会产生强制换汇 | Shopify / Wapitee 经验 |
| 7 | 定价能力按套餐分级：Basic 受限；Grow+ 解锁完整功能 | LitOS / Charle |
| 8 | 使用第三方支付（Airwallex/PingPong）会失去 Markets 的**多币种结账**（所有市场以店铺默认货币支付）；但**语言/翻译/URL 本地化完全不受影响** | Shopify Help Center（2026-08-05） |

---

## 域名与 URL 结构

多语言页面的呈现方式**直接决定了域名的使用方式**：

### 方案 A：子目录（路径）→ 必须同一店铺

- 使用 `example.com/de`、`example.com/en`——以**路径**区分不同语言/市场
- 这是同一个网站项目的内部路径结构，**必须绑定同一个 Shopify 店铺**
- Shopify 子目录**使用主域名创建**
- 适用于：单一主体跨境、集中式多语言管理

### 方案 B：独立域名/子域名 → 多店逻辑需要换域名

- 每个市场使用独立域名（`example.de`）或子域名（`de.example.com`）
- **一个域名只能绑定一个 Shopify 店铺**——多个域名可以指向同一个店铺，但一个域名不能指向多个店铺
- 多店逻辑**必须使用不同域名**：子域名或新的国家顶级域名
- 适用于：本地主体销售、独立的品牌/市场运营

> **路径方案 = 单店**，适用于 Markets 单店模式；
> **多店 = 多域名**——一个域名绑定一个 Shopify 店铺，这是平台的硬性约束。

---

## 多语言 URL 格式：语言-地区组合

### 格式：语言代码在前，地区代码在后

Shopify 多语言 URL 前缀使用 **IETF BCP 47 语言标签**，结构为 **`语言-地区`**：

| 示例 URL | 语言 | 地区 | 含义 |
|---|---|---|---|
| `example.com/en-ca` | en（英语） | ca（加拿大） | 加拿大英语 |
| `example.com/fr-ca` | fr（法语） | ca（加拿大） | 加拿大法语 |
| `example.com/de-de` | de（德语） | de（德国） | 德国德语 |
| `example.com/es-mx` | es（西班牙语） | mx（墨西哥） | 墨西哥西班牙语 |
| `example.com/zh-sg` | zh（中文） | sg（新加坡） | 新加坡中文 |
| `example.com/en-sg` | en（英语） | sg（新加坡） | 新加坡英语 |

### 关键规则（已核查）

1. **语言在前、地区在后**：`en-sg` 表示「新加坡的英语」，不能反过来
2. **纯语言前缀仅主市场可用**：如 `example.com/fr` 只用于主市场；**次级市场必须使用语言-地区组合**（如 `/fr-ca`、`/en-eu`）
3. **主市场无前缀**：主市场 URL 不带语言前缀（`example.com/products/xxx`）；次级市场自动加前缀（`example.com/en-ca/products/xxx`）
4. **前缀自动生成、不可自定义**：语言段由 Shopify 自动生成（社区案例：无法把 `/ja` 改成 `/jp`，也无法去掉 `en-ca` 中的 `en-`）
5. **地区后缀可自定义**：市场级的「地区后缀」可以设置（如欧洲用 `eu`、加拿大用 `ca`）；语言段自动决定

---

## 局限：单店 = 单一法律主体

这是最容易被忽视、但对出海影响最大的边界。

### 意味着什么

- Shopify Markets **不支持把不同市场关联到不同法律主体**
- 如果你在多个国家用不同公司运营，无法按主体拆分税务处理与收款结算
- 这种情况下，**多店铺（扩展店）仍然是必需的**

### 什么时候会撞上这堵墙

1. **在特定市场以「本地公司」身份销售**——出于税务/法律/信任原因，许多国家要求达到一定规模后以本地主体运营
2. **不同国家对应不同公司主体**——母公司（如香港）+ 子公司/合资公司
3. **按主体报税**——需要以各本地主体独立开票、独立申报
4. **收款主体隔离**——本地公司希望营收直接进入本地账户，而不是经过母公司

---

## 案例：为什么日本需要单独开店

**场景**：母公司主体在香港，主 Shopify 店铺注册在港司名下。日本线上销售额达到某个门槛后：

| 驱动因素 | 说明 |
|---|---|
| **税务合规** | 日本消费税（JCT）：年应税销售额超过 1000 万日元即需注册；2023 年 10 月起小额豁免取消——向日本消费者销售的外国公司必须注册。JCT 注册不需要日本公司，但申报需要指定的日本税务会计师 |
| **法律身份** | 若要以「日本公司」身份开票、履行法定义务（如《特定商业交易法》），必须有日本主体 |
| **消费者信任与支付** | 日本消费者对本地公司的信任度显著更高；本地支付方式（便利店支付、PayPay）通常需要日本主体/本地银行账户 |
| **本地运营** | 退换货、客服、售后、本地库存，本地主体运营更顺畅 |

**结论**：当业务需要「以日本公司身份销售」时，港司主体的单店 Markets 模式就走不通了——日本需要独立的 Shopify 店铺，并填写日本公司信息。

> **需要「本地主体销售」的市场数量 = 需要额外开设的 Shopify 店铺数量（主店 + N 个本地店）**
>
> 纯跨境销售、不需要本地主体 → 单店 Markets 足够。
> 任何需要本地主体的市场 → 该市场必须单独开店。

---

## 对比：单店 Markets vs 多店铺

| 维度 | 单店 Markets | 多店铺（扩展店） |
|---|---|---|
| 后台数量 | 1 | N |
| 运营成本 | 低（一次操作、全球生效） | 高（N 倍操作） |
| 多语言/多货币 | 自动 | 每店独立配置 |
| 按市场定价 | 支持 | 支持（按店铺） |
| 法律主体 | **1 个（硬性限制）** | N 个（每店一个） |
| 税务/收款拆分 | 不支持 | 支持 |
| 本地化深度 | 中等（翻译层） | 高（独立品牌/内容/库存） |
| 最适合 | 单一主体跨境、快速覆盖多国 | 多主体、重度本地运营 |

---

## 常见问题

**Q：单个店铺可以有多少个市场？**
A：最多 50 个市场（含子市场）。大多数品牌实际使用 3–10 个。

**Q：如何避免汇兑损失？**
A：官方路径是 Shopify Payments 多币种账户。第三方支付（Airwallex/PingPong）可以独立收款，但会失去 Markets 的**多币种结账**（所有市场以默认货币支付）。你牺牲的是货币体验，不是多语言能力——**语言/翻译/URL 本地化不受影响**。

**Q：注册 JCT 需要日本公司吗？**
A：不需要。外国公司可以通过日本税务会计师完成 JCT 注册（需要委托书 + 本地会计师）。但「以日本公司身份销售」是另一回事——那需要真实的日本主体 + 独立店铺。

**Q：多主体必须用 Shopify Plus 吗？**
A：进阶的多主体功能（按市场商业主体、结账区块定制）需要 Shopify Plus+。如果只是按主体开设独立的标准店铺，Plus 不是必须的。

**Q：为什么多语言 URL 是 `/en-ca` 而不是 `/en` 或 `/ca`？**
A：Shopify 使用 IETF BCP 47 语言标签作为 URL 前缀，结构是语言-地区（语言在前）。纯语言前缀（如 `/fr`）只用于主市场；次级市场必须使用语言-地区组合（如 `/fr-ca`、`/en-sg`），以区分同一语言在不同国家的市场。
