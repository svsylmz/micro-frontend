import React from "react";
import FooterComponent from "./FooterComponent";
import { content } from "./data/footerContent";

export default function FooterWrapper() {
  return <FooterComponent content={content} />;
}
