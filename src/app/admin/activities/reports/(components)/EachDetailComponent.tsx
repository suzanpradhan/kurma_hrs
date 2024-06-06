'use client';

import AlertDialog from '@/core/ui/components/AlertDialog';
import Selector from '@/core/ui/components/Selector';
import { Spinner } from '@/core/ui/karma/src/components';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import PageBar from '@/core/ui/karma/src/components/PageBar';
import { CloseSquare, Edit2, Trash } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AttachmentsTab from './AttachmentsTab';
import DetailTab from './DetailTab';
import InvestigationTab from './InvestigationTab';
import ResolutionTab from './ResolutionTab';

export default function EachDetailComponent() {
  const navigator = useRouter();
  const [tab, setTab] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [onDelete, setOnDelete] = useState<any>(undefined);

  return (
    <>
      <AlertDialog
        isOpen={modalIsOpen}
        deleteContent={`Ticket: ${onDelete}`}
        onClickNo={() => {
          setIsOpen(false);
        }}
        onClickYes={async () => {
          if (onDelete) {
            await Promise.resolve();
            navigator.push('/admin/activities/reports');
          }
          setIsOpen(false);
          setOnDelete(undefined);
        }}
      />
      <div className="flex flex-col">
        <>
          <PageBar
            leading={
              <div className="flex flex-col pt-6 pb-4">
                <div className="text-sm font-medium text-primaryGray-500">
                  Report #{'hg'}
                </div>
                <div className="text-base font-bold text-dark-500">{'jh'}</div>
                <div className="text-sm font-normal text-primaryGray-500">
                  {'hh'}
                </div>
              </div>
            }
            bottom={
              <div className="flex gap-4 text-base font-normal text-primaryGray-500 pb-2">
                <button
                  className={
                    tab == 0
                      ? 'text-dark-500 font-semibold relative text-sm'
                      : 'text-dark-500 font-normal text-sm'
                  }
                  onClick={() => {
                    setTab(0);
                  }}
                >
                  DETAILS
                  {tab == 0 ? (
                    <div className="absolute top-[calc(100%+6px)] h-[2px] w-full bg-dark-500 rounded-md"></div>
                  ) : (
                    <></>
                  )}
                </button>
                <button
                  className={
                    tab == 1
                      ? 'text-dark-500 font-semibold relative text-sm'
                      : 'text-dark-500 font-normal text-sm'
                  }
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  ATTACHMENTS
                  {tab == 1 ? (
                    <div className="absolute top-[calc(100%+6px)] h-[2px] w-full bg-dark-500 rounded-md"></div>
                  ) : (
                    <></>
                  )}
                </button>
                <button
                  className={
                    tab == 2
                      ? 'text-dark-500 font-semibold relative text-sm'
                      : 'text-dark-500 font-normal text-sm'
                  }
                  onClick={() => {
                    setTab(2);
                  }}
                >
                  INVESTIGATION
                  {tab == 2 ? (
                    <div className="absolute top-[calc(100%+6px)] h-[2px] w-full bg-dark-500 rounded-md"></div>
                  ) : (
                    <></>
                  )}
                </button>
                <button
                  className={
                    tab == 3
                      ? 'text-dark-500 font-semibold relative text-sm'
                      : 'text-dark-500 font-normal text-sm'
                  }
                  onClick={() => {
                    setTab(3);
                  }}
                >
                  RESOLUTIONS
                  {tab == 3 ? (
                    <div className="absolute top-[calc(100%+6px)] h-[2px] w-full bg-dark-500 rounded-md"></div>
                  ) : (
                    <></>
                  )}
                </button>
              </div>
            }
          >
            <div className="flex gap-2">
              <Buttons
                className="w-9 h-9"
                buttonType="bordered"
                prefix={<Trash size={20} variant="Bold" />}
              />
              <Buttons
                className="w-9 h-9"
                buttonType="bordered"
                prefix={<Edit2 size={20} variant="Bold" />}
                type="link"
                href={`admin/activities/reports/create/${'mnbn'}`}
              />

              <Selector
                id="status_selector"
                isClearable={false}
                placeholder="No Status"
                className="flex-1 mb-2"
                onChange={''}
                options={[
                  { value: 'tatus1', label: 'Status 1' },
                  { value: 'tatus2', label: 'Status 2' },
                ]}
              ></Selector>
              <Buttons
                className="w-9 h-9"
                buttonType="bordered"
                type="button"
                onClick={() => {
                  navigator.push('/admin/activities/reports');
                }}
                suffix={<CloseSquare size={20} variant="Bold" />}
              />
            </div>
          </PageBar>
          {tab == 0 ? <DetailTab /> : <></>}
          {tab == 1 ? <AttachmentsTab /> : <></>}
          {tab == 1 ? <InvestigationTab /> : <></>}
          {tab == 2 ? <ResolutionTab /> : <></>}
        </>
        <div className="flex justify-center items-center min-h-[calc(100vh-3.25rem)]">
          <Spinner />
        </div>
      </div>
    </>
  );
}
