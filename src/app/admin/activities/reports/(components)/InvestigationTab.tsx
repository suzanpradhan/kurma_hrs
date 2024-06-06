/* eslint-disable @next/next/no-img-element */
import { TextField } from '@/core/ui/karma/src/components';
import Buttons from '@/core/ui/karma/src/components/Buttons';
import FormCards from '@/core/ui/karma/src/components/Form/FormCard';
import FormGroups from '@/core/ui/karma/src/components/Form/FormGroup';

import { Edit2, Trash } from 'iconsax-react';

const InvestigationTab = () => {
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col gap-4">
          <div className="max-w-5xl flex justify-end">
            <Buttons
              text="Add Investigation"
              className={`h-8 w-fit`}
              type="button"
              onClick={() => {}}
            />
          </div>
          <FormCards>
            <FormGroups>
              <div className="flex flex-col mb-2">
                <TextField
                  id="title"
                  type="text"
                  label="Title"
                  className="flex-1"
                  required
                />
                <div className="text-red-500 text-sm">{''}</div>
              </div>
              <div className="flex flex-col mb-2">
                <TextField
                  id="findings"
                  type="text"
                  label="Findings"
                  className="flex-1"
                  rows={3}
                  required
                  isMulti
                />
                <div className="text-red-500 text-sm">{''}</div>
              </div>
              <div className="flex flex-col mb-2">
                <TextField
                  id="cause"
                  type="text"
                  label="Cause"
                  className="flex-1"
                  rows={3}
                  required
                  isMulti
                />
                <div className="text-red-500 text-sm">{''}</div>
              </div>
              <div className="flex flex-col mb-2">
                <TextField
                  id="recommendation"
                  type="text"
                  label="Recommendation"
                  className="flex-1"
                  rows={3}
                  required
                  isMulti
                />
                <div className="text-red-500 text-sm">{''}</div>
              </div>
            </FormGroups>
            <div className="flex justify-end gap-2 m-4">
              <Buttons text="Submit" className="h-8 w-fit" type="submit" />
              <Buttons
                text="Cancel"
                className="h-8 w-fit"
                buttonType="bordered"
                onClick={() => {}}
              />
            </div>
          </FormCards>
          <></>
          return (
          <div
            className="bg-blueWhite border border-primaryGray-300 rounded-lg p-4 max-w-5xl"
            key={''}
          >
            <div className="flex flex-col gap-2 items-start">
              <div className="flex justify-between w-full">
                <div className="text-sm flex items-center gap-1">
                  {/* <img
                      src={'/images/avatar.jpg'}
                      alt="avatar"
                      className="object-cover w-6 h-6 rounded-md"
                    /> */}
                  {/* <span>Sujan Pradhan</span> */}
                  {/* <RxDotFilled /> */}
                </div>
                <div className="flex gap-2">
                  <Buttons
                    className="h-8 w-8"
                    type="button"
                    prefix={<Edit2 size={18} variant="Bold" />}
                  />
                  <Buttons
                    className="h-8 w-8 bg-white"
                    prefix={<Trash size={18} variant="Bold" />}
                    kind="danger"
                    type="button"
                  />
                </div>
              </div>

              <div className="text-sm font-medium mt-2">{'sd'}</div>
              <>
                <div className="text-sm">Findings</div>
                <div className="text-sm text-primaryGray-500">{'hgh'}</div>
              </>
              <></>
              <>
                <div className="text-sm">Cause</div>
                <div className="text-sm text-primaryGray-500">{'khk'}</div>
              </>
              <>
                <div className="text-sm">Recommendation</div>
                <div className="text-sm text-primaryGray-500"></div>
              </>
              <></>
            </div>
          </div>
          );
        </div>
      </div>
    </>
  );
};
export default InvestigationTab;
