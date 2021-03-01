import React from "react";
import { Link } from 'react-router-dom'
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav, Accordion, Card } from 'react-bootstrap';
import { FaChevronCircleRight, FaChevronCircleDown, FaSearch } from "react-icons/fa";
import './searchedItem.scss';
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';
import Photo_blank from './../../assets/resource/images/profile-blank.png';
import Expand from './../../assets/resource/items/expand.svg';
export default class SearchedItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
            modalShow: false,
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({
            modalShow: true
        })
    }

    handleHide() {
        this.setState({
            modalShow: false
        })
    }

    render(){
        return (
            <section id="search-item">
                <Row className="land_header container-section">
                    <img src={Logo} className="logo" />
                    <div className="nav_bar">
                    <ul className="header-nav-bar">
                        <li className="li-browse-by">
                        <span className="browser-btn-header"><Link to="/home/browseby">BROWSE BY</Link></span>
                        </li>
                        <li className="gray-border">
                        <span className="topic-btn-header"><Link to="/home/browsetopic">TOPIC</Link></span>
                        </li>
                        <li className="gray-border active">
                        <span className="book-btn-header"><Link to="/home/bookview">BOOK</Link></span>
                        </li>
                        <li className="gray-border">
                        <div className="top-search">
                            <div className="search-icon">
                            <FaSearch width="25" height="25"/>
                            </div>
                            <input type="text" placeholder="Search" className="input-search-box"/>
                        </div>                
                        </li>
                    </ul>
                    </div>
                </Row>
                <p className="item-title">
                    2 TIMOTHY
                </p>
                <div className={'author-content'}>
                    <div className={'photo-content'}>
                        <img src={Photo_blank} className={'photo'} />
                    </div>
                    <p className={'author'}><span>by Steven Cole </span><img src={Expand} onClick={this.handleShow} /></p>
                    <p className={'author-desc'}>August 6, 2006-February 4, 2007 | Flagstaff Christian Felloship | Flagstaff, AZ</p>
                </div>
                <div className="item-content">
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    1. Foundation for Faithful Ministry (1:1-5)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    2. Saved to Serve (1:6-7)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <p>- Big Idea: Because you are saved you must serve Christ.</p>
                                    <p>- Make sure that you are saved before you try to serve (1:6:For this reason").</p>
                                    <p>- God gifts every saved person for service (1:6-7). Two ways: 
                                        <span>1. Holy Spirit Himself</span>
                                        <span>2. Spirital gifts</span>
                                    </p>
                                    <p>God sovereignly gifts us, but we are responsible to discover, develop, kindle, and exercise our gifts (1:6 "fan into flame").</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    3. Serving through Suffering (1:8)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    4. Why Suffer for the Gospel? (1:9)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    5. A Cause Worth Dying For (1:10-11)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="6" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    6. Banking with God (1:12-14)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="7" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    7. The Ministry of Refreshment (1:15-18)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="8" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    8. Strong in Grace (2:1)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="9" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    9. Handing off the Truth (2:2)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="10" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    10. Embracing Hardship for the Gospel (2:3-7)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="11" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    11. Endurance (2:8-13)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="12" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    12. Using the Word Properly (2:14-19)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="12">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="13" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    13. The Person God Uses (2:20-22)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="13">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="14" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    14. The Gentle Art of Correction (2:23-26)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="14">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="15" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    15. The Danger of Empty Religion (3:1-9)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="15">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="16" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    16. Spiritual Faithfulness (3:10-15)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="16">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="17" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    17. Why You Need the Bible (3:16-17)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="17">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="18" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    18. Why You Can Trust the Bible (3:18)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="18">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="19" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    19. Preaching and Hearing God`s Word (4:1-5)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="19">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="20" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    20. Finishing Well (4:6-8)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="20">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="21" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                    21. Facing Life`s Winter (4:9-22)
                                    { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="21">
                                <Card.Body>card body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            <AuthorModal show={this.state.modalShow} onHide={this.handleHide} photo={Photo_blank} />
            </section>
        )
  }
}

function AuthorModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="author-modal-content">
            <img src={props.photo} className={'modal-photo'} />
            <p className={'title'}>STEVEN COLE</p>
            <p className={'desc'}>Pastor | Flagstff Christian Fellowship | Flagstaff, AZ</p>
          </div>
          <p className={'author-desc'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Modal.Body>
      </Modal>
    );
  }