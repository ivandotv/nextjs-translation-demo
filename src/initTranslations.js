import { setupI18n } from '@lingui/core'
import defaultCatalog from './translations/locales/en/messages'
import { en, sr, es } from 'make-plural/plurals'

// export const i18nGlobal = i18n

export const i18n = setupI18n()
//load default english
console.log(defaultCatalog)
i18n.load('en', defaultCatalog.messages)

i18n.loadLocaleData({
  en: { plurals: en },
  sr: { plurals: sr },
  es: { plurals: es }
})

i18n.activate('en')
