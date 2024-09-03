'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx';
import { PiMoneyWavyBold } from 'react-icons/pi';
import { CiUser } from 'react-icons/ci';

const Sidebar = () => {
  const pathname = usePathname();
  const menu = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      href: '/dashboard',
      icon: RxDashboard,
    },
    {
      key: 'transactions',
      name: 'Transactions',
      href: '/dashboard/transactions',
      icon: PiMoneyWavyBold,
    },
    {
      key: 'profile',
      name: 'Profile',
      href: '/dashboard/profile',
      icon: CiUser,
    },
  ];

  return (
    <aside className='bg-white shadow-md text-black w-64 p-4 hidden md:block'>
      <nav>
        <ul>
          {menu.map((value) => (
            <Link href={value.href} key={value.key}>
              <li
                className={`py-2 px-4 flex items-center gap-2 text-lg font-semibold my-2  ${
                  pathname === value.href
                    ? 'bg-black text-white rounded-sm'
                    : ''
                }`}
              >
                {<value.icon className='text-xl' />}
                {value.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
