import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { saveCards } from "@/data/CardStorage";
import { Turbine } from "@/data/Fleetdata";
import IssueBoard from "@/components/issueboard/IssueBoard";

// The Create Card form only matters once it adds a card to the board,
// so this test renders the whole board and uses the form like a user would.

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

test("Creates a new card and adds it to the dashboard counts", async () => {
  // Arrange: start with one open card on the board
  saveCards([openCard]);
  render(<IssueBoard />);
  const user = userEvent.setup();

  // Act: open the Create Card form
  await user.click(screen.getByRole("button", { name: "Add Card+" }));

  // Look inside the form only, so we don't grab the card's own Status dropdown
  const form = within(screen.getByRole("dialog", { name: "Create Card" }));

  // Act: fill in every required field, then submit
  await user.type(form.getByLabelText("Title:"), "WT-300");
  await user.type(form.getByLabelText("Equipment:"), "Oil leak");
  await user.selectOptions(form.getByLabelText("Priority:"), "high");
  await user.selectOptions(form.getByLabelText("Type:"), "hydraulic");
  await user.selectOptions(form.getByLabelText("Status:"), "open");
  await user.click(form.getByRole("button", { name: "Submit" }));

  // Assert: the new card shows, the old one is still there, and Open counts both
  expect(screen.getByRole("heading", { name: "WT-300" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: openCard.title })).toBeInTheDocument();
  expect(screen.getByText("Open: 2")).toBeInTheDocument();
});
