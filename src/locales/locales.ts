import { componentsEn, componentsPtBr } from '@/components'
import { pagesEn, pagesPtBr } from '@/pages'
import { storeEn, storePtBr } from '@/store'
import { templatesEn, templatesPtBr } from '@/templates'

export const defaultLocales = ['en', 'ptbr']

const locales = {
  en: {
    ...pagesEn,
    ...componentsEn,
    ...storeEn,
    ...templatesEn
  },
  ptbr: {
    ...pagesPtBr,
    ...componentsPtBr,
    ...storePtBr,
    ...templatesPtBr
  }
}

export default locales
