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

const PosNegBar = ({ text, data }: { text: string, data: ChartItemData[] }) => {
  const COLORS = ['#6366f1', '#f59e0b', '#d946ef',]
  const daChartCheck = text === "Defense Attorneys" ? false : true
  const filteredData = data.map(item => item.value > 1 ? Math.round(item.value) : Number(item.value.toFixed(1)))
  const filteredLabel = daChartCheck ? 'Shortfall' : ''
  const filteredLabels = data.map(item => item.name)

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text,
        font: {
          size: 20
        }
      },
      legend: {
        display: daChartCheck
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

export default PosNegBar;
