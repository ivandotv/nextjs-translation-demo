import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { activateLocale } from '../utils';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale!
  const firstRender = useRef(true)

  // run only once on the first render (for server side)
  if (pageProps.translation && firstRender.current) {
    activateLocale(i18n, locale, pageProps.translation)
    firstRender.current = false
  }

  useEffect(() => {
    if (pageProps.translation) {
      activateLocale(i18n, locale, pageProps.translation)
    }
  }, [locale, pageProps.translation])

  return (
    <>
      <Head>
        {router.locales!.concat('x-default').map((locale: string) => {
          const localePath = locale === 'x-default' ? '' : `${locale}`
          const href = `https://linguijs-translation-demo.vercel.app/${localePath}${router.asPath}`
          return locale === 'pseudo' ? null : (
            <link key={locale} rel="alternate" hrefLang={locale} href={href} />
          )
        })}
      </Head>
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  )
}

export default MyApp
