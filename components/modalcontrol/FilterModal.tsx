"use client";
import { Turbine } from "@/data/Fleetdata";
import { useRef } from "react";

const FilterModal = ({
  statusArray,
  statusToggle,
  priorityArray,
  priorityToggle,
}: {
  statusArray: Turbine["status"][];
  statusToggle: (text: Turbine["status"]) => void;
  priorityArray: Turbine["priority"][];
  priorityToggle: (text: Turbine["priority"])=> void;
}) => {


  const dialogRef = useRef<HTMLDialogElement>(null);

  function modalTrigger() {
    dialogRef.current.showModal();
  }
  function modalTriggerClose() {
    dialogRef.current.close();
  }

  return (
    <>
      <button
        type="button"
        className={`w-14 h-8   rounded-sm text-lg hover:text-fairwindblue  hover:bg-white transition-all duration-500`}
        onClick={modalTrigger}
      >
        Filter
      </button>

      <dialog
        ref={dialogRef}
        className={`absolute top-75 left-1/4 w-1/2 h-1/3 rounded-md bg-black/70 border border-fairwindblue/80 `}
      >
        <div className="relative right-8 top-4 flex justify-end">
          <button
            type="button"
            aria-label="close"
            onClick={modalTriggerClose}
            className="w-4 h-4 rounded-full bg-red-500 hover:shadow-[0_0_10px] shadow-red-500 transition-all duration-300 ease-in-out"
          ></button>
        </div>
        <form className="mx-auto w-1/2 h-1/2 mt-16 flex justify-center items-center p-2 gap-12 text-white text-sm">
          <div className="flex flex-col gap-2 font-semibold">
            Status
            <div className="w-6 border-b ml-2 -mt-2 "></div>
            <div className="flex flex-col ">
              <label htmlFor="open">
                Open:
                <input
                  type="checkbox"
                  id="open"
                  name="open"
                  checked={statusArray.includes("open")}
                  value={"open"}
                  onChange={() => statusToggle("open")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="in-progress">
                In Progress:
                <input
                  type="checkbox"
                  id="in-progress"
                  name="in progress"
                  checked={statusArray.includes("in progress")}
                  value={"in progress"}
                  onChange={() => statusToggle("in progress")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="resolved">
                Resolved:
                <input
                  type="checkbox"
                  id="resolved"
                  name="resolved"
                  checked={statusArray.includes("resolved")}
                  value={"resolved"}
                  onChange={() => statusToggle("resolved")}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            Priority
            <div className="w-6 border-b ml-2 -mt-2 "></div>
            <div className="flex flex-col ">
              <label htmlFor="low">
                Low:
                <input
                  type="checkbox"
                  id="low"
                  name="low"
                  checked={priorityArray.includes("low")}
                  value={"low"}
                  onChange={() => priorityToggle("low")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="medium">
                Medium:
                <input
                  type="checkbox"
                  id="medium"
                  name="medium"
                  checked={priorityArray.includes("medium")}
                  value={"medium"}
                  onChange={() => priorityToggle("medium")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="high">
                High:
                <input
                  type="checkbox"
                  id="high"
                  name="high"
                  checked={priorityArray.includes("high")}
                  value={"high"}
                  onChange={() => priorityToggle("high")}
                />
              </label>
            </div>
          </div>
          <div className=" relative -top-6 left-2 flex flex-col gap-2 font-semibold">
            Date
            <div className="w-6 border-b ml-1 -mt-2 "></div>
            <div className="flex flex-col ">
              <label htmlFor="month">
                <input type="date" name="month" />
              </label>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default FilterModal;
