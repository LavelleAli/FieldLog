'use client'
import { useState } from "react";
import AssessmentCards from "@/components/assessmentCards/AssessmentCards";
import fieldData from "@/data/Fleetdata";

const IssueBoard = () => {
  
  function turbineData() {
    return (
      fieldData.slice(0, 8).map((turbine) => <AssessmentCards key={turbine.id} turbine={turbine}/>)
    )
  }

  return (
   <div className="container flex justify-center w-full h-screen mb-10">
    <div className="row w-300 pl-10 pr-10">
      <div className="content flex flex-col items-center w-350 h-220 mt-8">
        2 rows of 4 &quot;Assessment Cards&quot; that loads more as user scrolls down
        <div className=" w-400 h-150 grid lg:grid-cols-4 text-center">
        {turbineData()}
        
        

        </div>
        <button className="mt-4 border rounded-md p-2 text-sm">Load More</button>
      </div>
    </div>
   </div>
  );
};

export default IssueBoard;
