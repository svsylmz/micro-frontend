import { fireEvent, render, screen } from "@testing-library/react";
import Root from "./root.component";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Header root component", () => {
  it("calls onClick prop when clicked", () => {
    const { container } = render(<Root />);
    const button = container.querySelector("button");
    expect(fireEvent.click(button)).toBeTruthy();
  });

  it("drawer have a title", () => {
    const { container } = render(<Root />);
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(screen.getByTestId("header-drawer")).toHaveTextContent("svs");
  });
});
