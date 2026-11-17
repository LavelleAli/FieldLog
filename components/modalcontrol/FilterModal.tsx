"use client";
import { useState, useRef, useEffect, use } from "react";

const FilterModal = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialog = dialogRef.current;

  function modalTrigger() {
    dialogRef.current.show();
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
        className={`absolute top-75 left-310 w-60 h-10 rounded-md bg-fairwindblue/30 border border-accent/80 `}
      >
        <form className="flex justify-center p-2  gap-2 text-white text-sm">
          <label htmlFor="status">
            Status:
            <input type="checkbox" id="status" name="status" value="status" />
          </label>
          <label htmlFor="priority">
            Priority:
            <input
              type="checkbox"
              id="prioritu"
              name="priority"
              value="priority"
            />
          </label>
          <label htmlFor="date">
            Date:
            <input type="checkbox" id="date" name="date" value="date" />
          </label>
          <div className="relative left-4 -top-3" >
            <button type="button" onClick={modalTriggerClose} className="w-2 h-2 rounded-full bg-red-500 hover:shadow-[0_0_10px] shadow-white transition-all duration-500 ease-in-out">
              
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default FilterModal;
