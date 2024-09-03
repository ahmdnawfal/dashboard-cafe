import ChartComponent from '@/components/dashboard/chart-component';
import { Card, CardContent } from '@/components/ui/card';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import { FaMoneyCheckDollar } from 'react-icons/fa6';

const page = () => {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        <Card>
          <CardContent className='py-4'>
            <div className='flex justify-between items-center'>
              <div className='space-y-4'>
                <p className='text-xl font-bold'>Total Transactions</p>
                <p className='text-xl font-bold'>20</p>
              </div>
              <div>
                <FaMoneyCheckDollar className='text-4xl' />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='py-4'>
            <div className='flex justify-between items-center'>
              <div className='space-y-4'>
                <p className='text-xl font-bold'>Total Income</p>
                <p className='text-xl font-bold text-green-900'>
                  IDR 10.000.000
                </p>
              </div>
              <div>
                <FaArrowAltCircleUp className='text-4xl text-green-900' />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='py-4'>
            <div className='flex justify-between items-center'>
              <div className='space-y-4'>
                <p className='text-xl font-bold'>Total Expense</p>
                <p className='text-xl font-bold text-red-900'>IDR 2.000.000</p>
              </div>
              <div>
                <FaArrowAltCircleDown className='text-4xl text-red-900' />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='space-y-4'>
        <p className='text-2xl font-bold'>Income & Expense Last Year</p>
        <ChartComponent />
      </div>
    </div>
  );
};

export default page;
