import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function FooterComponent(props) {
  return (
    <Footer data-testid="svs-footer" className="svs-footer">
      {props.content}
    </Footer>
  );
}
