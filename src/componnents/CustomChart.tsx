import { useTheme } from "styled-components";
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from "react-chartjs-2";
import type { CustomChartProps } from "@/types";

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

export function CustomChart(props: CustomChartProps) {
    const { data, labels, type } = props;
    const theme = useTheme();

    const options = {
        responsive: true,
        scales: {
            x: {
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    color: theme.typographies.subtitle,
                },
            },
            y: {
                border: {
                    display: false,
                },
                grid: {
                    color: theme.typographies.subtitle,
                },
                ticks: {
                    color: theme.typographies.subtitle,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    const chartData = {
        labels,
        datasets: [
            {
                data,
                borderColor: 'rgb(12,112,242)',
                backgroundColor: 'rgb(12,112,242)',
            }
        ],
    };

    return type === 'bar' ? (
        <Bar options={options} data={chartData} />
    ) : (
        <Line options={options} data={chartData} />
    );
}