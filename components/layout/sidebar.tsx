'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const menu = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      key: 'transactions',
      name: 'Transactions',
      href: '/dashboard/transactions',
    },
    {
      key: 'profile',
      name: 'Profile',
      href: '/dashboard/profile',
    },
  ];

  return (
    <aside className='bg-white shadow-md text-black w-64 p-4 hidden md:block'>
      <nav>
        <ul>
          {menu.map((value) => (
            <li
              className={`py-2 px-4 font-semibold  ${
                pathname === value.href ? 'bg-black text-white rounded-sm' : ''
              }`}
              key={value.key}
            >
              <Link href={value.href}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
