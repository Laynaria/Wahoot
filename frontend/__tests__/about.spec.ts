import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";

import About from "~/pages/about.vue";

describe("About", () => {
  it("renders the h1 from about page", () => {
    render(About, { props: { test: false } });

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeDefined();

    expect(heading.innerHTML).toBe("About Us!");
  });
});
