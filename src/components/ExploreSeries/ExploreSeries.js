import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { Row, Col, Tab, Nav, Pagination } from 'react-bootstrap';
import { FaChevronCircleLeft } from "react-icons/fa";
import './ExploreSeries.scss';
import Header from "./../Header/Header";
import ExploreSermons from './ExploreSermons';
import ExploreSermonSeries from './ExploreSermonSeries';

export default class ExploreSeries extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      key: 'sermons'
    }
  }
  render(){
    return (
        <section id="exploreSeries" className="container-section">
            <Header />
            <Row className='text-align-center'>
                <Row className='text-align-center content-wrapper'> 
                    <Row  className='explore-seriese-header text-align-center' sm="12" md="12" lg="12" xs="12">
                        <Row sm="12" md="12" lg="12" xs="12" className='mb-1'><h3 className='series-title uppercase-text'>FORGIVENESS (HUMAN)</h3></Row>
                    </Row>
                </Row>
            </Row>
            <Tab.Container defaultActiveKey="sermons" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                <Row style={{ width: '100%' }}>
                    <Col sm={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <Nav variant="pills" className="flex-row row" style={{display: 'flex', justifyContent: 'center'}}>
                        <Nav.Item xs={12}>
                            <Nav.Link eventKey="sermonseries">
                            <div className="tab-btn gray-border">
                                <span>SERMON SERIES</span>
                            </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item xs={12}>
                            <Nav.Link eventKey="sermons">
                            <div className="tab-btn gray-border">
                                <span>SERMONS</span>
                            </div>
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} className="mt-5 no-padding">
                        <Tab.Content>
                        <Tab.Pane eventKey="sermonseries">
                            <ExploreSermonSeries />
                        </Tab.Pane>
                        <Tab.Pane eventKey="sermons">
                            <ExploreSermons />
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Row  className='explore-seriese-footer text-align-center' sm="12" md="12" lg="12" xs="12">
                <Pagination size="sm"> 
                    <Pagination.Prev><FaChevronCircleLeft className="accordion-icon"/></Pagination.Prev>  
                    <Pagination.Item active>1</Pagination.Item> 
                    <Pagination.Item>2</Pagination.Item> 
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Ellipsis></Pagination.Ellipsis>
                    <Pagination.Item>8</Pagination.Item>
                    <Pagination.Next><FaChevronCircleRight className="accordion-icon"/></Pagination.Next>                 
                </Pagination>
            </Row>
        </section>
        
    )
  }
}