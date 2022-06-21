import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Container, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import vedio from "./vedio/BusinessService .mp4";
import "./Hero.css";

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
        width="80wh"
        height="60vh"
        onReady={() => console.log("ready now")}
      />
    </Modal>
  );
}

function Hero() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero_content">
            <h2>Get ready to impress</h2>
            <h1>
              Adept Technology for <br />
              Tommorrow Business
            </h1>
          </div>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div className="play">
            <BsFillPlayCircleFill
              onClick={() => setModalShow(true)}
              className="play_btn heartbeat "
            />
            <p>How we work</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;
