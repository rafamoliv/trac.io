import { systemPagesEn, systemPagesPtBr } from './SystemPage'
import { authPagesEn, authPagesPtBr } from './AuthPage'

const templatesEn = {
  ...systemPagesEn,
  ...authPagesEn
}

const templatesPtBr = {
  ...systemPagesPtBr,
  ...authPagesPtBr
}

export { templatesEn, templatesPtBr }
