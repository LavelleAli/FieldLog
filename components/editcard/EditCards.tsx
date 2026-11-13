"use client";
import { useRef, useState, useEffect, type SubmitEvent } from "react";
import FadeIn from "../animationbank/FadeIn";
import { Turbine } from "@/data/Fleetdata";

const EditCards = ({
  cardEdit,
  onEditCard,
  onClose,
}: {
  cardEdit: Turbine;
  onEditCard: (card: Turbine) => void;
  onClose: () => void;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [inputInvalid, setInputInvalid] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function editFormModal(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const now = new Date().toISOString();
    const cardProps = {
      id: cardEdit.id,
      title: String(form.get("title")).trim(),
      equipment: String(form.get("equipment")).trim(),
      priority: form.get("priority") as Turbine["priority"],
      type: form.get("type") as Turbine["type"],
      status: form.get("status") as Turbine["status"],
      notes: String(form.get("notes")).trim(),
      createdAt: cardEdit.createdAt,
      updatedAt: now,
    };

    for (const key of Object.keys(cardProps)) {
      if (cardProps[key] === "" && key !== "notes") {
        setInputInvalid(key);
        return;
      }
    }

    onEditCard(cardProps);
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
        <form onSubmit={editFormModal} noValidate>
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
              Edit Card
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
                    placeholder="Example: WT-000"
                    required
                    defaultValue={cardEdit.title}
                    aria-invalid={inputInvalid === "title"}
                    className="border-b text-center outline-none"
                    onChange={() => setInputInvalid("")}
                  />
                </div>
              </label>

              {inputInvalid === "title" && (
                <FadeIn>
                  <p className="fade ml-2 text-sm font-semibold text-red-400 ">
                    Enter a turbine number; Example: WT-037
                  </p>
                </FadeIn>
              )}
            </div>

            <div className="flex flex-col gap-2 ">
              <label htmlFor="equipment">
                <div className="flex gap-2">
                  Equipment:
                  <input
                    className="border-b text-center outline-none"
                    type="text"
                    id="equipment"
                    name="equipment"
                    placeholder="Enter issue summary"
                    maxLength={30}
                    required
                    defaultValue={cardEdit.equipment}
                    aria-invalid={inputInvalid === "equipment"}
                    onChange={() => setInputInvalid("")}
                  />
                </div>
              </label>
              {inputInvalid === "equipment" && (
                <FadeIn>
                  <p className="fade ml-2 text-sm font-semibold text-red-400 ">
                    Enter brief issue detail; Example: Loose bolts on blade 3
                  </p>
                </FadeIn>
              )}
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
                      defaultValue={cardEdit.priority}
                      aria-invalid={inputInvalid === "priority"}
                      className="border-b text-center outline-none"
                      onChange={() => setInputInvalid("")}
                    >
                      <option value="">Select priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </label>
                {inputInvalid === "priority" && (
                  <FadeIn>
                    <p className="fade mt-2 text-sm font-semibold text-red-400 ">
                      Please select a priority
                    </p>
                  </FadeIn>
                )}
              </div>

              <div>
                <label htmlFor="type">
                  <div className="flex gap-2">
                    Type:
                    <select
                      id="type"
                      name="type"
                      required
                      aria-invalid={inputInvalid === "type"}
                      defaultValue={cardEdit.type}
                      className="border-b text-center outline-none"
                      onChange={() => setInputInvalid("")}
                    >
                      <option value="">Select Type</option>
                      <option value="mechanical">Mechanical</option>
                      <option value="electrical">Electrical</option>
                      <option value="hydraulic">Hydraulic</option>
                    </select>
                  </div>
                </label>
                {inputInvalid === "type" && (
                  <FadeIn>
                    <p className="fade mt-2 text-sm font-semibold text-red-400 ">
                      Please select a type
                    </p>
                  </FadeIn>
                )}
              </div>

              <div>
                <label htmlFor="status">
                  <div className="flex gap-2">
                    Status:
                    <select
                      id="status"
                      name="status"
                      required
                      aria-invalid={inputInvalid === "status"}
                      defaultValue={cardEdit.status}
                      className="border-b text-center outline-none"
                      onChange={() => setInputInvalid("")}
                    >
                      <option value="">Select status</option>
                      <option value="open">Open</option>
                      <option value="in progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>
                </label>
                {inputInvalid === "status" && (
                  <FadeIn>
                    <p className="fade mt-2 text-sm font-semibold text-red-400 ">
                      Please select a status
                    </p>
                  </FadeIn>
                )}
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
                    defaultValue={cardEdit.notes}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditCards;
