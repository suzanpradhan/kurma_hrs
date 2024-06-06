'use client';

import AlertDialog from '@/core/ui/components/AlertDialog';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import PageBar from '@/core/ui/karma/src/components/PageBar';
import { AddSquare } from 'iconsax-react';
import { useState } from 'react';

export default function ReportListingPage() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [onDelete] = useState<any>(undefined);

  return (
    <>
      <AlertDialog
        isOpen={modalIsOpen}
        deleteContent={`Ticket: ${onDelete}`}
        onClickNo={() => {
          setIsOpen(false);
        }}
        onClickYes={() => {}}
      />
      <div className="@container/reportCard h-full">
        <PageBar
          leading={
            <div className="text-base font-bold text-dark-500">Reports</div>
          }
        >
          <div className="flex">
            <Buttons
              className="h-8"
              textClassName="hidden @xl/reportCard:block"
              text="Add new report"
              buttonType="bordered"
              type="link"
              href="/admin/activities/reports/create"
              prefix={<AddSquare size={18} variant="Bold" className="mr-1" />}
            />
          </div>
        </PageBar>
        <div className="p-4 flex flex-col gap-2 items-center @xl/reportCard:items-end overflow-y-auto h-[calc(100vh-9.25rem)] custom-scrollbar"></div>
        <PageBar leading={<div></div>}>
          <div className="flex items-center justify-center"></div>
        </PageBar>
      </div>
    </>
  );
}
