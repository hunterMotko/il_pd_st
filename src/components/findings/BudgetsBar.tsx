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

const BudgetsBar = ({ text, data }: { text: string, data: ChartItemData[] }) => {
  const COLORS = ['#6366f1', '#d946ef']
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: text,
        font: {
          size: 24
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        ticks: {
           // @ts-ignore: Unreachable code error
          callback: v => v.toLocaleString("en-US", { style: "currency", currency: "USD" })
        }
      }
    }
  };

  const dataSet = {
    datasets: [{
      label: '',
      data: data.map(item => item.value),
      backgroundColor: COLORS,
    }],
    labels: data.map(item=>item.name) 
  };

  return !data ? <Spinner className='w-[400] h-[200]' /> :
    (
      <div className='w-full mx-auto h-80'>
        <Bar options={options} data={dataSet} />
      </div>
    )
}

export default BudgetsBar;

