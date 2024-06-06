'use client';

import { TextField } from '@/core/ui/karma/src/components';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import FormCard from '@/core/ui/karma/src/components/Form/FormCard';
import FormGroup from '@/core/ui/karma/src/components/Form/FormGroup';

const SpotCheckMutationPage = () => {
  return (
    <FormCard className="m-4">
      <FormGroup title="General">
        <div className="flex flex-col mb-2">
          <TextField id="title" type="text" label="Title" className="flex-1" />
        </div>
        <div className="flex flex-col mb-2">
          <TextField
            id="description"
            type="text"
            isMulti
            rows={3}
            label="Description"
            className="flex-1"
          />
        </div>
        <div className="flex flex-col mb-2">
          Date
          <input
            type="date"
            id="date"
            name="date"
            className="h-12 border rounded-md bg-slate-50 outline-none px-3"
            required
          />
          <label htmlFor="date" className="text-sm mt-2 text-dark-500"></label>
        </div>
        <div className="flex space-x-4 mb-4 mt-5">
          <div>
            <h1>Status</h1>
            <select className="h-10 p-2 w-[270px] border border-gray-300 rounded-md">
              {['None', 'In', 'Out'].map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1>Shift</h1>
            <select className="h-10 p-2 w-[270px] border border-gray-300 rounded-md">
              {['None', 'Morning', 'Day', 'Absent'].map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </FormGroup>
      <div className="flex justify-end gap-2 m-4">
        <Buttons text="Submit" className="h-8 w-fit" />
        <Buttons text="Cancel" className="h-8 w-fit" />
      </div>
    </FormCard>
  );
};

export default SpotCheckMutationPage;
