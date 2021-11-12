import React, { Component } from 'react';
import '../../CSS/Footer.css'
import { Link } from 'react-router-dom'
export class Footer extends Component {
    render() {
        return (
            <section className="section purple darkent-2 black-text center scrollspy footer">
                <div className="row">
                    <div className="col s12">
                        <b className="followus">Follow Us</b>
                        <p>Check out social media for special offers</p>
                        <Link to="https://facebook.com" target="blank" className="black-text">
                            <i className="fab fa-facebook fa-3x"></i>
                        </Link>
                        <Link to="https://twitter.com" target="blank" className="black-text">
                            <i className="fab fa-twitter fa-3x"></i>
                        </Link>
                        <Link to="https://linkedin.com" target="blank" className="black-text">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </Link>
                        <Link to="https://googleplus.com" target="blank" className="black-text">
                            <i className="fab fa-google-plus fa-3x"></i>
                        </Link>
                        <Link to="https://pinterest.com" target="blank" className="black-text">
                            <i className="fab fa-pinterest fa-3x"></i>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer
