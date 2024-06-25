import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import { useUserContext } from "~/contexts/userContext";
import Login from "~/pages/login.vue";
const { vueApp } = useNuxtApp();

vueApp._context.provides = {
  ...vueApp._context.provides,
  REMOTE_SETTINGS: () => {
    useUserContext();
  },
};

describe("Login", () => {
  it("renders", () => {
    render(Login, { props: { test: false } });

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeDefined();

    expect(heading.innerHTML).toBe("About Us!");
  });
});
