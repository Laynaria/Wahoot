import { render, fireEvent, screen } from "@testing-library/vue";
import NotifyWrapper from "./wrappers/NotifyWrapper.vue";

import * as NotifyService from "~/services/notify";

const { notifySuccess, notifyError, notifyInfo, notifyWarn } = NotifyService;

describe("Success Notifications", () => {
  it("Success Notification function to exist", () => {
    expect(notifySuccess).toBeTruthy();
    expect(typeof notifySuccess).toBe("function");
  });

  it("Success Toast rendered properly when funciton is called", async () => {
    render(NotifyWrapper);

    const button = await screen.findByText("Success Button");

    await fireEvent.click(button);

    const notification = await screen.findByText("test Successfull");

    expect(notification.innerHTML).toBe("test Successfull");
  });
});

describe("Error Notifications", () => {
  it("Error Notification function to exist", () => {
    expect(notifyError).toBeTruthy();
    expect(typeof notifyError).toBe("function");
  });

  it("Error Toast rendered properly when funciton is called", async () => {
    render(NotifyWrapper);

    const button = await screen.findByText("Error Button");

    await fireEvent.click(button);

    const notification = await screen.findByText("test Error");

    expect(notification.innerHTML).toBe("test Error");
  });
});

describe("Info Notifications", () => {
  it("Info Notification function to exist", () => {
    expect(notifyInfo).toBeTruthy();
    expect(typeof notifyInfo).toBe("function");
  });

  it("Info Toast rendered properly when funciton is called", async () => {
    render(NotifyWrapper);

    const button = await screen.findByText("Info Button");

    await fireEvent.click(button);

    const notification = await screen.findByText("test");

    expect(notification.innerHTML).toBe("test");
  });
});

//     it("Warn Notification function to exist", () => {
//       expect(notifyWarn).toBeTruthy();
//       expect(typeof notifyWarn).toBe("function");
//     });
