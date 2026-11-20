"use client";
import { useState } from "react";
import AssessmentCards from "@/components/assessmentCards/AssessmentCards";
import fieldData, { Turbine } from "@/data/Fleetdata";
import Dashboard from "@/components/dashboard/Dashboard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { loadCards, saveCards } from "@/data/CardStorage";

const IssueBoard = () => {

  // ========== Variable Dictionary ============
  const [addCards, setAddCards] = useState(8);
  const [cards, setCards] = useState<Turbine[]>(() => loadCards() ?? fieldData);
  const [search, setSearch] = useState("");
  const userText = search.trim().toLowerCase();
  const [statusSelect, setStatusSelect] = useState<Turbine["status"][]>([]);
  const [prioritySelect, setPrioritySelect] = useState<Turbine["priority"][]>(
    [],
  );
  const showResults = cards.filter(
    (card) =>
      (card.title.toLowerCase().includes(userText) ||
        card.equipment.toLowerCase().includes(userText) ||
        card.notes.toLowerCase().includes(userText)) &&
      (statusSelect.length === 0 || statusSelect.includes(card.status)) &&
      (prioritySelect.length === 0 || prioritySelect.includes(card.priority)),
  );
  const counts = {
    open: cards.filter((card) => card.status === "open").length,
    inProgress: cards.filter((card) => card.status === "in progress").length,
    resolved: cards.filter((card) => card.status === "resolved").length,
  };
// ========== End Variable Dictionary ============

// ============ Function List ==========

// -------- Render Cards ---------
  function turbineData() {
    const sortedResults = [...showResults];
    return sortedResults
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      )
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
  };

  function addCard(card: Turbine) {
    const next = [card, ...cards];
    setCards(next);
    saveCards(next);
  };
// -------- End Render Cards ---------

// ------- Edit Cards ----------
  function editedCards(edit: Turbine) {
    const now = new Date().toISOString();
    const userEditsCard = cards.map((card) =>
      card.id === edit.id ? { ...edit, updatedAt: now } : card,
    );
    setCards(userEditsCard);
    saveCards(userEditsCard);
  };

  function updateCardStatus(id: string, status: Turbine["status"]) {
    const now = new Date().toISOString();
    const userCardSelected = cards.map((card) =>
      card.id === id ? { ...card, status: status, updatedAt: now } : card,
    );
    setCards(userCardSelected);
    saveCards(userCardSelected);
  };
// ------- End Edit Cards ----------

// ----------Filter Cards ----------
  function statusFilter(status: Turbine["status"]) {
    setStatusSelect(
      statusSelect.includes(status)
        ? statusSelect.filter((checkBox) => checkBox !== status)
        : [status, ...statusSelect],
    );
  };

  function priorityFilter(priority: Turbine["priority"]) {
    setPrioritySelect(
      prioritySelect.includes(priority)
        ? prioritySelect.filter((priorityBox) => priorityBox !== priority)
        : [priority, ...prioritySelect],
    );
  };

  function clearFilters() {
    setStatusSelect([]);
    setPrioritySelect([]);
    setSearch("");  
  };

// ----------Filter Cards ----------


// ============ End Function List ==========

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
        <Dashboard
          onCreateCard={addCard}
          counts={counts}
          search={search}
          onSearchChange={setSearch}
          statusArray={statusSelect}
          statusToggle={statusFilter}
          priorityArray={prioritySelect}
          priorityToggle={priorityFilter}
        />

        {cards.length === 0 ? (
          <div role="status">
            <p>
              User has no issues listed. Click Add Card+ to create new issue
              items.{" "}
            </p>
          </div>
        ) : showResults.length === 0 ? (
          <div role="status" className="flex flex-col items-center text-center gap-4">
            <p>
              No items match your search. <br /> Try clearing your filters
            </p>
            <button
            type="button"
            className="border rounded-md p-2 hover:border-accent hover:bg-fairwindblue transition-colors duration-500 cursor-pointer"
            onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid w-full gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))]">
            {turbineData()}
          </div>
        )}

        {addCards < showResults.length && (
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
