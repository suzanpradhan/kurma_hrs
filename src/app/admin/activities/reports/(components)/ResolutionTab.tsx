/* eslint-disable @next/next/no-img-element */
import Selector from '@/core/ui/components/Selector';
import { TextField } from '@/core/ui/karma/src/components';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import FormCards from '@/core/ui/karma/src/components/Form/FormCard';
import FormGroups from '@/core/ui/karma/src/components/Form/FormGroup';

const ResolutionTab = () => {
  return (
    <div className="m-4">
      <div className="flex flex-col gap-4">
        <div className="max-w-5xl flex justify-end">
          <Buttons
            text="Add Resolution"
            className={`h-8 w-fit`}
            type="button"
          />
        </div>
        <FormCards>
          <FormGroups>
            <div className="flex flex-col mb-2">
              <TextField
                id="title"
                type="text"
                label="Summary"
                isMulti
                className="flex-1"
                required
              />
              <div className="text-red-500 text-sm"></div>
            </div>
            <Selector
              id="status_selector"
              options=""
              label="Status"
              placeholder="Select status"
              className="flex-1 mb-2"
              name="status"
            ></Selector>
          </FormGroups>
          <div className="flex justify-end gap-2 m-4">
            <Buttons text="Submit" className="h-8 w-fit" type="submit" />
            <Buttons
              text="Cancel"
              className="h-8 w-fit"
              buttonType="bordered"
            />
          </div>
        </FormCards>
        return (
        <div className="bg-blueWhite border border-primaryGray-300 rounded-lg p-4 max-w-5xl">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-start w-full justify-between">
              <div className="text-sm font-medium"></div>
              <div className="flex text-sm gap-2 items-center">
                Action:
                <div className="h-6 text-center bg-white px-3 rounded-md border"></div>
              </div>
            </div>
          </div>
        </div>
        );
      </div>
    </div>
  );
};
export default ResolutionTab;
