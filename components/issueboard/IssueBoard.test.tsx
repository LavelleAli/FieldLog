import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { saveCards } from "@/data/CardStorage";
import { Turbine } from "@/data/Fleetdata";
import userEvent from "@testing-library/user-event";
import IssueBoard from "./IssueBoard";




const openCard: Turbine = {
  id: "test-1",
  title: "WT-100",
  equipment: "Loose bolts",
  priority: "low",
  type: "mechanical",
  status: "open",
  notes: "Check the torque",
  createdAt: "2026-10-01T10:00:00.000Z",
  updatedAt: "2026-10-01T10:00:00.000Z",
};




test("shows a saved card", () => {
  saveCards([openCard]);
  render(<IssueBoard />);

  expect(
    screen.getByRole("heading", { name: openCard.title }),
  ).toBeInTheDocument();
});

test("User changes card status, dropdown changes to selected value, dashboard counts update", async () => {
  saveCards([openCard]);
  render(<IssueBoard />);
  const user = userEvent.setup();
  const dropdown = screen.getByRole("combobox", { name: "Status:" });

  await user.selectOptions(dropdown, "resolved");

  expect(dropdown).toHaveValue("resolved");
  expect(screen.getByText("Open: 0")).toBeInTheDocument();
  expect(screen.getByText("Resolved: 1")).toBeInTheDocument();
});

test("Displays cards that match search query while retaining card count displayed on dashboard", async () => {
  const resolvedCard: Turbine = {...openCard, 
    id: "test-2", 
    title: "WT-200", 
    status: "resolved"
  };
  saveCards([openCard, resolvedCard]);
  render(<IssueBoard/>);
  const user = userEvent.setup();
  const searchbox = screen.getByRole("searchbox");
  await user.type(searchbox, "WT-100")
  
 expect(screen.getByRole("heading", {name: openCard.title})).toBeInTheDocument();
 expect(screen.queryByRole("heading", { name: resolvedCard.title})).not.toBeInTheDocument();
 expect(screen.getByText("Open: 1")).toBeInTheDocument();
 expect(screen.getByText("Resolved: 1")).toBeInTheDocument();
 
});
