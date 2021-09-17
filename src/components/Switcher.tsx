import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'

type LOCALES = 'en' | 'sr' | 'es' | 'pseudo'

export function Switcher() {
  const router = useRouter()
  const [locale, setLocale] = useState<LOCALES>(
    router.locale!.split('-')[0] as LOCALES
  )

  const languages = {
    en: t`English`,
    sr: t`Serbian`,
    es: t`Spanish`,
    pseudo: t`Pseudo`
  }

  const locales = Object.keys(languages) as unknown as LOCALES[]

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale: locale })
  }, [locale, router])

  return (
    <select
      value={locale}
      onChange={(evt) => setLocale(evt.target.value as LOCALES)}
    >
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
