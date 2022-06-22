import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceImg from "../../../Images/servise_content.jpg";
import ReactPlayer from "react-player";
import vedio from "../../Hero/vedio/BusinessService .mp4";
import "./Resources.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ReactPlayer
        url={vedio}
        playing={true}
        muted={true}
        controls={true}
        volume={1}
        width="100wh"
        height="60vh"
        onReady={() => console.log("ready now")}
      />
    </Modal>
  );
}

function Resources() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <section className="resources_area">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div className="resourse_content">
                <small>Our Dedicated Resources</small>
                <h2>
                  Sacrifices are made up <br /> with success
                </h2>

                <p>
                  We are not just a virtual team, we're your offshore partners
                  when it comes to executing & monitoring projects. Hire
                  dedicated human resource from a multifunctional team of
                  creative web designers, highly experienced developers &
                  productive digital marketers who'll be at your service 24X7 to
                  support you in trouble. Breaking down the complex business
                  goals into technology based solutions & strategically
                  effective campaigns is a habit here.
                </p>
              </div>
              <div className="know_more">
                <Link to="/">Know More</Link>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="service_picture">
                <img
                  src={serviceImg}
                  alt=""
                  onClick={() => setModalShow(true)}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <div className="service_play">
                  <FaPlayCircle
                    onClick={() => setModalShow(true)}
                    className="play"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Resources;
