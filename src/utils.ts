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

  const cardinalRules = new Intl.PluralRules(locale, { type: 'cardinal' });
  const ordinalRules = new Intl.PluralRules(locale, { type: 'ordinal' });

  i18n.loadLocaleData(locale, {
    plurals: (n, ordinal) => {
      return (ordinal ? ordinalRules : cardinalRules).select(n);
    },
  });

  i18n.load(locale, messages)
  i18n.activate(locale)

}
