import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Trans, t } from '@lingui/macro'
import { AboutText, Title } from '../components/AboutText'
import { Switcher } from '../components/Switcher'
import { useRouter } from 'next/router'
import { loadTranslations } from '../utils'

export async function getStaticProps(ctx) {
  const translation = await loadTranslations(
    ctx.locale,
    process.env.NODE_ENV === 'production'
  )
  return {
    props: {
      translation
    }
  }
}

export default function Index() {
  const router = useRouter()
  console.log('index')
  return (
    <div className={styles.container}>
      <Head>
        <title>{t`Translation Demo`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Trans>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Trans>
        </h1>
        <div className={styles.description}>
          <AboutText />
        </div>
        <Switcher></Switcher>
      </main>
    </div>
  )
}
