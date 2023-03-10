import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from "highcharts/modules/accessibility";
import highchartsMore from "highcharts/highcharts-more";
import { useTranslation } from 'react-i18next'

highchartsMore(Highcharts);
highchartsAccessibility(Highcharts);

interface radialBarChartProps {
    data: []
}

interface chartDataProps extends radialBarChartProps {
    name: string
    healthscore: string
}

export const RadialBarChart = ({ data }: radialBarChartProps) => {
    const { t } = useTranslation('pgDashboard')

    const chartOptions = {
        chart: {
            type: 'column',
            inverted: true,
            polar: true
        },
        title: {
            text: ''
        },
        tooltip: {
            outside: true
        },
        pane: {
            size: '75%',
            innerSize: '25%',
            endAngle: 270
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                align: 'right',
                useHTML: true,
                allowOverlap: true,
                step: 1,
                y: 3,
                style: {
                    fontSize: '13px'
                }
            },
            lineWidth: 0,
            categories: data.map((item: chartDataProps) => item?.name)
        },
        yAxis: {
            crosshair: {
                enabled: true,
                color: '#333'
            },
            lineWidth: 0,
            tickInterval: 25,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                groupPadding: 0.15
            }
        },
        series: [{
            name: t('cards.maxTemp'),
            showInLegend: false,
            data: data.map((item: chartDataProps) => item?.healthscore),
            colorByPoint: true
        }]
    }

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
}