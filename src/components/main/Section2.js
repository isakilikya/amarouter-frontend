import React from "react";

import { Row, Col, Figure } from "react-bootstrap";

import javaScriptLogo from "../../images/JavaScriptLogo.png";
import pythonLogo from "../../images/pythonLogo.png";
import sqlLogo from "../../images/sqlLogo.png";
import VideoPhoto from "../../images/VideoPhoto.png";
import RehberlerPhoto from "../../images/RehberlerPhoto.png";
import BlogPhoto from "../../images/BlogPhoto.png";
import CeviriPhoto from "../../images/CeviriPhoto.png";

function Section1() {
  return (
    <section className="App-section2 pt-5 pb-5">
      <br />
      <br />
      <div className="container">
        <Row className="justify-content-md-center mb-5">
          <h3>Popüler kursları Öğrenmek için doğru yerdesiniz.</h3>
        </Row>
        <Row id="rowLogo" className="mb-5">
          <Figure xs={4} md={4}>
            <Figure.Image
              width={100}
              height={100}
              alt="JavaScript"
              src={javaScriptLogo}
            />
            <Figure.Caption>JavaScript</Figure.Caption>
          </Figure>
          <Figure xs={4} md={4}>
            <Figure.Image
              width={100}
              height={100}
              alt="Python"
              src={pythonLogo}
            />
            <Figure.Caption>Python</Figure.Caption>
          </Figure>
          <Figure xs={4} md={4}>
            <Figure.Image width={100} height={100} alt="SQL" src={sqlLogo} />
            <Figure.Caption>SQL</Figure.Caption>
          </Figure>
        </Row>
        <Row id="rowPhoto">
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={RehberlerPhoto}
              />
              <div className="centered-text">REHBERLER</div>
              <Figure.Caption>
                Başucu kitabı niteliğindeki Rehberler sayesinde nokta atışı
                araştırmalar yapın.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={VideoPhoto}
              />
              <div className="centered-text">VİDEO KURSLAR</div>
              <Figure.Caption>
                Güncel Video Kurslar sayesinde kendinize yeni yetenekler
                kazandırın.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={BlogPhoto}
              />
              <div className="centered-text">BLOG YAZILARI</div>
              <Figure.Caption>
                Özenle hazırlanmış Blog yazılarıyla vizyonunuzu genişletin.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={3}>
            <Figure>
              <Figure.Image
                width={250}
                height={250}
                alt="JavaScript"
                src={CeviriPhoto}
              />
              <div className="centered-text">ÇEVİRİLER</div>
              <Figure.Caption>Çeviri kitaplardan faydalanın.</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Section1;
