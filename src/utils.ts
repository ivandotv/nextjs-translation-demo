export async function loadTranslations(locale: string) {
  const { messages } = await import(
    `@lingui/loader!../../locales/${locale}/messages.po`
  )
}
