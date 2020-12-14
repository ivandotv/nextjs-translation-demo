import '../styles/globals.css'
import { I18nProvider } from '@lingui/react'
import { useRouter } from 'next/router'
import { i18n } from '../initTranslations'
import { useEffect, useState } from 'react'

let firstRender = true

console.log('app server')

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale

  if (firstRender) {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation)
    }
    console.log('first render')
    i18n.activate(locale)
  }

  useEffect(() => {
    if (pageProps.translation && !firstRender) {
      console.log('use effect ', locale)
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
    firstRender = false
  }, [locale])

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}

export default MyApp
