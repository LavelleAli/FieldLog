"use client";
import { useState } from "react";
import AssessmentCards from "@/components/assessmentCards/AssessmentCards";
import fieldData, { Turbine } from "@/data/Fleetdata";
import Dashboard from "@/components/dashboard/Dashboard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { loadCards, saveCards } from "@/data/CardStorage";


const IssueBoard = () => {
  const [addCards, setAddCards] = useState(8);
  const [cards, setCards] = useState<Turbine[]>(() => loadCards() ?? fieldData);
  const counts = {
      open: cards.filter((card) => card.status === "open").length,
      inProgress: cards.filter((card) => card.status === "in progress").length,
      resolved: cards.filter((card) => card.status === "resolved").length,
    };

  function addCard(card: Turbine) {
    const next = [card, ...cards];
    setCards(next);
    saveCards(next);
  }

  function updateCardStatus(id: string, status: Turbine["status"]) {
    const now = new Date().toISOString();
    const userCardSelected = cards.map((card) => card.id === id ? {...card, status: status, updatedAt: now } : card);
    setCards(userCardSelected);
    saveCards(userCardSelected);
  }

  function editedCards(edit: Turbine) {
    const now = new Date().toISOString()
    const userEditsCard = cards.map((card) => card.id === edit.id ? {...edit, updatedAt: now } : card);
    setCards(userEditsCard);
    saveCards(userEditsCard);
  }

  function turbineData() {
    return cards
      .slice(0, addCards)
      .map((turbine, idx) => (
        <AssessmentCards
          key={turbine.id}
          turbine={turbine}
          newCard={addCards === 8 || idx >= addCards - 4}
          editCard={updateCardStatus}
          onEditCard={editedCards}
        />
      ));
  }


  useGSAP(() => {
    gsap.from(".cardsAdded", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.0,
      clearProps: "all",
    });
  }, [addCards]);

  return (
    <div className="container flex justify-center w-full mx-auto mb-10">
      <div className="content flex flex-col items-center w-full max-w-7xl px-4 mt-8">
        <Dashboard onCreateCard={addCard} counts={counts} />

        <div className="grid w-full gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))]">
          {turbineData()}
        </div>

        {addCards < cards.length && (
          <button
            className="mt-4 border rounded-md p-2 text-sm"
            onClick={() => setAddCards((prev) => prev + 4)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default IssueBoard;
