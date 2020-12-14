import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'
// import { i18nGlobal } from '../initTranslations'

export function Switcher() {
  const router = useRouter()
  const [locale, setLocale] = useState(router.locale.split('-')[0])

  const firstLang = 'First -Eng'
  const languages = {
    en: t`${firstLang}`,
    sr: t`Serbian`,
    es: t`Spanish`
  }

  const locales = Object.keys(languages)

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale: locale })
  }, [locale])

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
