import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Favour Adeshina </span>
            from <span className="purple"> Ekiti State, Nigeria.</span>
            <br />
            
            <br />
            Favour Adeshina is a professional and talented software developer, community manager, and technical writer with over 5 years of building products, communities and crafting perfectly tailored technical articles and contents. 
            <br />
            <br />
            My Core values are diligience, prudence and hardwork, and I enjoy working as a team. 
            <br />
            <br/>
            I have a B.Sc (ED) in Computer Science Education from Ekiti State Univeristy, Ado-Ekiti, Ekiti State, Nigeria, alongside several certifications from Mircosoft, Google, Coursera, etc., in AI and Prompt Engineering, Community Management, Software Development and Technical Writing. 
            <br />
            <br/>
            In my spare time, I love: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
