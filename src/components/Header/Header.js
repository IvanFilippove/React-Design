import React from "react";
import { Link } from 'react-router-dom'
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav } from 'react-bootstrap';
import { FaSearch, FaChevronCircleRight } from "react-icons/fa";
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';
export default class Header extends React.Component {

  render(){
    return (
      <Row className="land_header">
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
    )
  }
}