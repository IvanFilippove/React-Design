import React from "react";
import './signin.scss'
import Logo from './../../assets/resource/logos/Sermonwise_horiz_G.svg';
import Book from './../../assets/resource/items/book.svg';
export default class SignIn extends React.Component {

  render(){
    return (
      <section id="signin">
        <div className="back_container">
          <div className="back_img">
            
          </div>
        </div>
        <div className="header_container">
          <img src={Logo} className="logo" />
          <div className="header_items">
            <span>NOT A MEMBER?</span>
            <button><a href="/sign-up">CREATE ACCOUNT</a></button>
          </div>
        </div>
        <div className="middle_contaner">
          <div className="main_container">
            <div className="title_container">
              <p className="title"><span className="bold">SERMON</span>WISE</p>
              <p className="desc bold">Sermon seried outlines, sermone outlines,<br/>big ideas, and more to help you plan efficiently,<br/>prepare faithfully, and preach powerfully.</p>
            </div>
            <div className="divider">
              <div></div>
              <img src={Book} />
            </div>
            <div className="signin_input_container">
              <p>LOGIN</p>
              <div>
                <input type="text" className="email" placeholder="EMAIL" /><br/>
                <input type="password" className="password" placeholder="PASSWORD" />
              </div>
            </div>
            <div className="btn_container">
              <button className="signin_btn">
                <a href="/home">SIGN IN</a>
              </button>
            </div>
            <div className="bottom_container">
              <span>Forgot password?</span>
              <span>Create an account</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}