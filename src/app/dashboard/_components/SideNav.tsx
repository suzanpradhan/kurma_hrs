'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaCircleDot } from 'react-icons/fa6';
import { IoBagHandleSharp } from 'react-icons/io5';
import { RiFileCopy2Fill } from 'react-icons/ri';
import { TfiDashboard } from 'react-icons/tfi';

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: <TfiDashboard size={24} />,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Navigation One',
      icon: <IoBagHandleSharp size={24} />,
      path: '',
    },
    {
      id: 3,
      name: 'Navigation Two',
      icon: <RiFileCopy2Fill size={24} />,
      path: '/dashboard/navigationTwo',
    },
  ];

  const subNav = [
    {
      id: 4,
      name: 'Sub Nav One',
      icon: <FaCircleDot size={20} />,
      path: '/dashboard/navigationOne/subNavOne',
    },
    {
      id: 5,
      name: 'Sub Nav Two',
      icon: <FaCircleDot size={20} />,
      path: '/dashboard/navigationOne/subNavTwo',
    },
  ];

  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (id: any) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="border shadow-md h-screen bg-[#F2F5F7]">
      <h1 className="p-8 text-xl font-bold">ATTENDANCE</h1>
      <ul className="ml-6 ">
        {menuList.map((item) => (
          <li key={item.id} className="mb-2">
            <div
              onClick={() => handleMenuClick(item.id)}
              className="flex items-center text-[#5A5F65] p-4 hover:bg-white hover:w-[205px] hover:text-black rounded-lg border-[#0177FF] border-spacing-2 cursor-pointer group"
            >
              <Link href={item.path} legacyBehavior>
                <a className="flex items-center w-full">
                  <span className="icon group-hover:text-[#0679FF]">
                    {item.icon}
                  </span>
                  <span className="ml-4">{item.name}</span>
                </a>
              </Link>
            </div>
            {item.id === 2 && activeMenu === 2 && (
              <ul className="ml-8 mt-2">
                {subNav.map((subItem) => (
                  <li
                    key={subItem.id}
                    className="flex items-center h-12 text-[#5A5F65] p-2 hover:bg-white hover:h-12 hover:w-[172px] hover:text-black rounded-lg border-[#0177FF] border-spacing-2 cursor-pointer group"
                  >
                    <Link href={subItem.path} legacyBehavior>
                      <a className="flex items-center w-full">
                        <span className="icon group-hover:text-[#0679FF]">
                          {subItem.icon}
                        </span>
                        <span className="ml-4">{subItem.name}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
