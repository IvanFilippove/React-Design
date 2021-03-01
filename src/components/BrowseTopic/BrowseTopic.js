import React from "react";
import { Link } from 'react-router-dom'
import { FaSearch, FaChevronCircleRight } from "react-icons/fa";
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav } from 'react-bootstrap';
import Bible from './Bible';
import Sepcific from './Sepcific';
import Search from './Search';
import Header from "./../Header/Header";
export default class BrowseTopic extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      key: 'specific'
    }
  }
  render(){
    return (
      <section id="BrowseTopic"  className="container-section">
        <Header />
        <div className="title-header mt-7">
          <div className="title-page">
            <h1 className="font-32 font-light center-text letter-space-4">BROWSE BY BOOK</h1>
          </div>
        </div>
        <div className="tab-btns mt-5 row">
          <Tab.Container defaultActiveKey="specific" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
            <Row style={{ width: '100%' }}>
              <Col sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Nav variant="pills" className="flex-row row" style={{display: 'flex', justifyContent: 'center'}}>
                  <Nav.Item xs={12}>
                    <Nav.Link eventKey="bible">
                      <div className="tab-btn gray-border">
                        <span>BOOK OF THE BIBLE</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item xs={12}>
                    <Nav.Link eventKey="specific">
                      <div className="tab-btn gray-border">
                        <span>SPECIFIC TOPIC</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item xs={12}>
                    <Nav.Link eventKey="search">
                      <div className="tab-btn gray-border">
                        <span>SEARCH THE SITE</span>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} className="mt-5 no-padding">
                <Tab.Content>
                  <Tab.Pane eventKey="bible">
                    <Bible />
                  </Tab.Pane>
                  <Tab.Pane eventKey="specific">
                    <Sepcific />
                  </Tab.Pane>
                  <Tab.Pane eventKey="search">
                    <Search />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
    )
  }
}