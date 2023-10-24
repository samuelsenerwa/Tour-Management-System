import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";

const Home = () => {
  return (
    <>
      {/* ============ hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =========== hero section ends ============ */}
    </>
  );
};

export default Home;
