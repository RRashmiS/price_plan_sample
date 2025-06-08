import "./App.css";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Row, Col, Tag, Segmented, Card, List, Avatar } from "antd";
// import 'antd/dist/antd.css';
function App() {
  const [alignValue, setAlignValue] = React.useState("Pay Monthly");

  const cardMid = [
    {
      title: "All the benefits on the basic plan",
    },
    {
      title: "Rs.1,000,000 daily transfer limit",
    },
    {
      title: "7 free transfers every month",
    },
    {
      title: "Daily Airtime and Data payments up to Rs.150,000 / day",
    },
    {
      title: "7 free transfers every month",
    },
    {
      title: "1 Month free trial ",
    },
    {
      title: "Access to full financial analysis and summary",
    },
    {
      title: "7 free transfers every month",
    },
  ];
  const cardStart = [
    {
      title: "An upgrade from the Basic plan. You get more benefits.",
    },
    {
      title: "All the benefits on the basic plan",
    },
    {
      title: "Rs.1,000,000 daily transfer limit",
    },
    {
      title: "7 free transfers every month",
    },
    {
      title: "Daily Airtime and Data payments up to Rs.150,000 / day",
    },
    {
      title: "1 Month free trial ",
    },
  ];
  const cardEnd = [
    {
      title: "All the benefits on the basic plan",
    },
    {
      title: "Rs.1,000,000 daily transfer limit",
    },
    {
      title: "7 free transfers every month",
    },
    {
      title: "Daily Airtime and Data payments up to Rs.150,000 / day",
    },
    {
      title: "1 Month free trial ",
    },
    {
      title: "Access to full financial analysis and summary",
    },
    {
      title: "Early access to discounts, benefits, promos etc.",
    },
  ];
  return (
    <div className="AppContainer">
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0px",
        }}
      >
        <Col
          span={24}
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Tag
            style={{
              border: "1px solid #7677FB",
              color: "#7677FB",
              borderRadius: "50px",
              width: "28%",
              textAlign: "center",
            }}
          >
            Our Pricing
          </Tag>
          <span
            style={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "60px",
              width: "75%",
            }}
          >
            Flexible Pricing Plans to Suit Your Needs
          </span>
          <Segmented
            style={{
              border: "1.5px solid #7677FB",
              borderRadius: "100px",
              padding: "5px",
              marginTop: "40px",
            }}
            value={alignValue}
            // style={{ marginBottom: 8 }}
            onChange={setAlignValue}
            options={["Pay Monthly", "Pay Quarterly", "Pay Yearly"]}
          />
        </Col>
        <Row
          gutter={24}
          style={{
            marginTop: 40,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col md={7} xs={24}>
            <Card
              style={{
                // width: "100%",
                borderRadius: "20px",
                background: "#fff",
                fontSize: "16px",
                color: "#000",
                margin: "5px",
                border: "none",
              }}
            >
              <Row style={{}}>
                <Col span={24}>
                  <span style={{ fontWeight: "400", color: "#7677FB" }}>
                    Starter
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "50px",
                    }}
                  >
                    <span style={{ fontSize: "36px", fontWeight: "600" }}>
                      Free
                    </span>
                    <span>
                      An upgrade from the Basic plan. You get more benefits.
                    </span>
                    <span style={{ fontWeight: "500", padding: "10px 0" }}>
                      Benefits
                    </span>
                    <List
                      style={{ minHeight: "350px" }}
                      itemLayout="horizontal"
                      dataSource={cardStart}
                      renderItem={(item, index) => (
                        <List.Item style={{ padding: "5px", border: "none" }}>
                          <List.Item.Meta
                            style={{ color: "#fff" }}
                            avatar={
                              <CheckCircleOutlined
                                style={{
                                  background: "#ECFFDF",
                                  color: "#19AE57",
                                  borderRadius: "100px",
                                }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "#000",
                                  fontWeight: "400",
                                  lineHeight: "10px",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                  <Button
                    type="primary"
                    style={{
                      width: "100%",
                      background: "#7677FB",
                      borderRadius: "50px",
                      padding: "20px",
                    }}
                  >
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={7} xs={24}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  // top: 10,
                  right: 5,
                  background: "#FE7652",
                  color: "#fff",
                  padding: "4px 10px",
                  borderRadius: "0px 20px 0px 20px",
                  fontWeight: 600,
                  fontSize: "12px",
                  zIndex: 1,
                }}
              >
                Recommended
              </div>

              <Card
                style={{
                  // width: "100%",
                  borderRadius: "20px",
                  background: "#012444",
                  fontSize: "16px",
                  color: "#fff",
                  margin: "5px",
                  boxShadow: "0 4px 24px #0124443D",
                  border: "none",
                }}
              >
                <Row>
                  <Col span={24}>
                    <span style={{ fontWeight: "400", color: "#7677FB" }}>
                      Premium
                    </span>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "50px",
                      }}
                    >
                      <span style={{ fontSize: "36px", fontWeight: "600" }}>
                        Rs.30,000
                      </span>
                      <span>
                        An upgrade from the Basic plan. You get more benefits
                        and access.
                      </span>
                      <span style={{ fontWeight: "500", padding: "10px 0" }}>
                        Benefits
                      </span>

                      <List
                        style={{ minHeight: "350px" }}
                        itemLayout="horizontal"
                        dataSource={cardMid}
                        renderItem={(item, index) => (
                          <List.Item style={{ padding: "5px", border: "none" }}>
                            <List.Item.Meta
                              avatar={
                                <CheckCircleOutlined
                                  style={{
                                    background: "#ECFFDF",
                                    color: "#19AE57",
                                    borderRadius: "100px",
                                  }}
                                />
                              }
                              title={
                                <span
                                  style={{
                                    color: "#fff",
                                    fontWeight: "400",
                                    lineHeight: "10px",
                                  }}
                                >
                                  {item.title}
                                </span>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </div>

                    <Button
                      type="primary"
                      style={{
                        width: "100%",
                        background: "#7677FB",
                        borderRadius: "50px",
                        padding: "20px",
                      }}
                    >
                      Learn More
                    </Button>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>

          <Col md={7} xs={24}>
            <Card
              style={{
                // width: "100%",
                borderRadius: "20px",
                background: "#fff",
                fontSize: "16px",
                color: "#000",
                margin: "5px",
                border: "none",
              }}
            >
              <Row style={{}}>
                <Col span={24}>
                  <span style={{ fontWeight: "400", color: "#7677FB" }}>
                    Enterprise
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "50px",
                    }}
                  >
                    <span style={{ fontSize: "36px", fontWeight: "600" }}>
                      Rs.80,000
                    </span>
                    <span>
                      An upgrade from the Basic plan. You get more benefits.
                    </span>
                    <span style={{ fontWeight: "500", padding: "10px 0" }}>
                      Benefits
                    </span>
                    <List
                      style={{ minHeight: "350px" }}
                      itemLayout="horizontal"
                      dataSource={cardEnd}
                      renderItem={(item, index) => (
                        <List.Item style={{ padding: "5px", border: "none" }}>
                          <List.Item.Meta
                            style={{ color: "#000" }}
                            avatar={
                              <CheckCircleOutlined
                                style={{
                                  background: "#ECFFDF",
                                  color: "#19AE57",
                                  borderRadius: "100px",
                                }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "#000",
                                  fontWeight: "400",
                                  lineHeight: "10px",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                  <Button
                    type="primary"
                    style={{
                      width: "100%",
                      background: "#7677FB",
                      borderRadius: "50px",
                      padding: "20px",
                    }}
                  >
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default App;
