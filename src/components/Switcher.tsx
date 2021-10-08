import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'

type LOCALES = 'en' | 'sr' | 'es' | 'pseudo'

export function Switcher() {
  const router = useRouter()
  const [locale, setLocale] = useState<LOCALES>(
    router.locale!.split('-')[0] as LOCALES
  )

  const languages: { [key: string]: string } = {
    en: t`English`,
    sr: t`Serbian`,
    es: t`Spanish`
  }

  // disabled for DEMO - so we can demonstrate the 'pseudo' locale functionality
  // if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
  //   languages['pseudo'] = t`Pseudo`
  // }

  useEffect(() => {
    if (router.locale !== locale) {
      router.push(router.pathname, router.pathname, { locale })
    }
  }, [router, locale])

  return (
    <select
      value={locale}
      onChange={(evt) => setLocale(evt.target.value as LOCALES)}
    >
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {languages[locale as unknown as LOCALES]}
          </option>
        )
      })}
    </select>
  )
}
