import { dashboardEn, dashboardPtBr } from './Dashboard'
import { settingsEn, settingsPtBr } from './Settings'
import { assetsEn, assetsPtBr } from './Assets'
import { workordersEn, workordersPtBr } from './Workorders'
import { companiesEn, companiesPtBr } from './Companies'

const pagesEn = {
  ...dashboardEn,
  ...settingsEn,
  ...assetsEn,
  ...workordersEn,
  ...companiesEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...settingsPtBr,
  ...assetsPtBr,
  ...workordersPtBr,
  ...companiesPtBr
}

export { pagesEn, pagesPtBr }
