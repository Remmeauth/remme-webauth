import React from "react";
import { Row, Col, Icon} from 'antd';

import congrats from "../../images/congrats.gif"
import "./style.scss";

const links = [
  {
    link: "https://blockexplorer.remme.io",
    title: "REMChain Blockexplorer 1.0"
  },
  {
    link: "https://docs.remme.io",
    title: "Developers Documentation"
  },
  {
    link: "https://github.com/Remmeauth",
    title: "Source code on GitHub"
  }
]

export default ({ name }) => (
  <div className="welcome-section">
    <img src={congrats} />
    <h1 className="h1" style={{color: "#464852"}}>Hi {name}</h1>
    <p style={{color: "#464852", fontSize: 18}}>You are successfully logged-in!<br/>Thank you for trying REMME WebAuth Demo.</p>
    <Row className="welcome-rows">
      {links.map( item =>
          <Col span={8}><a href={item.link} target="_blank"><Icon type="link" theme="outlined" /> {item.title}</a></Col>
      )}
    </Row>
  </div>
);
