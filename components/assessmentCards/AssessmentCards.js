

const AssessmentCards = ({ turbine }) => {
  function windTurbineData() {
    return (
      <div className="bg-blue-900/30 w-90 h-100 rounded-2xl mb-10 ">
        <div className="flex justify-center gap-50 text-sm ">
          <div>ID: {turbine?.id}</div>

          <div>Priority: {turbine?.priority}</div>
        </div>

        <h1 className="flex justify-center text-2xl">{turbine?.title}</h1>

        <div className="grid lg:grid-cols-3 text-sm text-center mt-4">
          <div>
            Type: {turbine.type}
            <select name="type">
              <option value="">Select</option>
              <option value="electrical">Electrical</option>
              <option value="mechanical">Mechanical</option>
              <option value="hydraulic">Hydraulic</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>
              Status: {turbine.status}
              <select name="status">
                <option value="">Select</option>
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Last Updated: {turbine.lastUpdated}
              <input type="date" name="reportedOn" />
            </label>
          </div>
          <div className="relative top-10 left-10 flex flex-col justify-center w-70">
            <label htmlFor="description">
              Description: <div>{turbine.description}</div>
            </label>
            <textarea
              name="notes"
              placeholder="provide brief description of component issue"
              className="flex justify-center text-center text-muted w-full h-30 border rounded-md"
            />
          </div>
          <div className="relative top-50">
            Image Link
            {/* Image will pop up as preview when hovered/selected */}
          </div>
        </div>
      </div>
    );
  }
  return <>{windTurbineData()}</>;
};

export default AssessmentCards;
