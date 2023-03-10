import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from "highcharts/modules/accessibility";
import { useTranslation } from 'react-i18next'
import { chartColumnDataProps, chartProps } from '../types';

highchartsAccessibility(Highcharts);

export const ColumnChart = ({ data }: chartProps) => {
    const { t } = useTranslation('pgDashboard')

    const chartOptions = {
        chart: {
            type: 'column',
            height: 196
        },
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: t('cards.healthscore')
            }
        },
        xAxis: {
            categories: data.map((item: chartColumnDataProps) => item?.name),
        },
        series: [
            {
                name: t('cards.healthscore'),
                colorByPoint: true,
                data: data.map((item: chartColumnDataProps) => item?.healthscore),
                showInLegend: false,
            },
        ]
    }

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
}