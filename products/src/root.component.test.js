import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "antd";

describe("Product component", () => {
  it("product detail", () => {
    class WrapperComponent extends React.Component {
      render() {
        return (
          <Card
            // eslint-disable-next-line react/no-string-refs
            title="Card title"
          >
            <p>Product content</p>
          </Card>
        );
      }
    }
    const { getByText } = render(<WrapperComponent />);
    expect(getByText("Product content")).toBeInTheDocument();
  });
});
