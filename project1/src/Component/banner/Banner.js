import React, { Component } from 'react'
import pic1 from '../../Photo/photo1.jpeg'
import pic2 from '../../Photo/photo2.jpeg'
import pic3 from '../../Photo/photo3.jpeg'
import pic4 from '../../Photo/photo4.jpeg'
import Navbar from '../../Component/navbar/Navbar'

import '../../CSS/Banner.css'
export class Banner extends Component {
    render() {
        return (
            <section id = "Home" className="slider">
                <Navbar />
                <ul class="slides">
                    <li className = "full">
                        <img src={pic1} />
                        <div class="caption center-align">
                            <h3>Relax And Enjoy</h3>
                            <h5 class="light grey-text text-lighten-3">Relax with high-class resort system</h5>
                            <a class="waves-effect waves-light btn-small">Button</a>
                        </div>
                    </li>
                    <li>
                        <img src={pic2} />
                        <div class="caption left-align">
                            <h3>Pick Your Destination</h3>
                            <h5 class="light grey-text text-lighten-3">We offer the most beautiful destinations</h5>
                            <a class="waves-effect waves-light btn-small">Button</a>
                        </div>
                    </li>
                    <li>
                        <img src={pic3} />
                        <div class="caption right-align">
                            <h3>Book Your Trip</h3>
                            <h5 class="light grey-text text-lighten-3">You can book schedule with your plan</h5>
                            <a class="waves-effect waves-light btn-small">Button</a>
                        </div>
                    </li>
                    <li>
                        <img src={pic4} />
                        <div class="caption center-align">
                            <h3>International standard service</h3>
                            <h5 class="light grey-text text-lighten-3">International standard service</h5>
                            <a class="waves-effect waves-light btn-small">Button</a>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Banner
