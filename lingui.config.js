module.exports = {
  locales: ['en', 'sr', 'es', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'src/translations/locales/{locale}/messages',
      include: ['src/pages', 'src/components']
    }
  ],
  format: 'po'
  // runtimeConfigModule: ['./src/initTranslations.js', 'i18nGlobal']
  // runtimeConfigModule: ['./src/initTranslationss', 'i18n']
  // runtimeConfigModule: ['@lingui/cores', 'i18n']
}
