import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({chartData}) => {
  return (
    
    <div className='relative h-[100%]'>
        <Bar data={chartData}> 

        </Bar>
    </div>
  )
}

export default LineChart