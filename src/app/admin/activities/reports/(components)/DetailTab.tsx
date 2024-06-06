import { TextField } from '@/core/ui/karma/src/components';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import FormCards from '@/core/ui/karma/src/components/Form/FormCard';
import FormGroups from '@/core/ui/karma/src/components/Form/FormGroup';

import { Edit2, Trash } from 'iconsax-react';

const DetailTab = () => {
  return (
    <div className="m-4 flex flex-col">
      <div className="text-base">Description</div>
      <div className="text-sm mt-2">{'No Summary'}</div>
      {/* <div className="text-base mt-4">Sources</div>
      <div className="flex mt-2 gap-2">
        <div className="border rounded-md px-4 py-2">Test</div>
        <div className="border rounded-md px-4 py-2">Test</div>
        <div className="border rounded-md px-4 py-2">Test</div>
        <div className="border rounded-md px-4 py-2">Test</div>
      </div> */}
      <div className="p-4 rounded-lg bg-blueWhite border border-primaryGray-300 mt-4 max-w-5xl">
        <div className="flex justify-between">
          <div>Remarks</div>
          <div className="flex gap-2">
            <Buttons
              className="h-8 w-8"
              type="button"
              prefix={<Edit2 size={18} variant="Bold" />}
            />
            <Buttons
              className="h-8 w-8 bg-white"
              prefix={<Trash size={18} variant="Bold" />}
              type="button"
              kind="danger"
            />
          </div>
        </div>
        <div className="text-sm mt-2">{'hh'}</div>
      </div>
      <FormCards className="mt-4">
        <FormGroups>
          <div className="flex flex-col mb-2">
            <TextField
              id="title"
              type="text"
              label="Remarks"
              className="flex-1"
              required
            />
            <div className="text-red-500 text-sm"></div>
          </div>
        </FormGroups>
        <div className="flex justify-end gap-2 m-4">
          <Buttons text="Submit" className="h-8 w-fit" type="submit" />
          <Buttons text="Cancel" className="h-8 w-fit" buttonType="bordered" />
        </div>
      </FormCards>
    </div>
  );
};
export default DetailTab;
