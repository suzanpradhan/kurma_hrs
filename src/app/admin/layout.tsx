'use client';

import AppBar from '@/core/ui/karma/src/components/AppBar';
import SideBarNavGroup from '@/core/ui/karma/src/components/SideBar/SideBarNavGroup';
import SideBarNavLink from '@/core/ui/karma/src/components/SideBar/SideBarNavLink';
import { Logout, NotificationBing } from 'iconsax-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="relative overflow-hidden">
      <AppBar
        onSideBarToggle={() => {
          setToggle(!toggle);
        }}
        leading={
          <Link href="/admin" className="w-10 ml-1 h-20 relative">
            <h1 className="text-white mt-7 w-48 font-semibold">
              Attendance System
            </h1>
          </Link>
        }
      >
        <button className="w-9 h-9 bg-accentBlue-400 rounded-md flex items-center justify-center">
          <NotificationBing className="text-white" variant="Bold" size={20} />
        </button>
        <button
          className="w-9 h-9 bg-accentBlue-400 rounded-md flex items-center justify-center"
          onClick={() => {
            signOut({ callbackUrl: '/login', redirect: true });
          }}
        >
          <Logout className="text-white" />
        </button>
      </AppBar>
      <div className="min-h-[calc(100vh-3.25rem)] gap-2 overflow-hidden">
        <div
          className={
            `bg-white min-w-[15rem] flex flex-col px-2 py-4 left-0 absolute top-[3.25rem] h-[calc(100vh-3.25rem)] overflow-y-auto custom-scrollbar ` +
            (toggle ? '' : '')
          }
        >
          <SideBarNavLink title="Dashboard" link="/admin/dashboard" />
          <SideBarNavGroup title="Activities" segment="/admin/activities">
            <SideBarNavLink title="Report" link="/admin/activities/reports" />
            <SideBarNavLink
              title="Complains"
              link="/admin/activities/complains"
            />
          </SideBarNavGroup>
          <SideBarNavGroup title="Employees" segment="/admin/">
            <SideBarNavLink
              title="All Employees"
              link="/admin/employees/allemployees"
            />
            <SideBarNavLink
              title="New Employee"
              link="/admin/employees/newemployee"
            />
          </SideBarNavGroup>
        </div>
        <div
          className={
            `bg-white flex-1 transition duration-200 ease-in-out absolute top-[3.25rem] w-[calc(100%-15.5rem)] max-lg:w-full h-[calc(100vh-3.25rem)] left-[15.5rem] overflow-y-auto custom-scrollbar ` +
            (toggle ? 'max-lg:-translate-x-[15.5rem]' : '')
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
