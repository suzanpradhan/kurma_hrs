import Buttons from '@/core/ui/karma/src/components/Buttons';
import PageBar from '@/core/ui/karma/src/components/PageBar';
import { AddSquare } from 'iconsax-react';
export default function AllEmployeesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <PageBar
        leading={
          <div className="text-base font-bold text-dark-500">All Employee</div>
        }
      >
        <div className="flex">
          <Buttons
            text="New Employee"
            className="h-8 "
            href="/admin/employees/allemployees/mutate"
            type="link"
            prefix={<AddSquare size={18} variant="Bold" className="mr-1" />}
          />
        </div>
      </PageBar>
      {children}
    </div>
  );
}
