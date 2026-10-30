"use client";
import { useState } from "react";
import AssessmentCards from "@/components/assessmentCards/AssessmentCards";
import fieldData from "@/data/Fleetdata";

const IssueBoard = () => {
  const [addCards, setAddCards] = useState(8);
  

  function turbineData() {
    return fieldData
      .slice(0, addCards)
      .map((turbine) => <AssessmentCards key={turbine.id} turbine={turbine} />);
  }

  function loadMoreTickets() {
    setAddCards((prev) => prev + 8);
  }

  return (
    <div className="container flex justify-center w-full mx-auto mb-10">
      <div className="content flex flex-col items-center w-full max-w-7xl px-4 mt-8">
        <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
        {/* auto-fill: as many 18rem+ columns as fit, down to one column on phones */}
        <div className="grid w-full gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))]">
          {turbineData()}
        </div>
        {addCards < fieldData.length && (
        <button
          className="mt-4 border rounded-md p-2 text-sm "
          onClick={loadMoreTickets}
        >
          Load More
        </button>

        )}
      </div>
    </div>
  );
};

export default IssueBoard;
