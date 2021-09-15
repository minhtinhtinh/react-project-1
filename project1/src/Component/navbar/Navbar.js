import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SmoothScroll = () => (
    <section>
        <div className="navbar-fixed">
            <nav className="purple">
                <div className="container">
                    <div class="nav-wrapper">
                        <AnchorLink href="!#" className="brand-logo">M-Travel</AnchorLink>
                        <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></AnchorLink>
                        <ul class="right hide-on-med-and-down">
                            <li><AnchorLink href="/Home">Home</AnchorLink></li>
                            <li><AnchorLink href="/Search">Search</AnchorLink></li>
                            <li><AnchorLink href="/Explore">Explore</AnchorLink></li>
                            <li><AnchorLink href="/Adventure">Adventure</AnchorLink></li>
                            <li><AnchorLink href="/Gallery">Gallery</AnchorLink></li>
                            <li><AnchorLink href="/Contact">Contact</AnchorLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <ul id="mobile-demo" className="sidenav">
            <li><AnchorLink href="#Home">Home</AnchorLink></li>
            <li><AnchorLink href="#Search">Search</AnchorLink></li>
            <li><AnchorLink href="#Explore">Explore</AnchorLink></li>
            <li><AnchorLink href="#Adventure">Adventure</AnchorLink></li>
            <li><AnchorLink href="#Gallery">Gallery</AnchorLink></li>
            <li><AnchorLink href="#Contact">Contact</AnchorLink></li>
        </ul>
    </section>
)

export class Navbar extends Component {
    render() {
        return (
            <div>
                <SmoothScroll />
            </div>


        )
    }
}

export default Navbar
