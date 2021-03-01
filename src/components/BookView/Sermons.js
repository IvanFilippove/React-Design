import React from "react";
import { Button, Col, Accordion, Card, Pagination } from 'react-bootstrap';
import { FaChevronCircleRight, FaChevronCircleDown, FaChevronCircleLeft } from "react-icons/fa";
import './bookview.scss';
import $ from 'jquery';

export default class Sermons extends React.Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      key: 'overview',
      chapter: 0,
    }
   
  }

  changeChapter = (ev) => {
    if(ev === 'overview')
    {
      this.setState({key: ev});
      this.setState({chapter: 0});
    }
    else
    {
      var title = 'chapter ' + ev.i;
      this.setState({key: title});
      this.setState({chapter: ev.i});
    }
  }

  toogleEvent(ev) {
    var node;
    if(ev.parentNode.nodeName === 'BUTTON')
      node = ev.parentNode;
    else if(ev.parentNode.nodeName === 'DIV')
      node = ev;
    else 
      node = ev.parentNode.parentNode;

    var openToggles =  $('.card .card-header .btn.expand');
    if(openToggles.length > 0)
      if(node.className === openToggles[0].className)
      {
        if(node.className.search('no-expand') === -1)
        {
          node.innerHTML = $('#arrow-right-icon').html();
          node.className = 'no-expand btn btn-link';
        }
        else
        {
          node.innerHTML = $('#arrow-down-icon').html();
          node.className = 'expand btn btn-link';
        }
      }
      else
      {
        $('.card .card-header .btn.expand').html($('#arrow-right-icon').html());
        $('.card .card-header .btn.expand').addClass('no-expand');
        $('.card .card-header .btn.expand').removeClass('expand');
        node.innerHTML = $('#arrow-down-icon').html();
        node.className = 'expand btn btn-link';
      }
    else
    {
      if(node.className.search('no-expand') === -1)
        {
          node.innerHTML = $('#arrow-right-icon').html();
          node.className = 'no-expand btn btn-link';
        }
        else
        {
          node.innerHTML = $('#arrow-down-icon').html();
          node.className = 'expand btn btn-link';
        }
    }
  }

  render() {
    var chapters = [];
    var sections = [];
    var sectionShow = true;

    if(this.state.chapter === 0)
      sectionShow = false;

    for (var i=0; i<21; i++)
    {
      if(i === 0)
      {
        if(this.state.chapter === 0)
          chapters.push(<Button key={0} className="font-22 white-border white-background chapterBtn active color-title" onClick={this.changeChapter.bind(this, 'overview')}>Overview</Button>);
        else
          chapters.push(<Button key={0} className="font-22 white-border white-background chapterBtn color-title" onClick={this.changeChapter.bind(this, 'overview')}>Overview</Button>);
      }
      else
      {
        if( i === this.state.chapter)
          chapters.push(<Button key={i} className="font-22 white-border white-background chapterBtn active color-title" onClick={this.changeChapter.bind(this, {i})}>{i}</Button>);
        else
          chapters.push(<Button key={i} className="font-22 white-border white-background chapterBtn color-title" onClick={this.changeChapter.bind(this, {i})}>{i}</Button>);
      }
    }

    for(i=0; i<12; i++)
    {
      if(i === 0)
        sections.push(
          <Card key={i}>
            <Card.Header className="flex-row row">
              <div className="section-num"><p>{this.state.chapter}:{this.state.chapter}-5</p></div>
              <div className="section-title flex-row row">
                <p><a href="/home/sermonitem">"2 Timothy sermon" <i>by Caleb Ingersoll</i> :</a> Entrusted with the Gospel (#5 of 12)</p>
              </div>
              <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={e => this.toogleEvent(e.target)} className="no-expand">
                <FaChevronCircleRight className="accordion-icon"/>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                - Big Idea: Because you are saved you must serve chapterList <br/>
                - Make sure that you are saved before you try to serve (1:6 "For this reason"). <br/>
                - God gifts every saved person for service (1:6-7). Two ways: <br/>
                  1. Holy Spirit Himself <br/>
                  2. Spiritual gifts <br/>
                - God sovereignly gifts us, but we are responsible to discover, develop, kindle, and exercise our gifts (1:6 "fan into flame").
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      else
        sections.push(
          <Card key={i}>
            <Card.Header className="flex-row row">
              <div className="section-num"><p>{this.state.chapter}:{this.state.chapter}-5</p></div>
              <div className="section-title flex-row row">
                <p><a href="#">"2 Timothy sermon" <i>by Caleb Ingersoll</i> :</a> Entrusted with the Gospel (12 sermons)</p>
              </div>
              <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={e => this.toogleEvent(e.target)} className="no-expand">
                <FaChevronCircleRight className="accordion-icon"/> 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i}>
              <Card.Body>
                - Big Idea: Because you are saved you must serve chapterList <br/>
                - Make sure that you are saved before you try to serve (1:6 "For this reason"). <br/>
                - God gifts every saved person for service (1:6-7). Two ways: <br/>
                  1. Holy Spirit Himself <br/>
                  2. Spiritual gifts <br/>
                - God sovereignly gifts us, but we are responsible to discover, develop, kindle, and exercise our gifts (1:6 "fan into flame").
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
    }
    return (
      <div className="mt-5 row" id="sermons">
        <Col sm="12" md="12" lg="12" xs="12" className="no-padding" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="flex-row row chapterList">
            {chapters}
          </div>
        </Col>
        <Col sm="12" md="12" lg="12" xs="12" className="no-padding" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="flex-row row chapter-title color-title">{this.state.key}</div>
        </Col>
        {sectionShow ? (
          <Col sm="12" md="12" lg="12" xs="12" className="no-padding" style={{display: 'flex', justifyContent: 'center'}}>
            <div id='arrow-right-icon'><FaChevronCircleRight className="accordion-icon"/></div>
            <div id='arrow-down-icon'><FaChevronCircleDown className="accordion-icon"/></div>
            <div className="flex-row row chapterList sectionList">
              <Accordion className="col-12 col-sm-12 col-md-12 col-lg-12">
                {sections}
              </Accordion>
            </div>
          </Col>) : (<div></div>)
        }
        {
          sectionShow ? (
            <Col sm="12" md="12" lg="12" xs="12" className="no-padding" style={{display: 'flex', justifyContent: 'center'}}>
              <div className="flex-row row chapterList sectionList">
                <div className="paginationList">
                  <Pagination size="sm"> 
                    <Pagination.Prev><FaChevronCircleLeft className="accordion-icon"/></Pagination.Prev>  
                    <Pagination.Item active>1</Pagination.Item> 
                    <Pagination.Item>2</Pagination.Item> 
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Ellipsis></Pagination.Ellipsis>
                    <Pagination.Item>8</Pagination.Item>
                    <Pagination.Next><FaChevronCircleRight className="accordion-icon"/></Pagination.Next>                 
                  </Pagination>
                </div>
              </div>
              
            </Col>
          ) : (<div></div>)
        }
      </div>
    )
  }
}