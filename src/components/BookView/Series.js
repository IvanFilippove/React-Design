import React from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav } from 'react-bootstrap';
import './bookview.scss';
export default class Series extends React.Component {
  render() {
    return (
        <div className="series" id="series">
          <Row className="possible-titles">
            <Col sm="12" md="4" lg="4" xs="12" className="no-padding series-titles">
              <h1 className="letter-space-4 font-20">
                POSSIBLE SERIES TITLES
              </h1>
            </Col>
            <Col sm="12" md="8" lg="8" xs="12" className="no-padding mt-05 titles-list">
              <Button className="font-22 white-border white-background series-title">The Fight</Button>
              <Button className="font-22 white-border white-background series-title">The Good Fight</Button>
              <Button className="font-22 white-border white-background series-title">Fan the Flame</Button>
              <Button className="font-22 white-border white-background series-title">Passing the Torch</Button>
              <Button className="font-22 white-border white-background series-title">Finish Strong</Button>
              <Button className="font-22 white-border white-background series-title">Fan the Flame, Fight the Fight</Button>
              <Button className="font-22 white-border white-background series-title">Fight the Fight, Fan the Flame, Finish Strong</Button>
              <Button className="font-22 white-border white-background series-title">A Good Disciple</Button>
              <Button className="font-22 white-border white-background series-title">Last Words</Button>
              <Button className="font-22 white-border white-background series-title">Guard the Gospel</Button>
              <Button className="font-22 white-border white-background series-title">Guarding the Gospel</Button>
              <Button className="font-22 white-border white-background series-title">Suffering and Succession</Button>
              <Button className="font-22 white-border white-background series-title">Entrusted with the Gospel</Button>
              <Button className="font-22 white-border white-background series-title">A Life that Counts</Button>
            </Col>
          </Row>
          <Row className="sermon-series mt-2 mb-6">
            <Col sm="12" md="4" lg="4" xs="12" className="no-padding series-titles">
              <h1 className="letter-space-4 font-20">
                SERMON SERIES
              </h1>
            </Col>
            <Col sm="12" md="8" lg="8" xs="12" className="no-padding mt-05 titles-list">
              <div className="series-box">
                <div className="sermon-series-title white-background white-border">
                  <div className="" style={{ display: 'flex', width: 'fit-content', textAlign: 'center' }}>
                    <div className="title-label" style={{ marginLeft: 35 }}>
                      <p className="font-22 ">"Entrusted with the Gospel"</p>
                      <span>Caleb Ingersoll (12 sermons)</span>
                    </div>
                    <div className="title-icon">
                      <IoIosArrowDropdownCircle className="font-30 dropdown-icon"/>
                    </div>
                  </div>
                </div>
                <div className="series-list">
                  <div className="">
                    <ul>
                      <li>1. <a>1:1-7 - The Making of a Man of God</a></li>
                      <li>2. <a>1:8-18 - Do Not Be Ashamed</a></li>
                      <li>3. <a>1:8-14 - Gospel Joy, Gospel Courage</a></li>
                      <li>4. <a>2:1-7 - Teacher, Soldier, Athlete, Farmer</a></li>
                      <li>5. <a>2:8-13 - A Worldview to Make Suffering Sufferable</a></li>
                      <li>6. <a>2:14-19 - Preventing Gangrene in the Church Body</a></li>
                      <li>7. <a>2:20-26 - The Kind of Person God Uses</a></li>
                      <li>8. <a>3:1-9 - The Marks of Empty Religion</a></li>
                      <li>9. <a>3:10-16 - The Sufficiency of Scripture [quest prescher]</a></li>
                      <li>10. <a>4:1-5 - The Priority of Preaching</a></li>
                      <li>11. <a>4:6-8 - Motivations for Finishing Well</a></li>
                      <li>12. <a>4:9-22 - Final Thoughts from the Finish Line</a></li>
                    </ul>
                    <div className="explore-btn" style={{ textAlign: 'center' }}>
                      <Button className="font-14">EXPLORE SERIES</Button>
                    </div>
                  </div>
                </div>
                <div className="sermon-series-title white-background white-border">
                  <div className="" style={{ display: 'flex', width: 'fit-content', textAlign: 'center' }}>
                    <div className="title-label" style={{ marginLeft: 35 }}>
                      <p className="font-22 ">"A Life That Counts"</p>
                      <span>Mark Mitchell (15 sermons)</span>
                    </div>
                    <div className="title-icon">
                      <IoIosArrowDroprightCircle className="font-30 dropdown-icon"/>
                    </div>
                  </div>
                </div>
                <div className="sermon-series-title white-background white-border">
                  <div className="" style={{ display: 'flex', width: 'fit-content', textAlign: 'center' }}>
                    <div className="title-label" style={{ marginLeft: 35 }}>
                      <p className="font-22 ">"2 Timothy"</p>
                      <span>Steven Cole (21 sermons)</span>
                    </div>
                    <div className="title-icon">
                      <IoIosArrowDroprightCircle className="font-30 dropdown-icon"/>
                    </div>
                  </div>
                </div>
                <div className="series-list">
                  <div className="">
                    <ul>
                      <li>1. <a>Foundation for Faithful Ministry (1:1-5)</a> &nbsp;&nbsp;&nbsp;<IoIosArrowDroprightCircle /></li>
                      <li className="active">2. 
                        <a>Saved to Serve (1.6-7)</a>&nbsp;&nbsp;&nbsp;<IoIosArrowDropdownCircle />
                        <ul className="sub-list">
                          <li>- Big Idea: Because you are saved you must serve Christ.</li>
                          <li>- Make sure that you are saved before yu try to serve (1:6 "For<br/> this reason").</li>
                          <li>
                            - God gifts every saved person for service(1:6-7). Two ways:
                            <ul className="sub2-list">
                              <li>1. Holy Spirit Himself</li>
                              <li>2. Spiritual gifts</li>
                            </ul>
                          </li>
                          <li>- God sovereignly gifts us, but we are responsible to discover,<br />develop, kindle, and exercise our gifts(1:6 "fan into flame")</li>
                        </ul>
                      </li>
                      <li>3. <a>1:8-14 - Gospel Joy, Gospel Courage</a></li>
                      <li>4. <a>2:1-7 - Teacher, Soldier, Athlete, Farmer</a></li>
                      <li>5. <a>2:8-13 - A Worldview to Make Suffering Sufferable</a></li>
                      <li>6. <a>2:14-19 - Preventing Gangrene in the Church Body</a></li>
                      <li>7. <a>2:20-26 - The Kind of Person God Uses</a></li>
                      <li>8. <a>3:1-9 - The Marks of Empty Religion</a></li>
                      <li>9. <a>3:10-16 - The Sufficiency of Scripture [quest prescher]</a></li>
                      <li>10. <a>4:1-5 - The Priority of Preaching</a></li>
                      <li>11. <a>4:6-8 - Motivations for Finishing Well</a></li>
                      <li>12. <a>4:9-22 - Final Thoughts from the Finish Line</a></li>
                    </ul>
                    <div className="explore-btn" style={{ textAlign: 'center' }}>
                      <Button className="font-14">EXPLORE SERIES</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
    )
  }
}