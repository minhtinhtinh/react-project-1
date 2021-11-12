import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../CSS/Navbar.css'

const SmoothScroll = () => (
    <section>
        <div className="navbar-fixed">
            <nav className="navbarwall"> {/*màu của navbar*/}
                <div className="container">
                    <div class="nav-wrapper">
                        <AnchorLink href="!#" className="brand-logo">MTravel</AnchorLink>
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
            <SmoothScroll />
        )
    }
}

export default Navbar
