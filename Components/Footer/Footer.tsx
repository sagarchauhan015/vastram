import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <>
            <section className="vtm-footer">
                <div className="vtm-footer-container">

                    <div className="vtm-footer-top">

                    </div>
                    <div className="vtm-footer-middle">
                        <div className="vtm-footer-middle-text">
                            <p id="text-heading-1">Get your stories delivered</p>
                            <p id="text-heading-2">Best way to stay connected with our progress.</p>
                        </div>
                        <div className="vtm-footer-middle-input">
                            <input type="email" name="" id="vtm-middle-input-box" />
                            <button className="send-btn" id="vtm-middle-input-btn" >Step Inside</button>
                        </div>

                    </div>
                    <div className="vtm-footer-bottom">
                        <div className="vtm-footer-bottom-box">

                            <div className="vtm-bottom-box-logo">
                                <div className="vtm-bottom-box-logo-img">
                                    VASTRAM.
                                </div>
                                <div className="vtm-bottom-box-info">
                                    <a href='#'>©️ Vastram 2023</a>
                                </div>

                            </div>
                            <div className="vtm-bottom-box-navigation">
                                <p>Mens</p>
                                <a href="#">Shirts</a>
                                <a href="#">T-shirts</a>
                                <a href="#">Jeans</a>
                                <a href="#">Trousers</a>
                                <a href="#">Joggers</a>
                            </div>
                            
                            <div className="vtm-bottom-box-navigation">
                                <p>Women</p>
                                <a href="#">Suits</a>
                                <a href="#">Tops</a>
                                <a href="#">Jeans</a>
                                <a href="#">Shrugs</a>
                                <a href="#">Skirts</a>
                            </div>

                            <div className="vtm-bottom-box-navigation">
                                <p>Kids</p>
                                <a href="#">Shorts</a>
                                <a href="#">Jeans</a>
                                <a href="#">T-shirts</a>
                                <a href="#">Capris</a>
                            </div>

                            <div className="vtm-bottom-box-navigation">
                                <p>Social</p>
                                <a href="#">Help Center</a>
                                <a href="#">Twitter</a>
                                <a href="#">Facebook</a>
                                <a href="#">Telegram</a>
                                <a href="#">Email</a>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="footer-tnc">
                    <a href="#">Terms and Conditions</a>
                    <span>|</span>
                    <a href="#">Privacy Policy</a>
                </div>
            </section>
      </>
    )
  }
}
