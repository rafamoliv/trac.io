import { dashboardEn, dashboardPtBr } from './Dashboard'
import { settingsEn, settingsPtBr } from './Settings'
import { assetsEn, assetsPtBr } from './Assets'
import { workordersEn, workordersPtBr } from './Workorders'
import { companiesEn, companiesPtBr } from './Companies'
import { usersEn, usersPtBr } from './Users'

const pagesEn = {
  ...dashboardEn,
  ...settingsEn,
  ...assetsEn,
  ...workordersEn,
  ...companiesEn,
  ...usersEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...settingsPtBr,
  ...assetsPtBr,
  ...workordersPtBr,
  ...companiesPtBr,
  ...usersPtBr
}

export { pagesEn, pagesPtBr }
