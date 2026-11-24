import {expect, test} from "vitest";
import { loadCards, saveCards } from "./CardStorage";
import { Turbine } from './Fleetdata';

const cardObject: Turbine[] = [{
    id: "7e55f3d0-7606-4437-b6ab-45cf09ef2f3a",
    equipment: "Loose blade root bolts",
    title: "WT-037",
    priority: "low",
    type: "mechanical",
    status: "resolved",
    notes: "Replaced two damaged bolts and re-torqued all blade 1 root bolts to spec.",
    createdAt: "2026-08-05T11:59:00.000Z",
    updatedAt: "2026-10-02T11:52:00.000Z",
  }];


test("returns null when nothing is saved", () => {
    const results = loadCards();

    expect(results).toBe(null);
});

test("returns a saved card when cards are saved", () => {

    saveCards(cardObject);
    const results = loadCards();

    expect(results).toEqual(cardObject)
});