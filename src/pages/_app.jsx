import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { initTranslationss } from '../initTranslations'
import '../styles/globals.css'

let firstRender = true
initTranslationss(i18n)

console.log('app server')

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale
  if (firstRender) {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
    console.log('first render')
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
