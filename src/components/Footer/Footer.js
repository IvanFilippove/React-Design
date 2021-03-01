import React from "react";
import './footer.scss'
import BottomLogo from './../../assets/resource/logos/Sermonwise_center_W.jpg';
export default class Footer extends React.Component {

  render(){
    return (
        <section id="footer">

          <div className={'row footer_container'}>
            <div className="footer_logo col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <img src={BottomLogo} />
            </div>
            <div className={'col-lg-2 col-md-2 col-sm-12 col-xs-12 info_container'}>
              <span className="item_title"><a>INFO</a></span>
              <ul className="info">
                <li>About</li>
                <li>FAQ</li>
                <li>Policies</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={'col-lg-4 col-md-4 col-sm-12 col-xs-12'}>
              <span className="item_title"><a>ABOUT</a></span>
              <div>
                <span>
                  SermonWise is a online reference database designed to assist and support chrch leaders. For questions and concerns,
                  please email:
                </span>
                 <span>support@sermonwiser.com</span>
              </div>
            </div>
            <div className={'col-lg-4 col-md-4 col-sm-12 col-xs-12'}>
              <span className="item_title"><a>SUBSCRIBE</a></span>
              <div>
                Have special features and monthly new<br/>resources sent straight to your email:
                <div>
                  <input type="text" placeholder="EMAIL" className="sub_inp" />
                  <input type="button" value="SUBSCRIBE" className="sub_btn" />
                </div>
              </div>
              
            </div>
            <div className={'col-lg-2 col-md-2 col-sm-12 col-xs-12'}>

            </div>
          </div>
          <div className='footer_bottom row'>
            ©SermonWise Inc. 2018
          </div>
        </section>
      )
  }
}