/** GA4 カスタムイベント名（teams/asaitech-homepage/KPI.md と一致） */
export const analyticsEvents = {
  heroCtaClick: 'hero_cta_click',
  heroSecondaryClick: 'hero_secondary_click',
  contactSectionView: 'contact_section_view',
  mailtoClick: 'mailto_click',
  navContactClick: 'nav_contact_click',
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];
