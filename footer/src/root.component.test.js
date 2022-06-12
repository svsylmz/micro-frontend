import { render, screen } from "@testing-library/react";
import Root from "./root.component";
import { content } from "./components/Footer/data/footerContent";

describe("Footer root component", () => {
  it("footer have a content", () => {
    render(<Root />);

    expect(screen.getByTestId("svs-footer")).toHaveTextContent(content);
  });
});
