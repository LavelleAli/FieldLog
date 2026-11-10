"use client";
import AddCardModal from "../modalcontrol/AddCardModal";
import { Turbine } from "@/data/Fleetdata";

const Dashboard = ({
  onCreateCard,
  counts,
}: {
  onCreateCard: (card: Turbine) => void;
  counts: {
    open: number;
    inProgress: number;
    resolved: number;
  };
}) => {


  return (
    <div className="w-full  border rounded-md p-4 mb-20 ">
      <div className="flex flex-col justify-around gap-12 ml-4">
        <div className="flex justify-between  gap-10 ">
          <div className="flex gap-4">
            <div>Log Book</div>
          </div>
          Welcome, Technician
          <div className="flex items-center gap-2">
            Search:
            <input
              type="text"
              placeholder="Search"
              className="border-b text-center outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span
              className={`w-2 h-2 flex items-center bg-red-500 border-0 rounded-2xl shadow-red-500 shadow-[0_0_10px_2px]`}
            ></span>
            <div>Open: {counts.open}</div>

            <span className="w-2 h-2 flex items-center bg-yellow-500 border-0 rounded-2xl shadow-yellow-500 shadow-[0_0_10px_2px]"></span>
            <div>In Progress: {counts.inProgress} </div>

            <span className="w-2 h-2 flex items-center bg-green-500 border-0 rounded-2xl shadow-green-500 shadow-[0_0_10px_2px]"></span>
            <div>Resolved: {counts.resolved} </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="flex items-center gap-8 mr-10 ">
              Filter
              <AddCardModal onCreateCard={onCreateCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
