'use client';
import PaginationNav from '@/core/ui/components/Pagination';
import { TableCard, tableStyles } from '@/core/ui/karma/src/components';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import { Edit2, Eye, Trash } from 'iconsax-react';

const TableListing = () => {
  return (
    <>
      <TableCard
        footer={
          <PaginationNav
            gotoPage={() => {}}
            canPreviousPage={true}
            canNextPage={true}
            pageCount={10}
            pageIndex={1}
          />
        }
      >
        <thead>
          <tr className={tableStyles.table_thead_tr}>
            <th className={tableStyles.table_th + ` w-56`}>REF. ID</th>
            <th className={tableStyles.table_th}>TITLE</th>
            <th className={tableStyles.table_th}>DATE</th>
            <th className={tableStyles.table_th + ` w-36`}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr className={tableStyles.table_tbody_tr}>
            <td className={tableStyles.table_td + ` w-56`}>{'1234'}</td>
            <td className={tableStyles.table_td}>{'Hello'}</td>
            <td className={tableStyles.table_td}>{'27/2/2024'}</td>
            <td className={tableStyles.table_td + ` flex gap-2 w-36`}>
              <Buttons
                className="h-8 w-8"
                type="link"
                kind="secondary"
                href=""
                prefix={<Eye size={18} variant="Bold" />}
              />
              <Buttons
                className="h-8 w-8"
                type="link"
                href=""
                prefix={<Edit2 size={18} variant="Bold" />}
              />
              <Buttons
                className="h-8 w-8"
                prefix={<Trash size={18} variant="Bold" />}
                kind="danger"
                type="button"
              />
            </td>
          </tr>
        </tbody>
      </TableCard>
    </>
  );
};

export default TableListing;
