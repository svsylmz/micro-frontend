import React, { useState } from "react";
import { Layout, Drawer, Button, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { menuItems } from "./data/menu";
import HeaderLogo from "./HeaderLogo";
const { Header } = Layout;

export default function HeaderWrapper() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header>
      <Row>
        <Col span={12}>
          <Button icon={<MenuOutlined />} size="large" onClick={showDrawer} />
        </Col>
        <Col span={12}>
          <HeaderLogo
            src="https://cdn.dsmcdn.com/seller-center/shared/header/assets/svs-white.svg"
            alt="svs"
          />
        </Col>
      </Row>
      <Drawer
        data-testid="header-drawer"
        title="svs"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        {menuItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Drawer>
    </Header>
  );
}
