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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import { Bar } from 'react-chartjs-2';

type MultiData = {
  [key: string]: {
    allocated: number
    required: number
    shortfall: number
  }
}

const MultiBar = ({ text, data }: { text: string, data: MultiData}) => {
  const allocated = Object.values(data).map(item => Math.round(item.allocated))
  const required = Object.values(data).map(item => Math.round(item.required))
  const shortfall = Object.values(data).map(item => Math.round(item.shortfall))

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: text,
        font: {
          size: 20
        }
      }
    },
  };

  let d = {
    labels: data ? Object.keys(data) : [],
    datasets: [
      {
        label: 'Allocated',
        data: allocated,
        backgroundColor: '#6366f1',
      },
      {
        label: 'Required',
        data: required,
        backgroundColor: '#f59e0b',
      },
      {
        label: 'Shortfall',
        data: shortfall,
        backgroundColor: '#d946ef',
      },
    ],
  };

  return !data ? <Spinner className='w-[400] h-[200]' /> :
    (
      <div className='w-full mx-auto h-80'>
        <Bar options={options} data={d} />
      </div>
    )
}

export default MultiBar
