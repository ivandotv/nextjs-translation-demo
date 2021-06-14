import { I18n } from '@lingui/core'
import { en, es, sr } from 'make-plural/plurals'

export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    sr: { plurals: sr },
    es: { plurals: es },
    pseudo: { plurals: en }
  })
}

export async function loadTranslations(locale: string, isProduction = true) {
  let data
  if (isProduction) {
    data = await import(`./translations/locales/${locale}/messages`)
  } else {
    data = await import(
      `@lingui/loader!./translations/locales/${locale}/messages.po`
    )
  }
  return data.messages
}
