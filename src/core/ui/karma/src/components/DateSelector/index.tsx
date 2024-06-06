'use client';

import DatePicker, { DatePickerProps } from 'react-date-picker';

type AdditionalDateSelectorProps = {
  label?: string;
  id: string;
  className?: string;
};

export type DateSelectorProps = DatePickerProps & AdditionalDateSelectorProps;

const DateSelector = ({
  id,
  className = '',
  label,
  ...props
}: DateSelectorProps) => {
  return (
    <div className={`flex flex-col last-of-type:mb-0 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm mb-2 text-dark-500">
          {label}*
        </label>
      )}
      <DatePicker
        id={id}
        className="h-13 border rounded-md bg-slate-50 outline-none items-end flex justify-end"
        {...props}
      />
    </div>
  );
};

export default DateSelector;
