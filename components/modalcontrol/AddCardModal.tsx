import { useState } from "react";
import { CreateCard } from "../createcard/CreateCard";
import { Turbine } from "@/data/Fleetdata";

const AddCardModal = ({ onCreateCard }: { onCreateCard: (card: Turbine) => void; }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={`border border-white h-10 p-2 rounded-md cursor-pointer hover:text-accent hover:bg-white transition-all duration-500`}
        onClick={() => setIsModalOpen(true)}
      >
        Add Card+
      </button>
      {isModalOpen && (
        <CreateCard
          onClose={() => setIsModalOpen(false)}
          onCreateCard={onCreateCard}
        />
      )}
    </>
  );
};

export default AddCardModal;
