import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'
// import { i18nGlobal } from '../initTranslations'

export function Switcher() {
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale.split('-')[0])

  const test = t`English`
  const languages = {
    en: test,
    sr: t`Serbian`,
    es: t`Spanish`,
    pseudo: t`Pseudo`
  }

  const locales = Object.keys(languages)

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale: locale })
  }, [locale])

  console.log('s locale ', locale)
  return (
    <select value={locale} onChange={(evt) => setLocale(evt.target.value)}>
      {locales.map((locale) => {
        return (
          <option value={locale} key={locale}>
            {languages[locale]}
          </option>
        )
      })}
    </select>
  )
}
