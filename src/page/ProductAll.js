import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ProductAll = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="mt-3 mb-3">
          <Card>
            <Card.Img
              width={725}
              src="https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/ww/mosaic_1_v5/Card_1_TB.jpg/_jcr_content/renditions/cq5dam.web.1263.1263.webp"
            />
            <Card.ImgOverlay>
              <Card.Title className="card-title-a">
                2022 {<br />}가을/겨울 여성
              </Card.Title>
            </Card.ImgOverlay>
            <Card.ImgOverlay>
              <Card.Title className="card-title-b text-end">
                구매하기
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="mt-3 mb-3">
          <Card>
            <Card.Img
              width={725}
              src="https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/ww/mosaic_1_v5/Card_2_TB.jpg/_jcr_content/renditions/cq5dam.web.1263.1263.webp"
            />
            <Card.ImgOverlay>
              <Card.Title className="card-title-a">
                2022 {<br />} 가을/겨울 남성
              </Card.Title>
            </Card.ImgOverlay>
            <Card.ImgOverlay>
              <Card.Title className="card-title-b text-end">
                구매하기
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Img src="./shop.png" />
            <Card.ImgOverlay className="card-title-c">
              <Card.Title className="card-title-a text-white">
                프라다 심볼
              </Card.Title>
              <Card.Title className="text-white text-decoration-underline fs-6">
                남성 제품 여성 제품
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mt-3">
            <Card.Img
              width={725}
              src="https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/ww/mosaic_2_v4/Card_1_TB.jpg/_jcr_content/renditions/cq5dam.web.1263.1263.webp"
            />
            <Card.ImgOverlay>
              <Card.Title className="card-title-a">
                여성 레디 투 웨어
              </Card.Title>
            </Card.ImgOverlay>
            <Card.ImgOverlay>
              <Card.Title className="card-title-b text-end">
                구매하기
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Img
              width={725}
              src="https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/ww/mosaic_2_v4/Card_2_TB.jpg/_jcr_content/renditions/cq5dam.web.1263.1263.webp"
            />
            <Card.ImgOverlay>
              <Card.Title className="card-title-a">
                남성 레디 투 웨어
              </Card.Title>
            </Card.ImgOverlay>
            <Card.ImgOverlay>
              <Card.Title className="card-title-b text-end">
                구매하기
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductAll;
