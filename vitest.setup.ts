import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// jsdom (the pretend browser the tests run in) doesn't support
// <dialog>.showModal() or .close() yet, so we add simple versions.
// showModal opens the dialog. close shuts it and fires the "close" event,
// which is what makes a dialog's onClose prop run, like in a real browser.
HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
};
HTMLDialogElement.prototype.close = function () {
    this.open = false;
    this.dispatchEvent(new Event("close"));
};

afterEach(() => {
    cleanup();
    localStorage.clear();
});
