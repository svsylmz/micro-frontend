import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/ProductApi";
import Product from "./Product";
import { Row, Col } from "antd";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((productsResult) => setProducts(productsResult.data));
  }, []);

  return (
    <div className="svs-products">
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col span={6} key={index}>
            <Product
              title={product.Title}
              description={product.Description}
              image={product.Image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
