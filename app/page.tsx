"use client";
import { useState } from "react";
import AssessmentCards from "@/components/assessmentCards/AssessmentCards";
import fieldData from "@/data/Fleetdata";

const IssueBoard = () => {
  const [addCards, setAddCards] = useState(8);
  const [limitReader, setLimitReader] = useState();

  function turbineData() {
    return fieldData
      .slice(0, addCards)
      .map((turbine) => <AssessmentCards key={turbine.id} turbine={turbine} />);
  }

  function loadMoreTickets() {
    setAddCards((prev) => prev + 4);
  }

  return (
    <div className="container flex justify-center w-full h-screen mx-auto mb-10">
      <div className="content flex flex-col items-center justify-center w-350 h-screen mt-8">
        2 rows of 4 &quot;Assessment Cards&quot; that loads more as user scrolls
        down
        <div className=" w-400 grid lg:grid-cols-4 text-center">
          {turbineData()}
        </div>
        <button
          className="mt-4 border rounded-md p-2 text-sm "
          onClick={loadMoreTickets}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default IssueBoard;
