import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default function Product(props) {
  return (
    <Card hoverable cover={<img alt={props.title} src={props.image} />}>
      <Meta title={props.title} description={props.description} />
    </Card>
  );
}
