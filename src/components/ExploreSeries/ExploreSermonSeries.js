import React from 'react';
import { Row, Button, Card, Accordion } from 'react-bootstrap';
import { FaChevronCircleRight, FaChevronCircleDown } from "react-icons/fa";
import $ from 'jquery';
import './ExploreSeries.scss';

export default class ExploreSermonSeries extends React.Component {
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
        var list = [];
        for (var  i=1; i<13; i++)
            list.push(<Row key={i} className='section-list-item'><p className='list-index'>{i}.</p><a href='#'>1:1-7 - The Making of a Man of God</a></Row>);

        return (
            <Row className='text-align-center sermonseries-section'>
                <Row className='text-align-center content-wrapper'> 
                    <Row id="hidden-icons">
                        <Row className="arrow-right-icon"><FaChevronCircleRight className="accordion-icon"/></Row>
                        <Row className="arrow-down-icon"><FaChevronCircleDown className="accordion-icon"/></Row>
                    </Row>
                    <Row  className='explore-seriese-content text-align-center white-background round-border' sm="12" md="12" lg="12" xs="12">
                        <Accordion className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <Card className="white-background round-border">
                                <Card.Header className="flex-row row snow-white-background">
                                    <Row className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 vertical-center">
                                        <Row className="section-title">
                                            <h5>"Entrusted with the Gospel"</h5>
                                            <p>Caleb Ingersoll (12 sermons)</p>
                                        </Row>
                                        <Accordion.Toggle as={Button} variant="link" eventKey='0' onClick={e => this.toogleEvent(e.target)} className="no-expand">
                                            <FaChevronCircleRight className="accordion-icon"/>
                                        </Accordion.Toggle>
                                    </Row>
                                </Card.Header>
                                <Accordion.Collapse eventKey='0'>
                                    <Card.Body className="">
                                        <Row className="section-list">
                                            {list}
                                        </Row>
                                        <Row className="">
                                            <Button>EXPLORE SEREIES</Button>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="white-background round-border">
                                <Card.Header className="flex-row row snow-white-background">
                                    <Row className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 vertical-center">
                                        <Row className="section-title">
                                            <h5>"Entrusted with the Gospel"</h5>
                                            <p>Caleb Ingersoll (12 sermons)</p>
                                        </Row>
                                        <Accordion.Toggle as={Button} variant="link" eventKey='1' onClick={e => this.toogleEvent(e.target)} className="no-expand">
                                            <FaChevronCircleRight className="accordion-icon"/>
                                        </Accordion.Toggle>
                                    </Row>
                                </Card.Header>
                                <Accordion.Collapse eventKey='1'>
                                    <Card.Body className="">
                                        <Row className="section-list">
                                            {list}
                                        </Row>
                                        <Row className="">
                                            <Button>EXPLORE SEREIES</Button>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="white-background round-border">
                                <Card.Header className="flex-row row snow-white-background">
                                    <Row className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 vertical-center">
                                        <Row className="section-title">
                                            <h5>"Entrusted with the Gospel"</h5>
                                            <p>Caleb Ingersoll (12 sermons)</p>
                                        </Row>
                                        <Accordion.Toggle as={Button} variant="link" eventKey='2' onClick={e => this.toogleEvent(e.target)} className="no-expand">
                                            <FaChevronCircleRight className="accordion-icon"/>
                                        </Accordion.Toggle>
                                    </Row>
                                </Card.Header>
                                <Accordion.Collapse eventKey='2'>
                                    <Card.Body className="">
                                        <Row className="section-list">
                                            {list}
                                        </Row>
                                        <Row className="">
                                            <Button>EXPLORE SEREIES</Button>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>
                </Row>
            </Row>
        )
    }
}