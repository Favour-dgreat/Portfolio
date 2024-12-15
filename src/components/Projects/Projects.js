import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gtas from "../../Assets/Projects/gtas.jpeg";
import sell from "../../Assets/Projects/sell.png";
import totalscope from "../../Assets/Projects/totalscope.jpeg";
import xprintlogistics from "../../Assets/Projects/xprintlogistics.jpeg";
import chow from "../../Assets/Projects/chow.jpeg";
import cefmorsi from "../../Assets/Projects/cefmorsi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cefmorsi}
              isBlog={false}
              title="CEFMORSI"
              description="A Mobile application built with Flutter (Dart), Flutterflow and Firebase. Have features which allows user to access contents ranging from vidoes, books, events, magazines, and websites for the organisation. "
              ghLink="https://github.com/Favour-dgreat/cefmorsi-app"
              demoLink="https://cefmorsi-gicc8p.flutterflow.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gtas}
              isBlog={false}
              title="GtasNFT-Minter"
              description="Give them a SMILE NFT Marketplace is a decentralized application that provides donation to indigent children as you buy their images as NFTs. This Project is buit with React.js, Hardhat, Solidity, Openzeppelin, Bootstrap and Celo-tools"
              ghLink="https://github.com/Favour-dgreat/GtasNFT-Minter"
              demoLink="https://favour-dgreat.github.io/GtasNFT-Minter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sell}
              isBlog={false}
              title="Sell-My-Stuff"
              description="Sell My Stuff is a decentralized platform for selling digital/tech items on the NEAR blockchain. With this app, users are able to upload an item for sale, sell it without any middleman. Also, all items purchased will be automatically added to a user collection. This project is built with Rust. "
              ghLink="https://github.com/Favour-dgreat/Sell-My-Stuff"
              demoLink="https://favour-dgreat.github.io/Sell-My-Stuff/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chow}
              isBlog={false}
              title="ChowChow"
              description="Chow chow is a charity-focused memecoin that channels the power of community to support animal welfare and rescue organizations. "
              ghLink="https://github.com/Favour-dgreat/chow"
              demoLink="https://chowchow.meme/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={totalscope}
              isBlog={false}
              title="TotalScope Agency"
              description="The Website for a leading web3 agency, web design and development was handled by me. "
              ghLink="https://github.com/Favour-dgreat/TotalScope"
              demoLink="https://www.totalscope.agency/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xprintlogistics}
              isBlog={false}
              title="XprintLogistics"
              description="A Car Rental Service Website built with ReactJS and Vercel."
              ghLink="https://github.com/Favour-dgreat/xprintlogistics"
              demoLink="https://xprintlogistics.com/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
