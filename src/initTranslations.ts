import { I18n } from '@lingui/core'
import { en, es, sr } from 'make-plural/plurals'
import defaultCatalog from './translations/locales/en/messages'

export function initTranslationss(i18n: I18n) {
  i18n.test = 'ivan'
  //load default english
  console.log(defaultCatalog)

  i18n.loadLocaleData({
    en: { plurals: en },
    sr: { plurals: sr },
    es: { plurals: es },
    pseudo: { plurals: en }
  })

  i18n.load('en', defaultCatalog.messages)
  i18n.activate('en')
}
