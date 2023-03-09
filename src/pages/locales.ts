import { dashboardEn, dashboardPtBr } from './Dashboard'
import { settingsEn, settingsPtBr } from './Settings'
import { assetsEn, assetsPtBr } from './Assets'
import { workordersEn, workordersPtBr } from './Workorders'

const pagesEn = {
  ...dashboardEn,
  ...settingsEn,
  ...assetsEn,
  ...workordersEn
}

const pagesPtBr = {
  ...dashboardPtBr,
  ...settingsPtBr,
  ...assetsPtBr,
  ...workordersPtBr
}

export { pagesEn, pagesPtBr }
