import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import l from "./2.png";
import c from "./3.png";
import b from "./4.png";
import "./Profile.css";

function Profile() {
  return (
    <Container fluid>
      <Row className="p-0">
        <Col className="p-0">
          <div className="bg-header-img">
            <div className="body-container">
              <div className="content">
                <div className="header">
                  <Row>
                    <Col xs={5}>
                      <img src={l} className="header-img" />
                    </Col>
                    <Col xs={7} className="name-blk">
                      <h4 className="name">Saravanan Murugan</h4>
                      <p className="desigination">Group Head-Digital</p>
                      <Row>
                        <Col>
                          <img src={c} className="cl-logo" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="buttons">
                  <Row>
                    <Col>
                      <button className="btnn">Save Contact</button>
                    </Col>
                    <Col>
                      <button className="btnn bg-btnn">Share Contact</button>
                    </Col>
                  </Row>
                </div>
                <div className="brd">
                  <img src={b} className="bord-img" />
                </div>
                <div className="contact-info">
                  <h6 className="headings">Contact Information</h6>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-phone icons"></i>
                    </Col>
                    <Col xs={10}>
                      <label className="text">+91 98857 56885</label>
                    </Col>
                  </Row>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-envelope icons"></i>
                    </Col>
                    <Col xs={10}>
                      <label className="text">saravanan.m@cavinkare.com</label>
                    </Col>
                  </Row>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-globe icons"></i>
                    </Col>
                    <Col xs={10}>
                      <label className="text">
                        <a href="#">cavinkare.com</a>
                      </label>
                    </Col>
                  </Row>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-map-marker icons"></i>
                    </Col>
                    <Col xs={10}>
                      <label className="text top-imp-z">
                        No. 18, B Block, Flat No. B14, Santhosh Reddy Building,
                        Marathahalli, Bangalore - 560037
                      </label>
                    </Col>
                  </Row>
                </div>
                <div className="brd">
                  <img src={b} className="bord-img" />
                </div>
                <div className="contact-info">
                  <h6 className="headings">Links</h6>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-link ilinks"></i>
                    </Col>
                    <Col xs={9} className="br-btm-1">
                      <label className="itext">Link 1</label>
                    </Col>
                    <Col xs={1} className="br-btm-1">
                      <i className="fa fa-angle-right iarrow"></i>
                    </Col>
                  </Row>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-link ilinks"></i>
                    </Col>
                    <Col xs={9} className="br-btm-1">
                      <label className="itext">Link 1</label>
                    </Col>
                    <Col xs={1} className="br-btm-1">
                      <i className="fa fa-angle-right iarrow"></i>
                    </Col>
                  </Row>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-link ilinks"></i>
                    </Col>
                    <Col xs={9} className="br-btm-1">
                      <label className="itext">Link 1</label>
                    </Col>
                    <Col xs={1} className="br-btm-1">
                      <i className="fa fa-angle-right iarrow"></i>
                    </Col>
                  </Row>
                  <Row className="info">
                    <Col xs={2}>
                      <i className="fa fa-link ilinks"></i>
                    </Col>
                    <Col xs={9} className="br-btm-1">
                      <label className="itext">Link 1</label>
                    </Col>
                    <Col xs={1} className="br-btm-1">
                      <i className="fa fa-angle-right iarrow"></i>
                    </Col>
                  </Row>
                </div>
                <div className="footer">
                  <i className="fa fa-copyright" aria-hidden="true"></i> 2024,
                  CavinKare Pvt. Ltd. All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
