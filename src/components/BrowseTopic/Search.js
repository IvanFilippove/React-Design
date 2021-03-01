import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab, Nav } from 'react-bootstrap';
import './browseTopic.scss';
export default class Search extends React.Component {
  enterPress(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
      window.location.href = "/home/browsesearch";
    }
  }
  render() {
    return (
      <div>
        <div className="search-tab">
          <div className="search-input white-border white-background mt-5 mb-10">
            <input type="text" placeholder="SEARCH KEYWORD..." className="input-search-box" onKeyPress={this.enterPress}/>
            <div className="search-icon">
              <IoIosSearch width="25" height="25"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}