import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { saveCards } from "@/data/CardStorage";
import { Turbine } from "@/data/Fleetdata";
import IssueBoard from "@/components/issueboard/IssueBoard";

// The Edit Card form only matters once its changes show on the board,
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

test("Edits a card and shows the new title in place of the old one", async () => {
  // Arrange: one card on the board
  saveCards([openCard]);
  render(<IssueBoard />);
  const user = userEvent.setup();

  // Act: click the card's edit button to open the Edit Card form
  await user.click(
    screen.getByRole("button", { name: `Edit ${openCard.title}: ${openCard.equipment}` }),
  );
  const form = within(screen.getByRole("dialog", { name: "Edit Card" }));

  // Act: replace the title, then save
  const titleBox = form.getByLabelText("Title:");
  await user.clear(titleBox);
  await user.type(titleBox, "WT-999");
  await user.click(form.getByRole("button", { name: "Save Changes" }));

  // Assert: the new title shows, the old one is gone, and it's still one card
  expect(screen.getByRole("heading", { name: "WT-999" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: openCard.title })).not.toBeInTheDocument();
  expect(screen.getByText("Open: 1")).toBeInTheDocument();
});
