import React from "react";
import './signup.scss'
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';

export default class SignUp extends React.Component {

  render(){
    return(
      <section id="signup">
        <div className="main_container">
          <div className="header">
            <img className="logo" src={Logo} />
          </div>
          <div className="title_container">
              <p className="title">GET STARTED</p>
              <p className="desc">Planing, preparing, and preaching starts here!</p>
          </div>
          <div className="middle_container">
            <p>Already a member? Login <a href="/sign-in" className="underline"> here </a></p>
            <div className="input_container">
              <label className="label">EMAIL</label><br/>
              <input type="text" className="input" />
            </div>
            <div className="input_container name">
              <div className="first_name">
                <label className="label">FIRST NAME</label>
                <input type="text" className="input" />
              </div>
              <div className="last_name">
                <label className="label">LAST NAME</label>
                <input type="text" className="input" />
              </div>
            </div>
            <div className="input_container">
              <label className="label">CREATE A PASSWORD</label>
              <input type="password" className="input" />
            </div>
            <div className="input_container">
              <label className="label">CONFIRM PASSWORD</label>
              <input type="password" className="input" />
            </div>
          </div>
          <div className="member_container">
            <p>NEW MEMBER PRICING</p>
            <div className="member_card">
              <div>
                <span className="dollar">$</span>
                <span className="cost">30</span>
                <p className="month">/month</p>
              </div>
            </div>
          </div>
          <div className="footer">
          <p>
            Enjoy a <span className="underline">14 day free trial </span>to see if SermonWise is a perfect fit for you.
          </p>
          <button className="start_btn">
            <a href="/sign-in">
              START FREE TRIAL
            </a>
          </button>
          <p className="p_p">
            By clicking above, you agree to our <br/> <span className="underline">Terms of Use</span> and consent to our <span className="underline">Privacy Policy</span>
          </p>
        </div>
        </div>
      </section>
    ) 
  }
}