import React from 'react';
import { Row, Button, Card, Accordion } from 'react-bootstrap';
import { FaChevronCircleRight, FaChevronCircleDown } from "react-icons/fa";
import $ from 'jquery';
import './ExploreSeries.scss';

export default class BrowseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isExpand: false,
            chapter: 1
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
                    node.innerHTML = $('#hidden-icons .arrow-right-icon').html();
                    node.className = 'no-expand btn btn-link';
                }
                    
                else
                {
                    node.innerHTML = $('#hidden-icons .arrow-down-icon').html();
                    node.className = 'expand btn btn-link';
                }
            }
            else
            {
                $('.card .card-header .btn.expand').html($('#hidden-icons .arrow-right-icon').html());
                $('.card .card-header .btn.expand').addClass('no-expand');
                $('.card .card-header .btn.expand').removeClass('expand');
                node.innerHTML = $('#hidden-icons .arrow-down-icon').html();
                node.className = 'expand btn btn-link';
            }
        else
        {
            if(node.className.search('no-expand') === -1)
            {
                node.innerHTML = $('#hidden-icons .arrow-right-icon').html();
                node.className = 'no-expand btn btn-link';
            }
                
            else
            {
                node.innerHTML = $('#hidden-icons .arrow-down-icon').html();
                node.className = 'expand btn btn-link';
            }
        }
    }

    render() {
        var sections = [];

        for(var i=0; i<12; i++)
        {
        if(i === 0)
            sections.push(
            <Card key={i}>
                <Card.Header className="flex-row row white-background">
                <div className="section-num"><p>{this.state.chapter}:{this.state.chapter}-5</p></div>
                <div className="section-title flex-row row">
                    <p><a href="#">"Forgiveness sermon" <i>by Caleb Ingersoll</i> :</a> Entrusted with the Gospel (#5 of 12)</p>
                </div>
                <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={e => this.toogleEvent(e.target)} className="no-expand">
                    <FaChevronCircleRight className="accordion-icon"/>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i}>
                <Card.Body className="white-background">
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
                <Card.Header className="flex-row row white-background">
                <div className="section-num"><p>{this.state.chapter}:{this.state.chapter}-5</p></div>
                <div className="section-title flex-row row">
                    <p><a href="#">"2 Timothy sermon" <i>by Caleb Ingersoll</i> :</a> Entrusted with the Gospel (12 sermons)</p>
                </div>
                <Accordion.Toggle as={Button} variant="link" eventKey={i} onClick={e => this.toogleEvent(e.target)} className="no-expand">
                    <FaChevronCircleRight className="accordion-icon"/> 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i}>
                <Card.Body className="white-background">
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
        return(
            <Row className='text-align-center sermons-section'>
                <Row className='text-align-center content-wrapper'> 
                    <Row id="hidden-icons">
                        <Row className="arrow-right-icon"><FaChevronCircleRight className="accordion-icon"/></Row>
                        <Row className="arrow-down-icon"><FaChevronCircleDown className="accordion-icon"/></Row>
                    </Row>
                    <Row  className='explore-seriese-content text-align-center white-background round-border' sm="12" md="12" lg="12" xs="12">
                        <Accordion className="col-12 col-sm-12 col-md-12 col-lg-12">
                            {sections}
                        </Accordion>
                    </Row>
                </Row>
            </Row>
        )
    }
}
