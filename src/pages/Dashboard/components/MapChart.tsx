import * as Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'
import highchartsAccessibility from "highcharts/modules/accessibility"
import mapBrazil from '@highcharts/map-collection/countries/br/br-all.topo.json'
import { useTranslation } from 'react-i18next'
import config from '../Dashboard.config'
import { theme } from '@/styles'

highchartsAccessibility(Highcharts);

export const MapChart = (props: HighchartsReact.Props) => {
    const { t } = useTranslation('pgDashboard')

    const chartOptions: Highcharts.Options = {
        chart: {
            height: 288
        },
        title: {
            text: ''
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            min: 0,
            max: 30,
            dataClasses: [{
                from: 0,
                to: 9,
                color: theme.colors.primary.light
            }, {
                from: 10,
                to: 19,
                color: theme.colors.primary.medium
            }, {
                from: 20,
                to: 30,
                color: theme.colors.primary.dark
            }]
        },
        series: [{
            name: t('cards.activeCustomers'),
            type: 'map',
            mapData: mapBrazil,
            data: config.mapChartData as (number | Highcharts.SeriesMapDataOptions | [string, number])[],
            states: {
                hover: {
                    color: theme.colors.primary.lightest
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    }

    return <HighchartsReact
        options={chartOptions}
        highcharts={Highcharts}
        constructorType={'mapChart'}
        {...props}
    />
}

