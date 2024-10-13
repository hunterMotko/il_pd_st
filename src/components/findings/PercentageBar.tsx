'use client'
import Spinner from '@/components/common/Spinner';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PercentageBar = ({ text, data }: { text: string, data: ChartItemData[] }) => {
  const COLORS = ['#6366f1', '#f59e0b', '#d946ef',]
  const daChartCheck = text === "Defense Attorneys" ? false : true
  const filteredData = data.map(item => item.value)
  const filteredLabel = daChartCheck ? 'Shortfall' : ''
  const filteredLabels = data.map(item => item.name)

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text,
        padding: 10,
        font: {
          size: 24
        }
      },
      legend: {
        display: daChartCheck,
        position: 'bottom' as const,
        labels: {
          boxWidth: 50,
          boxHeight: 20,
          padding: 15,
        },
        font: {
          size: 16
        }
      }
    }
  };

  const dataSet = {
    datasets: [{
      label: filteredLabel,
      data: filteredData,
      backgroundColor: daChartCheck ? COLORS[0] : COLORS,
    }],
    labels: filteredLabels
  };

  return !data ? <Spinner className='w-[400] h-[200]' /> :
    (
      <div className='w-full mx-auto h-80'>
        <Bar options={options} data={dataSet} />
      </div>
    )
}

export default PercentageBar;

