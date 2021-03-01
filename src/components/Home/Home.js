import React from "react";
import { Link } from 'react-router-dom'
import BACK_IMAGE from './../../assets/resource/images/nasa-89127-unsplash.jpg';
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';
import BOOK from './../../assets/resource/items/book.svg';
import TOPIC from './../../assets/resource/items/topic.svg';
import SEARCH from './../../assets/resource/items/Search.svg';
import TRENDING from './../../assets/resource/items/trending.svg';
import FEATURED from './../../assets/resource/images/1.jpg';
import EASTER from './../../assets/resource/images/alexa-mazzarello-316937-unsplash.jpg';
import SALAVATION from './../../assets/resource/images/carolina-jacomin-615796-unsplash.jpg';
import SUFFERING from './../../assets/resource/images/kiwihug-284614-unsplash.jpg';
import "./home.scss"
export default class Home extends React.Component {

  render(){
    return (
      <section id="home">
        <div className="header-container">
          <img src={Logo} className="logo" />
          <ul>
            <li>
              <span><Link to="/home/browseby">Browse BY</Link></span>
            </li>
            <li>
              <button className="black-btn"><Link to="/home/browsetopic">Topic</Link></button>
            </li>
            <li>
              <button className="black-btn"><Link to="/home/bookview">Book</Link></button>
            </li>
            <li>
              <input type='text' placeholder="Search" />
            </li>
            <li>
              <button className="avatar">CI</button>
            </li>
          </ul>
        </div>
        <div className="backImg-content">
          <div className="card-content">
            <span className="yello-content">Featured Series</span>
            <p className="title">GOD IN CREATION</p>
            <div className="desc">
              <p>How can we see and learn about who God is through creation?<br/>
              How does this shape out day to day response to nature and<br/>those about us?</p>
            </div>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="start-browsing">
          <p>START BROWSING</p>
          <div className="items-content">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 item">
              <img src={BOOK} /><br/>
              <button>BOOK OF THE BIBLE</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 item">
              <img className="item" src={TOPIC} /><br/>
              <button>SPECIFIC TOPIC</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 item">
              <img className="item" src={SEARCH} /><br/>
              <button>SEARCH THE SITE</button>
            </div>
          </div>
        </div>
        <div className="trending-topics row">
          <div className="btn-content">
            <button>
              <img src={TRENDING} className="icon" /><span>TRENDING TOPICS</span>
            </button>
          </div>
          <div className="top-list">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 content-1">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="content">
                  <div className="content-title">TOP 10</div>
                  <div className="content-items">
                    <ul>
                      <li>
                        <button>1</button>
                        <span>Easter</span>
                      </li>
                      <li>
                        <button>2</button>
                        <span>Resurrection</span>
                      </li>
                      <li>
                        <button>3</button>
                        <span>Grace</span>
                      </li>
                      <li>
                        <button>4</button>
                        <span>Sin</span>
                      </li>
                      <li>
                        <button>5</button>
                        <span>Good Friday</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="content-items">
                    <ul>
                      <li>
                        <button>6</button>
                        <span>The Purposes of God</span>
                      </li>
                      <li>
                        <button>7</button>
                        <span>The Deach of Christ</span>
                      </li>
                      <li>
                        <button>8</button>
                        <span>Glorification</span>
                      </li>
                      <li>
                        <button>9</button>
                        <span>Salavation</span>
                      </li>
                      <li>
                        <button>10</button>
                        <span>Final Ressurrection</span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 content-2">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 other-content">
                <div>OTHER</div>
                <ul>
                  <li>Bible Prophecy</li>
                  <li>Regeneration & New Birth</li>
                  <li>Sancitifcation</li>
                  <li>Justification</li>
                  <li>The Kingdom of God</li>
                  <li>Suffering</li>
                  <li>Endurance</li>
                  <li>Courge & Boldness</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <ul>
                    <li>Fear & Anxiety</li>
                    <li>Baptism</li>
                    <li>Communion/Lord`s Supper</li>
                    <li>Envanglism</li>
                    <li>Wedding</li>
                    <li>Funeral</li>
                    <li>Timothy</li>
                    <li>First-person Narrative</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="browse-btn">
            <button>BROWSE ALL TOPICS</button>
          </div>
          <div className="cards-content">
            <div className="card-first">
              <button className="featured-btn">Featured Sermon</button>
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 card1">
                <img src={FEATURED} />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 card1 card1-desc">
                <p className="title">REDEMPTION & GRACE</p>
                <p className="desc1">Lessons on the ultimate sacriface through the lens of the Gospels.</p>
                <p className="desc2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>EXPLORE THIS SERIES</button>
              </div>
            </div>
            <div className="card-second">
              <div className="card2">
                <img src={EASTER} />
                <div>
                  <p className="title">EASTER</p>
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button>EXPLORE THIS SERIES</button>
                </div>
                
              </div>
              <div className="card2">
                <img src={SALAVATION} />
                <div>
                  <p className="title">SALAVATION</p>
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button>EXPLORE THIS SERIES</button>
                </div>
              </div>
              <div className="card2">
                <img src={SUFFERING} />
                <div>
                  <p className="title">SUFFERING</p>
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button>EXPLORE THIS SERIES</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}