export async function loadTranslations(locale){
  const { messages } = await import(`@lingui/loader!../../locales/${locale}/messages.po`);
}
