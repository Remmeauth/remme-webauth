import React from "react";
import { Row, Col, Icon} from 'antd';

import congrats from "../../images/congrats.gif"
import "./style.scss";

export default ({ name }) => (
  <div className="welcome-section">
    <img src={congrats} />
    <h1 className="h1" style={{color: "#464852"}}>Hi {name}</h1>
    <p style={{color: "#464852", fontSize: 18}}>You are successfully logged-in!<br/>Thank you for trying REMME WebAuth Demo.</p>
    <Row className="welcome-rows">
      <Col span={8}><a href="https://blockexplorer.remme.io" target="_blank"><Icon type="link" theme="outlined" /> REMChain Blockexplorer 1.0</a></Col>
      <Col span={8}><a href="https://docs.remme.io" target="_blank"><Icon type="link" theme="outlined" /> Developers Documentation</a></Col>
      <Col span={8}><a href="https://github.com/Remmeauth" target="_blank"><Icon type="link" theme="outlined" /> Source code on GitHub</a></Col>
    </Row>
  </div>
);
