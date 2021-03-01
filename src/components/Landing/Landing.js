import React from "react";
import './landing.scss'
import { Link } from 'react-router-dom'
import Plan from './../../assets/resource/items/Plan.svg';
import Preach from './../../assets/resource/items/Preach.svg';
import Prepare from './../../assets/resource/items/Prepare.svg';
import Book from './../../assets/resource/items/book.svg';
import Video from './../../assets/resource/items/sermonwise_video.svg';
import Play from './../../assets/resource/items/playbutton_dropshadow_w.svg';
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';

export default class Landing extends React.Component {

  render(){
    return (
      <section id="landing">
        <div className="land_header row container-section">
          <img src={Logo} className="logo" />
          <div className="nav_bar">
            <ul>
              <li>
                <button className="start_btn_header"><Link to="/sign-up">START FREE TRIAL</Link></button>
              </li>
              <li>
                <input type="text" placeholder="Email" className="landing-email" />
              </li>
              <li>
                <input type="password" placeholder="Password" className="landing-password" />
              </li>
              <li>
                <button className="login_btn"><Link to="/home">LOGIN</Link></button>
              </li>
            </ul>
          </div>
          <div>

          </div>
        </div>
        <div className="land_first">
          <img src={Video} className="video" />
          <img src={Play} className="play" />
        </div>
        <div className="land_plan row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 btn_container">
            <button className="start_btn">START FREE TRIAL</button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={Plan} className="image" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 desc_container">
            <span className="red_title">PLAN</span>
            <p className="black_desc">
              Book overviews, sermon series outlines,<br/>
              and more to help you plan your<br/>
              preaching calendar.
            </p>
          </div>
        </div>
        <div className="land_prepare row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <span className="white_title">PREPARE</span>
            <p className="white_desc  ">
              Sermon outlines, big ideas, and passage-specific<br/>
              illustraitons to help you write your sermons.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={Prepare} className="image" />
          </div>
        </div>
        <div className="land_preach row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={Preach} className="image" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 desc_container">
            <span className="red_title">PREACH</span>
            <p className="black_desc">
              With our pro plan, get preaching coaching,<br/>
              and personal feedback on your sermons from<br/>
              veteran pastors and homileticians.
            </p>
          </div>
        </div>
        <div className="land_port row">
          <div className="port_card">
            <div>
              <div>

              </div>
            </div>
            <p>
              These are some of the best resources that I have come across."<br/>-Pastor
            </p>
          </div>
          <div className="port_card">
              <div>
                <div>
                  
                </div>
              </div>
              <p>
                The sermon brain storm helped me think through exactly what my chruch needed!"<br/>-Pastor
              </p>
          </div>
        </div>
        <div className="land_memership row">
          <div className="btn_container btn_container1">
            <button className="start_btn">START FREE TRIAL</button>
          </div>
          <div className="divider">
            <div>

            </div>
            <img src={Book} />
          </div>
          <div className="mem_container">
            <p className="mem_title">START YOUR SERMON PREPARATIONS TODAY!</p>
            <p className="mem_desc">Enjoy a 14 day free trial by signing up today!</p>
            <div className="card_container">
              <div className="col-lg-6 col-col-md-6 col-sm-12 col-xs-12 card_indi_container1">
                <div className="memCard">
                  <p className="startAt">Starting at</p>
                  <span>
                    <p>$</p>
                    <p>00</p>
                  </span>
                  <p className="month">/month</p>
                </div>
              </div>
              <div className="col-lg-6 col-col-md-6 col-sm-12 col-xs-12 card_indi_container2">
                <div className="memCard">
                  <p className="startAt">Starting at</p>
                  <span>
                    <p>$</p>
                    <p>000</p>
                  </span>
                  <p className="month">/year</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_container btn_container2">
            <button className="start_btn">START FREE TRIAL</button>
          </div>
        </div>
      </section>
    )
  }
}