import { dashboardEn, dashboardPtBr } from './Dashboard'
import { settingsEn, settingsPtBr } from './Settings'
import { assetsEn, assetsPtBr } from './Assets'
import { workordersEn, workordersPtBr } from './Workorders'
import { companiesEn, companiesPtBr } from './Companies'
import { usersEn, usersPtBr } from './Users'
import { signInEn, signInPtBr } from './SignIn'

const pagesEn = {
  ...dashboardEn,
  ...settingsEn,
  ...assetsEn,
  ...workordersEn,
  ...companiesEn,
  ...usersEn,
  ...signInEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...settingsPtBr,
  ...assetsPtBr,
  ...workordersPtBr,
  ...companiesPtBr,
  ...usersPtBr,
  ...signInPtBr
}

export { pagesEn, pagesPtBr }
