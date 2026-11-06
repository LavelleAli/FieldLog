"use client";
import { useEffect, useRef, type SubmitEvent, useState } from "react";
import { Turbine } from "@/data/Fleetdata";
import FadeIn from "../animationbank/FadeIn";


export const CreateCard = ({
  onClose,
  onCreateCard,
}: {
  onClose: () => void;
  onCreateCard: (card: Turbine) => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [inputInvalid, setInputInvalid] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const now = new Date().toISOString();
    const cardProps = {
      id: crypto.randomUUID(),
      title: String(form.get("title")).trim(),
      equipment: String(form.get("equipment")).trim(),
      priority: form.get("priority") as Turbine["priority"],
      type: form.get("type") as Turbine["type"],
      status: form.get("status") as Turbine["status"],
      notes: String(form.get("notes")).trim(),
      createdAt: now,
      updatedAt: now,
    };

    for (const key of Object.keys(cardProps)) {
      if (cardProps[key] === "") {
        setInputInvalid(true);
        return;
      }
    }

    onCreateCard(cardProps);
    closeDialog();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="create-card-heading"
      className="m-auto bg-fairwindblue/90 text-foreground rounded-xl p-6 border border-accent shadow-[0_0_8px] shadow-accent backdrop:bg-black/50"
    >
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} noValidate>
          <button
            type="button"
            aria-label="Close"
            className="absolute top-4 right-5 cursor-pointer hover:scale-150 transition-all duration-500"
            onClick={closeDialog}
          >
            X
          </button>

          <div className="flex justify-center items-center mb-4">
            <h1 id="create-card-heading" className="text-2xl mb-2 font-bold">
              Create Card
            </h1>
          </div>

          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="title">
                <div className="flex gap-2">
                  Title:
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="WT-XXXX"
                    required
                    aria-invalid={inputInvalid}
                    className="border-b text-center outline-none"
                    onChange={() => setInputInvalid(false)}
                  />
                </div>
              </label>

              {inputInvalid && (
                <FadeIn>
                  <p className="fade ml-2 text-sm font-semibold text-red-400 ">
                    Enter a turbine number: Example WT-037
                  </p>
                </FadeIn>
              )}
            </div>

            <div>
              <label htmlFor="equipment">
                <div className="flex gap-2">
                  Equipment:
                  <input
                    type="text"
                    id="equipment"
                    name="equipment"
                    placeholder="Enter issue summary"
                    maxLength={30}
                    required
                    className="border-b text-center outline-none"
                  />
                </div>
              </label>
            </div>

            <div className="flex flex-wrap gap-2">
              <div>
                <label htmlFor="priority">
                  <div className="flex gap-2">
                    Priority:
                    <select
                      id="priority"
                      name="priority"
                      required
                      defaultValue=""
                      className="border-b text-center outline-none"
                    >
                      <option value="">Select priority</option>
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
                      name="type"
                      required
                      defaultValue=""
                      className="border-b text-center outline-none"
                    >
                      <option value="">Select Type</option>
                      <option value="mechanical">Mechanical</option>
                      <option value="electrical">Electrical</option>
                      <option value="hydraulic">Hydraulic</option>
                    </select>
                  </div>
                </label>
              </div>

              <div>
                <label htmlFor="status">
                  <div className="flex gap-2">
                    Status:
                    <select
                      id="status"
                      name="status"
                      required
                      defaultValue=""
                      className="border-b text-center outline-none"
                    >
                      <option value="">Select status</option>
                      <option value="open">Open</option>
                      <option value="in progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>

            <div className="mx-auto w-full">
              <label htmlFor="notes" className=" gap-2 text-center">
                <div className="flex flex-col gap-2">
                  Notes: (max 300 characters)
                  <textarea
                    name="notes"
                    id="notes"
                    maxLength={300}
                    className="border rounded-md text-center outline-none w-full h-20"
                    placeholder="Enter detail"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mx-auto w-1/4 p-2 border rounded-md mt-4 hover:bg-white hover:text-fairwindblue transition-colors duration-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
