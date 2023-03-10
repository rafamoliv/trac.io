import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from "highcharts/modules/accessibility";
import { useTranslation } from 'react-i18next'

highchartsAccessibility(Highcharts);

interface columnChartProps {
    data: []
}

interface chartDataProps extends columnChartProps {
    name: string
    healthscore: string
}

export const ColumnChart = ({ data }: columnChartProps) => {
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
            categories: data.map((item: chartDataProps) => item?.name),
        },
        series: [
            {
                name: t('cards.healthscore'),
                colorByPoint: true,
                data: data.map((item: chartDataProps) => item?.healthscore),
                showInLegend: false,
            },
        ]
    }

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
}