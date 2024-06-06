const formFields = [
  {
    label: 'Name',
    type: 'text',
    className:
      'h-10 mt-2 w-full sm:w-[755px] border border-gray-300 rounded-md pl-2',
  },
  {
    label: 'Description',
    type: 'text',
    className:
      'h-28 mt-2 w-full sm:w-[755px] border border-gray-300 rounded-md pb-20 pl-2',
  },
];

const FormCard = () => {
  return (
    <>
      <div>
        <hr className="w-full sm:w-screen mr-3 relative bottom-5" />
      </div>
      <div className="h-auto sm:h-[500px] p-5 text-gray-600 ml-0 sm:ml-8 w-full sm:w-[800px] border border-gray-200 shadow-sm rounded-md">
        <h1>Employee Information</h1>
        {formFields.map((field, index) => (
          <div key={index} className="mb-4 mt-5">
            <h1>{field.label}</h1>
            <input type={field.type} className={field.className} />
          </div>
        ))}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 mt-5">
          <div>
            <h1>Status</h1>
            <select className="h-10 p-2 w-full sm:w-[240px] border border-gray-300 rounded-md">
              {['Open', 'In Progress', 'Closed'].map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1>Ticket Owner</h1>
            <select className="h-10 p-2 w-full sm:w-[240px] border border-gray-300 rounded-md">
              {['Owner 1', 'Owner 2', 'Owner 3'].map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1>Ticket Owner</h1>
            <select className="h-10 p-2 w-full sm:w-[240px] border border-gray-300 rounded-md">
              {['Owner 1', 'Owner 2', 'Owner 3'].map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 mt-5">
          <div>
            <h1>Flight</h1>
            <input
              type="text"
              className="h-10 p-2 w-full sm:w-[240px] border border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
          <div>
            <h1>Station</h1>
            <input
              type="text"
              className="h-10 p-2 w-full sm:w-[240px] border border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCard;
