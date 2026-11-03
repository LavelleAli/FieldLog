"use client";
import { useState } from "react";

export const CreateCard = ({ isOpen }: { isOpen: boolean }) => {
  const id: string = crypto.randomUUID();

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col items-center w-2/5 h-3/5 bg-fairwindblue/90 rounded-xl p-4">
        <form action="">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-2xl mb-2 font-bold ">Create Card</h1>
          </div>

          <div className="flex flex-col items-start gap-20">
            <div className="flex justify-center">
              <label htmlFor="title">
                <div className="flex gap-2">
                  Title:
                  <input
                    type="text"
                    id="title"
                    required
                    placeholder="Enter turbine number"
                    className="border-b text-center outline-none"
                  />
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="equipment">
                <div className="flex gap-2">
                  Equipment:
                  <input
                    type="text"
                    id="equipment"
                    placeholder="Enter issue summary"
                    maxLength={25}
                    required
                    className="border-b text-center outline-none"
                  />
                </div>
              </label>
            </div>

            <div className="flex gap-2">
              <div>
                <label htmlFor="priority">
                  <div className="flex gap-2">
                    Priority:
                    <select
                      id="priority"
                      required
                      className="border-b text-center outline-none"
                    >
                      <option value="disabled">Select priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </label>
              </div>

              <div>
                <label htmlFor="type">
                  <div className="flex gap-2">
                    Type:
                    <select
                      id="type"
                      required
                      className="border-b text-center outline-none"
                    >
                      <option value="disabled">Select Type</option>
                      <option value="mechanical">Mechanical</option>
                      <option value="electrical">Electrical</option>
                      <option value="hydraulic">Hydraulic</option>
                    </select>
                  </div>
                </label>
              </div>

              <div>
                <label htmlFor="">
                  <div className="flex gap-2">
                    Status:
                    <select
                      name="status"
                      id="status"
                      required
                      className="border-b text-center outline-none"
                    >
                      <option value="disabled">Select status</option>
                      <option value="open">Open</option>
                      <option value="in_progress">In Progress</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>

            <div className="mx-auto">
              <label htmlFor="" className=" gap-2 text-center">
                <div className="flex flex-col gap-2">
                  Notes:
                  <textarea
                    name="notes"
                    id="notes"
                    maxLength={200}
                    className="border rounded-md text-center outline-none w-100 h-20"
                    placeholder="Enter detail"
                  />
                </div>
              </label>
            </div>

            {/* automatically generated fields will go here i.e createdAt Date, ID, ect... will be generated on submit */}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mx-auto w-1/4 p-2 border rounded-md mt-4  hover:bg-white hover:text-fairwindblue transition-colors duration-500 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
