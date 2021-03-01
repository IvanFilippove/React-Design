import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button, Image, Row } from 'react-bootstrap';
import './bookview.scss';
import $ from 'jquery';
import RESOURCES from './../../assets/resource/images/2-timothy-youtube-screenshot.png';
import GRAPHICALIMG from "./../../assets/resource/images/61-2-Timothy-FNL.jpg";
export default class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpandAll: false
        }
    }
    expandAll() {

        if(this.state.isExpandAll)
            $('.overview-list-item-header .toggleBtn .btn').html($('#plus-icon .btn').html());
        else
            $('.overview-list-item-header .toggleBtn .btn').html($('#minus-icon .btn').html());

        this.setState({isExpandAll: !this.state.isExpandAll});
    }

    toggleIcon(node) {
        if(node.className.search('plus') === -1)
        {
            node.innerHTML = $('#plus-icon .btn').html();
            node.className = 'plus btn btn-primary';
        }
        else
        {
            node.innerHTML = $('#minus-icon .btn').html();
            node.className = 'minus btn btn-primar';
        }
    }

    toggleEvent(ev) {
        var node;
        if(ev.parentNode.nodeName === 'BUTTON')
        {
            node = ev.parentNode;
        }
        else if(ev.parentNode.nodeName === 'DIV')
            node = ev;
        else 
            node = ev.parentNode.parentNode;

        this.toggleIcon(node);

        if( node.parentNode.parentNode.nextSibling.className.search('hidden') !== -1)
            node.parentNode.parentNode.nextSibling.className = 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 row';
        else
            node.parentNode.parentNode.nextSibling.className = 'overview-list-item-body hidden col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 row';

        if(this.state.isExpandAll)
        {
            if( $('.overview-list-item-header .btn.plus').length  === $('.overview-list-item-header .btn').length)
                $('#overview .expand-all-btn .btn').click();
        }
        else
        {
            if( $('.overview-list-item-header .btn.minus').length  === $('.overview-list-item-header .btn').length)
                $('#overview .expand-all-btn .btn').click();
        }
        
        
    }

    render() {
        return (
            <div id="overview">
                <div className="expand-all-btn">
                    <Button onClick={this.expandAll.bind(this)} className="font-14">
                        EXPAND ALL &nbsp;&nbsp;&nbsp;
                        { this.state.isExpandAll ? <FiMinus /> : <FiPlus /> }
                    </Button>
                </div>
                <div className="accordions mt-3">
                    <div id="minus-icon"><Button className="minus"><FiMinus className="accordion-icon"/></Button></div>
                    <div id="plus-icon"><Button className='plus'><FiPlus className="accordion-icon"/></Button></div>
                    <Row className="overview-list">
                        <Row className="overview-list-item historical">
                            <Row className="overview-list-item-header col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Row className="title">
                                    <p>HISTORICAL <br/>BACKGROUND</p>
                                </Row>
                                <Row className='toggleBtn'>
                                    <Button className={ this.state.isExpandAll ? 'minus' : 'plus' } onClick={e => this.toggleEvent(e.target)}>
                                        <FiPlus className='accordion-icon' />
                                    </Button>
                                </Row>
                            </Row>
                            <Row className={ this.state.isExpandAll ? 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12':'overview-list-item-body hidden col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'}>
                                <p className="bold mb-sm">Date:</p>
                                <p className="mb-sm">A.D.64-65</p>
                                <p className="bold mb-sm">Author:</p>
                                <p className="mb-sm">Paul</p>
                                <p className="bold mb-sm">Recipient / Audience:</p>
                                <p className="mb-sm">Timothy</p>
                                <p className="bold mb-sm">Genre:</p>
                                <p className="mb-sm">Something</p>
                                <p className="bold mb-sm">Historical Context:</p>
                                <p className="mb-sm">Lorem ipsum dolor sit amet,, consectertur adipiscing elit. Morbi ac magna sed magna lacinia dictum. Aenean ultricies luctus pellentesque. Duis egestas ultricies elit, at cursus dolor mollis sit amet. Nullam id sapien sit amet ex venenaties feugiat. Morbi tempor bibendum neque, a dapibus velit faucibus sed. Proin consectertur pellentesque leo, rhoncus egestas lorem varius sed. Sed ullamcorper rutrum interdum. Fusce non felis leo. Morbi molestie urna in orci accumsan, eu iaculis velit fermentum. Cras elementum metus ac nulla porta volutpat. Donec ac dui sed tortor malesuada cursus vel at ligula. Aliquam erat volutpat.</p>
                            </Row>
                        </Row>
                        <Row className="overview-list-item idea">
                            <Row className="overview-list-item-header col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Row className="title">
                                    <p>what's the big idea?</p>
                                </Row>
                                <Row className='toggleBtn'>
                                    <Button className={ this.state.isExpandAll ? 'minus' : 'plus' } onClick={e => this.toggleEvent(e.target)}>
                                        <FiPlus className='accordion-icon' />
                                    </Button>
                                </Row>
                            </Row>
                            <Row className={ this.state.isExpandAll ? 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12':'overview-list-item-body hidden col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'}>
                                <div className="idea-item white-background round-border">
                                    <div className="idea-content mb">
                                        <p className="color-text">"At the end of his life Apostle Paul challenge Timothy, his spiritual son, to so value the gospel that he will do everything in his power to preserve it (from heresy and corruption), to proclaim it (boldly and faithfully), and to propagate it (by training up others who can faithfully communicate it as well)."</p>
                                    </div>
                                    <div className="idea-reference text-align-center mb">
                                        <p><i>- Caleb Ingersoll</i></p>
                                    </div>
                                    <div className="idea-btn text-align-center">
                                        <Button className="btn ideaBtn">Read more from Caleb Ingersoll</Button>
                                    </div>
                                </div>
                                <div className="idea-item white-background round-border">
                                    <div className="idea-content mb">
                                        <p className="color-text">"Paul's preoccupation in writing to Timothy was with the gospel, the deposit of truth which had been revealed and committed to him by God. The apostle's own career of gospel-work was virtually over...But what would happen to the gospel when he was dead and gone?...Who, then, would do battle for the truth When Paul had laid down his life? This was the question which dominated and vexed his mind as he lay in chains, and to which in this letter he addressed himself...He reminded Timothy that the precious gospel was now committed to him, and that it was now his turn to assume responsibility for it, to preach and teach it, to defend it against attack and against falsification, and  to ensure its accurate transmission to the generations yet to come. In each chapter Paul returned to the same basic....."</p>
                                    </div>
                                    <div className="idea-reference text-align-center mb">
                                        <p><i>- Stott, John R. W. Guard the Gospel; the Message of 2 Timothy. Inter Varsity Press, 1973, pg 22.</i></p>
                                    </div>
                                    <div className="idea-btn text-align-center">
                                        <Button className="btn ideaBtn">Buy Dat Book</Button>
                                    </div>
                                </div>
                                <div className="idea-item white-background round-border">
                                    <div className="idea-content mb">
                                        <p className="color-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="idea-reference text-align-center mb">
                                        <p><i>- Charles Swindoll</i></p>
                                    </div>
                                    <div className="idea-btn text-align-center">
                                        <Button className="btn ideaBtn">Read more from Charles Swindoll</Button>
                                    </div>
                                </div>
                            </Row>
                        </Row>
                        <Row className="overview-list-item keyThemes">
                            <Row className="overview-list-item-header col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Row className="title">
                                    <p>key themes</p>
                                </Row>
                                <Row className='toggleBtn'>
                                    <Button className={ this.state.isExpandAll ? 'minus' : 'plus' } onClick={e => this.toggleEvent(e.target)}>
                                        <FiPlus className='accordion-icon' />
                                    </Button>
                                </Row>
                            </Row>
                            <Row className={ this.state.isExpandAll ? 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12':'overview-list-item-body hidden col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'}>
                                <div className="mb">
                                    <p className="bold">Preserving and Proclaiming the Gospel</p>
                                    <p>1:5-8, 11-12, 13-14; 2:1-2, 8, 15-19, 24-26; 3:1-5, 14-17; 4:1-5, 17</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Leadership Development</p>
                                    <p>Paul entrusting Timothy to lead the church in Ephesus and counseling him on what he should do and how should he do it.<br/>2:1-2; 2:14-4:5</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Willingness to Endure Suffering, Hardship, and Persecution</p>
                                    <p>1:8, 12, 15; 2:3-6 (esp vs 3); 2:9; 3:1, 10-13; 4:3-4, 14-16</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Perseverance / Endurance / Finishing Well</p>
                                    <p>2:10-13; 3:10-13; 4:6-8, 18</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Election / Predestination</p>
                                    <p>2:19-22</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Personal Holiness and Ministry Usefulness</p>
                                    <p>2:19-22</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">God's Faithfulness</p>
                                    <p>1:!4; 2:8-13, 25-26; 3:11; 4:8, 17-18</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Importance and Power of Scripture</p>
                                    <p>1:13-14; 3:13-4:5</p>
                                </div>
                                <div className="mb">
                                    <p className="bold">Courage / Being Ashamed</p>
                                    <p>1:8, 12; 2:1</p>
                                </div>
                            </Row>
                        </Row>
                        <Row className="overview-list-item graphical">
                            <Row className="overview-list-item-header col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Row className="title">
                                    <p>graphical Overviews</p>
                                </Row>
                                <Row className='toggleBtn'>
                                    <Button className={ this.state.isExpandAll ? 'minus' : 'plus' } onClick={e => this.toggleEvent(e.target)}>
                                        <FiPlus className='accordion-icon' />
                                    </Button>
                                </Row>
                            </Row>
                            <Row className={ this.state.isExpandAll ? 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12':'overview-list-item-body hidden col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'}>
                                <div className='imgContainer round-border mb'>
                                    <Image src={GRAPHICALIMG} className='round-border'></Image>
                                    <Button className="btn enlarge">Click to enlarge</Button>
                                </div>
                                <div className="imgDesc text-align-center">
                                    <p className="bold">The Bible Project</p>
                                    <p>Reading Scripture: 2 Timothy Overview</p>
                                </div>
                            </Row>
                        </Row>
                        <Row className="overview-list-item today">
                            <Row className="overview-list-item-header col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Row className="title">
                                    <p>why is the book <br/>needed today?</p>
                                </Row>
                                <Row className='toggleBtn'>
                                    <Button className={ this.state.isExpandAll ? 'minus' : 'plus' } onClick={e => this.toggleEvent(e.target)}>
                                        <FiPlus className='accordion-icon' />
                                    </Button>
                                </Row>
                            </Row>
                            <Row className={ this.state.isExpandAll ? 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12':'overview-list-item-body hidden col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'}>
                                <div className="white-background round-border text-align-center">
                                    <p className="color-text mb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="reference"><i>- Stott, John R. W. Guard the Gospel; the Message of 2 Timothy.Inter</i></p>
                                </div>
                            </Row>
                        </Row>
                        <Row className="overview-list-item resources">
                            <Row className="overview-list-item-header col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <Row className="title">
                                    <p>helpful resources</p>
                                </Row>
                                <Row className='toggleBtn'>
                                    <Button className={ this.state.isExpandAll ? 'minus' : 'plus' } onClick={e => this.toggleEvent(e.target)}>
                                        <FiPlus className='accordion-icon' />
                                    </Button>
                                </Row>
                            </Row>
                            <Row className={ this.state.isExpandAll ? 'overview-list-item-body show col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12':'overview-list-item-body hidden col-xl-8 col-lg-8  col-md-8 col-sm-12 col-12'}>
                                <div className='resource-title mb'>
                                    <a className='underline-text'>The Bible Project video summary of 2 Timothy</a>
                                </div>
                                <div className='resource-preview mb'>
                                    <Image src={RESOURCES}></Image>
                                </div>
                                <div className='resource-details'>
                                    <p>Center Point Bible Institute</p>
                                    <a className='underline-text'>2 Timothy Class Notes, by Dr. Charles Savelle Jr., adapted by Joshua Bramer</a>
                                </div>
                            </Row>
                        </Row>
                    </Row>
                </div>
            </div>
        )
    }
}