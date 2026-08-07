// ============================================
// Wapitee Blog — UI translations (en / zh)
// Blog is deployed independently from the main
// site, so it maintains its own i18n layer.
// ============================================

export type Lang = 'en' | 'zh';

export const locales: Record<Lang, string> = {
  en: 'en-US',
  zh: 'zh-CN',
};

const translations = {
  en: {
    // Nav
    'nav.blog': 'BLOG',
    'nav.contact': 'CONTACT US',
    'nav.switchTo': '中文',
    'nav.switchAria': 'Switch to Chinese',

    // Index hero
    'index.title.1': 'Insights for brands',
    'index.title.2': 'going global',
    'index.desc':
      'Practical guides, field notes, and frameworks on GTM strategy, influencer marketing, e-commerce platforms, and crowdfunding — built from real campaigns.',

    // Index cards
    'index.allPosts': 'All Posts',
    'index.featured': 'Featured',
    'index.readArticle': 'Read Article',
    'index.noArticles.title': 'No articles yet',
    'index.noArticles.desc': "We're working on our first articles. Check back soon.",
    'index.filterEmpty': 'No articles in this topic yet. Check back soon.',

    // Article page
    'article.minRead': (n: number) => `${n} min read`,
    'article.tocTitle': 'On this page',
    'article.relatedTitle': 'Related Articles',
    'article.relatedEmpty': 'More articles coming soon.',
    'article.verification': 'Information Verification',
    'article.verified': 'Verified',

    // CTA
    'cta.title': 'Need help with your global launch?',
    'cta.desc':
      'From GTM strategy to influencer marketing, website development, and crowdfunding — Wapitee is your long-term co-pilot for going global.',
    'cta.button': 'Talk to us',

    // Footer
    'footer.desc':
      'We are a creative studio that specializes in providing high-quality design and branding solutions to businesses and individuals',
    'footer.home': 'Home',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.terms': 'Term & Conditions',
    'footer.privacy': 'Privacy Policy',
  },

  zh: {
    // Nav
    'nav.blog': '博客',
    'nav.contact': '联系我们',
    'nav.switchTo': 'EN',
    'nav.switchAria': '切换到英文',

    // Index hero
    'index.title.1': '品牌出海',
    'index.title.2': '洞察与实践',
    'index.desc':
      '关于 GTM 战略、红人营销、电商平台与众筹的实用指南、一线笔记与方法论——全部来自真实项目。',

    // Index cards
    'index.allPosts': '全部文章',
    'index.featured': '精选',
    'index.readArticle': '阅读全文',
    'index.noArticles.title': '暂无文章',
    'index.noArticles.desc': '我们正在撰写首批文章，敬请期待。',
    'index.filterEmpty': '该主题下暂无文章，敬请期待。',

    // Article page
    'article.minRead': (n: number) => `约 ${n} 分钟阅读`,
    'article.tocTitle': '本页目录',
    'article.relatedTitle': '相关文章',
    'article.relatedEmpty': '更多文章即将上线。',
    'article.verification': '信息核对',
    'article.verified': '核查日期',

    // CTA
    'cta.title': '需要帮助你的品牌走向全球？',
    'cta.desc':
      '从 GTM 战略、红人营销，到网站开发与众筹——Wapitee 是你出海路上的长期伙伴。',
    'cta.button': '联系我们',

    // Footer
    'footer.desc':
      '我们是一家创意工作室，专注于为企业和个人提供高品质的设计与品牌解决方案',
    'footer.home': '首页',
    'footer.blog': '博客',
    'footer.careers': '加入我们',
    'footer.terms': '条款与条件',
    'footer.privacy': '隐私政策',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['en'];

/** Look up a UI string for the given language. */
export function t(lang: Lang, key: TranslationKey): string {
  const value = translations[lang][key];
  return typeof value === 'string' ? value : '';
}

/** Reading time needs the computed minutes, so it gets its own helper. */
export function tMinRead(lang: Lang, minutes: number): string {
  return translations[lang]['article.minRead'](minutes);
}

/** Format a date string (YYYY-MM-DD) for the given language. */
export function formatDate(lang: Lang, date: string, style: 'long' | 'short' = 'long'): string {
  return new Date(date).toLocaleDateString(locales[lang], {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}

/** Public site path prefix for a language ('' for default en, '/zh' for zh). */
export function langPrefix(lang: Lang): string {
  return lang === 'zh' ? '/zh' : '';
}

/** Build the URL of the same page in the other language. */
export function alternatePath(lang: Lang, path: string): string {
  return lang === 'zh' ? path : `/zh${path === '/' ? '/' : path}`;
}
