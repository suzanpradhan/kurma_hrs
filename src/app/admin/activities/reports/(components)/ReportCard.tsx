'use client';

import Selector from '@/core/ui/components/Selector';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import { Edit2, Trash } from 'iconsax-react';
import moment from 'moment';
import Link from 'next/link';

export interface ReportCardProps {
  report: '';
  onDelete: () => void;
}

/* eslint-disable @next/next/no-img-element */
const ReportCard = (props: ReportCardProps) => {
  return (
    <div
      className=" w-full rounded-lg flex flex-col @xl/reportCard:flex-row cursor-pointer justify-between @xl/reportCard:justify-start 
      border border-accentBlue-400 bg-gradient-to-r from-accentBlue-50 to-accentBlue-100 shadow-md shadow-accentBlue-100
      hover:bg-gradient-to-r hover:from-accentBlue-400/10 hover:to-accentBlue-400/5 "
    >
      {/* <div
        className={`h-full rounded-l-lg bg-green-500 ${
          hover ? 'w-4' : 'w-2'
        } items-center flex justify-center duration-150`}
      >
        {hover ? (
          <div className="-rotate-90 text-xs text-white">HIGH</div>
        ) : (
          <></>
        )}
      </div> */}
      <div className="flex-1 mb-4 @xl/reportCard:mb-0 flex justify-between items-start my-3 ml-3">
        <div className="flex flex-col flex-1">
          <Link
            href={`/admin/tickets/reports/each/$`}
            className="font-semibold text-sm text-clip line-clamp-1 @xl/reportCard:text-base text-accentBlue-900"
          >
            {``}
          </Link>
          <div className="font-normal text-xs text-primaryGray-500">
            {moment().format('llll')}
          </div>
        </div>
        <div className="flex items-center gap-2 mr-2 font-medium w-24 line-clamp-1">
          {'--'}
        </div>
      </div>
      <div className="flex justify-between @xl/reportCard:justify-start @xl/reportCard:flex items-end @xl/reportCard:items-center gap-2 my-3 mr-3">
        <div className="flex flex-col justify-center h-fit">
          <div className="font-medium text-sm line-clamp-1"></div>
          <div className="text-xs text-primaryGray-500 line-clamp-1"></div>
        </div>
      </div>

      <div className="hidden @2xl/reportCard:flex mr-2 flex-1 w-32"></div>

      <Buttons
        className="h-9 hidden @xl/reportCard:block"
        buttonType="bordered"
        kind="danger"
        prefix={<Trash size={18} variant="Bold" />}
        onClick={props.onDelete}
      />
      <Buttons
        className="h-9 hidden @xl/reportCard:flex @xl/reportCard:items-center"
        buttonType="bordered"
        prefix={<Edit2 size={18} variant="Bold" />}
        // kind="default"
        type="link"
        href={`admin/tickets/reports/create/`}
      />
      <div className="flex-none relative w-32 ml-3 @xl/reportCard:ml-0">
        <Selector
          id="status_selector"
          isClearable={false}
          options={''}
          placeholder="No Status"
          className="flex-1 mb-2 bg-transparent"
          onChange={''}
          name="status"
          isCompact
        ></Selector>
      </div>
      {/* <img
          src={props.report.owner?.profile?.avatar ?? '/images/avatar.jpg'}
          alt="avatar"
          className="object-cover w-8 @xl/reportCard:w-10 h-8 @xl/reportCard:h-10 rounded-md shadow-lg"
        /> */}
    </div>
  );
};

export default ReportCard;
