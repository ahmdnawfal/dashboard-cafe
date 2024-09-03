'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', income: 186, expense: 80 },
  { month: 'February', income: 305, expense: 200 },
  { month: 'March', income: 237, expense: 120 },
  { month: 'April', income: 73, expense: 190 },
  { month: 'May', income: 209, expense: 130 },
  { month: 'June', income: 214, expense: 140 },
];

const chartConfig = {
  income: {
    label: 'Income',
    color: '#000000',
  },
  expense: {
    label: 'Expense',
    color: '#1c1c1e',
  },
} satisfies ChartConfig;

const ChartComponent = () => {
  return (
    <ChartContainer config={chartConfig} className='max-h-[500px] w-full'>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey='income' fill='var(--color-income)' radius={4} />
        <Bar dataKey='expense' fill='var(--color-expense)' radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartComponent;
