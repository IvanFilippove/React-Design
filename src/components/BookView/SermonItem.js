import React from "react";
import Header from "./../Header/Header";
import Photo_blank from './../../assets/resource/images/profile-blank.png';
import PLAY_VIDEO from './../../assets/resource/items/playbutton_dropshadow_w.svg';
import PLAY_BAR from './../../assets/resource/items/playbar.svg';
import Expand from './../../assets/resource/items/expand.svg';
import { Button, Accordion, Card, Image } from 'react-bootstrap';
import { FaChevronCircleRight, FaChevronCircleDown } from "react-icons/fa";

export default class SermonItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    toggleEvent(ev) {
        
    }

    render(){
        return (
            <section id="sermon-item">
                <Header />
                <div className={'title-content'}>
                    <p className={'title'}>Foundation for Faithful Ministry</p>
                    <p className={'sub-title'}>2 Timothy 1:1-15</p>
                    <p className={'sub-desc'}>Series: <a>2 Timothy</a> (5 of 21)</p>
                    <img src={Photo_blank} />
                    <p className={'author'}>by Steven Cole<img src={Expand} onClick={this.handleShow} /></p>
                    <p className={'author-desc'}>August 6, 2005 | FlagStaff Christian Fellowship | Flagstaff, AZ</p>
                    <p className={'tag-content'}>
                        <span>Tags:</span>
                        <button className={'tag'}>Gospel</button>
                        <button className={'tag'}>2 Timothy</button>
                        <button className={'tag'}>Faithful</button>
                        <button className={'tag'}>Ministry</button>
                    </p>
                    <p className={'theme-content'}>
                        <span className={'theme active'}>QUICK JUMP </span> |
                        <span className={'underline theme'}>OUTLINE</span>  |
                        <span className={'underline theme'}>AUDIO/VIDEO</span> |
                        <span className={'underline theme'}>MANUSCRIPT</span>  |
                        <span className={'underline theme'}>SMALL GROUP QUESTIONS</span>  |
                        <span className={'underline theme'}>EXTRAS</span>
                    </p>
                </div>
                <div className={'idea-content'}>
                    <p className={'title'}>BIG IDEA</p>
                    <p className={'desc'}>A firm foundation for faithful ministry rests on knowing God`s call <br/> on your life through the gospel.</p>
                </div>
                <div className={'outline-content'}>
                    <p className={'sermon-outline'}>SERMON OUTLINE</p>
                    <div className={'item-content'}>
                        <p className={'title'}>Introduction</p>
                        <div className={'desc-content'}>
                            <p className={'desc'}>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className={'desc'}>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className={'desc'}>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className={'desc'}>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className={'desc'}>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className={'item-content'}>
                        <p className={'title'}>Body</p>
                        <p className={'desc'}>
                            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className={'desc'}>
                            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className={'desc'}>
                            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className={'desc'}>
                            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className={'item-content'}>
                        <p className={'title'}>Conclusion</p>
                        <p className={'desc'}>
                            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className={'desc'}>
                            - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className={'bottom-divider-content'}>
                    
                </div>
                <div className={'accordian-content'}>
                    <Accordion>
                        <Card className={'video-accordian'}>
                            <Card.Header>
                                {/* <div className={'video-button'}> */}
                                    <span> WATCH SERMON</span>
                                    { this.state.isExpand ? 
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="minus" onClick={e => this.toggleEvent(e.target)}>
                                        <FaChevronCircleDown className="accordion-icon blue-button"/>
                                    </Accordion.Toggle> :
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="plus" onClick={e => this.toggleEvent(e.target)}>
                                        <FaChevronCircleRight className="accordion-icon blue-button"/> 
                                    </Accordion.Toggle>
                                    }
                                {/* </div> */}
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="">
                                    <div className={'video-content'}>
                                        <img className={'full-video'} src={PLAY_VIDEO} />
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <div className="padding-content">
                            <div className={'audio-content'}>
                                <p>OR LISTEN TO AUDIO RECODING OF THIS SERMON</p>
                                <img className={'audio-bar'} src={PLAY_BAR} />
                            </div>
                            <Card className={'manuscript-content'}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="col-xl-12 col-md-12 col-sm-12 col-12 left-text">
                                        <p className={'title'}>FULL MANUSCRIPT
                                        { this.state.isExpand ? <FaChevronCircleDown className="selected-accordion-icon"/> : <FaChevronCircleRight className="selected-accordion-icon"/> }
                                        </p>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                    </Accordion>
                </div>
                <div className={'question-content'}>
                    <p className={'title'}>SMALL GROUP QUESTIONS</p>
                    <div className={'desc-content'}>
                        <p className={'desc'}>1. Are American Christians too emotionally fragile when it comes to serving Christ? How can we aviod discouragement when we encounter cristicism or disappointments in our service?</p>
                        <p className={'desc'}>2. How can a Christiam know wher God wants him/her to serve? What guidelines can direct us?</p>
                        <p className={'desc'}>3. Agree/disagree: Christians should view the retirement years as an opportunity for greater service for the Lord, not as a time to persue more selfish pleasure.</p>
                        <p className={'desc'}>4. Why is it important for every Christiam to realize that he/she is in the monistry? Is the concet of "layman" misleading?</p>
                    </div>
                </div>
            </section>
        )
  }
}