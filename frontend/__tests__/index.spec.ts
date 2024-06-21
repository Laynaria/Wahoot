import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";

import Index from "../pages/index.vue";

describe("Counter", () => {
  it("renders the counter component", () => {
    render(Index);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeDefined();
  });
});
