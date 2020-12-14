import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Trans } from '@lingui/macro'
import { AboutText, Title } from '../components/AboutText'
import { Switcher } from '../components/Switcher'
import { useRouter } from 'next/router'

export async function getStaticProps(ctx) {
  const { messages } = await import(
    `@lingui/loader!../translations/locales/${ctx.locale}/messages.po`
  )

  console.log('ctx locale', ctx.locale)
  return {
    props: {
      translation: messages
    }
  }
}

export default function Index() {
  const router = useRouter()
  console.dir(router)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {router.pathname}
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
