import React from "react";
import { render } from "@testing-library/react";
import { Carousel } from "antd";

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

describe("Root component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should has prev, next and go function", () => {
    const ref = React.createRef();
    render(
      <Carousel ref={ref}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    );
    const { prev, next, goTo } = ref.current;
    console.log(ref.current.innerSlider.state.currentSlide);
    expect(typeof prev).toBe("function");
    expect(typeof next).toBe("function");
    expect(typeof goTo).toBe("function");
    expect(ref.current.innerSlider.state.currentSlide).toBe(0);
    ref.current.goTo(2);
    jest.runAllTimers();
    expect(ref.current.innerSlider.state.currentSlide).toBe(2);
    ref.current.prev();
    jest.runAllTimers();
    expect(ref.current.innerSlider.state.currentSlide).toBe(1);
    ref.current.next();
    jest.runAllTimers();
    expect(ref.current.innerSlider.state.currentSlide).toBe(2);
  });
});
