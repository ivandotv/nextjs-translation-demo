import { I18n, Messages } from '@lingui/core';

export async function loadTranslation(locale: string) {
  const catalog = await import(
    `@lingui/loader!./locales/${locale}.po`
    );
  return catalog.messages;
}

export function activateLocale(i18n: I18n, locale: string, messages: Messages) {
  if (locale === 'pseudo') {
    locale = "en";
  }

  i18n.loadAndActivate({ locale, messages })
}

