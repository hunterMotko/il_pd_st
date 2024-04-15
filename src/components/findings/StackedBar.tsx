"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Spinner from '@/components/common/Spinner';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type StackedBarData = {
  [key: string]: {
    [key: string]: number
  }
}

const StackedBar = ({ text, data }: { text: string, data: StackedBarData }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: text,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const labels = Object.keys(data);
  const support: number[] = []
  const mh: number[] = []
  const inv: number[] = []

  Object.values(data).map((item) => {
    support.push(item['Other Support Staff'])
    mh.push(item['MH Staff'])
    inv.push(item['Investigators'])
  });

  const d = {
    labels,
    datasets: [
      {
        label: 'Other Support Staff',
        data: support,
        backgroundColor: '#6366f1',
      },
      {
        label: 'MH Staff',
        data: mh,
        backgroundColor: '#f59e0b',
      },
      {
        label: 'Investigators',
        data: inv,
        backgroundColor: '#d946ef',
      },
    ],
  };

  return !data ? <Spinner className='w-[400] h-[200]' /> : (
    <div className='w-full mx-auto h-80'>
      <Bar options={options} data={d} />
    </div >
  )
}

export default StackedBar;
