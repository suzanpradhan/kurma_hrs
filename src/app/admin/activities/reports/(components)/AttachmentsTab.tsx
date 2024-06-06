'use client';

import Buttons from '@/core/ui/karma/src/components/Buttons';
import FormCards from '@/core/ui/karma/src/components/Form/FormCard';
import FormGroups from '@/core/ui/karma/src/components/Form/FormGroup';
import MultiUploader from '@/core/ui/karma/src/components/MultiUploader';
import { FormikValues, useFormikContext } from 'formik';

interface YourFormValues extends FormikValues {
  files: File[];
}

const AttachmentsTab = () => {
  const formik = useFormikContext<YourFormValues>();

  const setFieldValue = async (
    field: string,
    value: any,
    shouldValidate?: boolean
  ): Promise<void> => {
    formik.setFieldValue(field, value, shouldValidate);
  };

  return (
    <div className="m-4 flex flex-col h-full gap-4">
      <FormCards>
        <FormGroups>
          <MultiUploader
            name="files"
            files={formik.values.files}
            setFieldValue={setFieldValue}
          />
        </FormGroups>
        <div className="max-w-5xl flex justify-end m-4">
          <Buttons
            text="Upload Files"
            className={`h-8 w-fit`}
            type="submit"
            isLoading={true}
          />
        </div>
      </FormCards>
    </div>
  );
};

export default AttachmentsTab;
