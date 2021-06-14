import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { initTranslation } from '../utils'
import '../styles/globals.css'

initTranslation(i18n)

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale
  const firstRender = useRef(true)

  if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    firstRender.current = false
  }

  useEffect(() => {
    if (pageProps.translation && !firstRender.current) {
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
  }, [locale])

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}

export default MyApp
