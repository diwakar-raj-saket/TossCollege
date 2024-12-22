'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ list }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 p-2 bg-primary rounded-tr-md rounded-br-md">
      {list.map((item, index) => (
        <Link href={item.url} key={index} className={`inline-block ${pathname === item.url ? 'text-black' : ''}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
