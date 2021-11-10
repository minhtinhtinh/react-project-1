import React, { Component } from 'react'
import pic5 from '../../Photo/photo5.jpeg'
import baibien from '../../Photo/Adven-baibien.jpg'
import cau from '../../Photo/adven-cau.jpeg'
import nui from '../../Photo/adven-nui.jpg'
import song from '../../Photo/adven-song.jpg'

import { HashLink as Link } from 'react-router-hash-link'

export class Adventure extends Component {
    render() {
        return (
            <section id = "Adventure">
                <div class="parallax-container">
                    <div class="center">
                        <h3>
                            <span className="white-text darken-1">  </span>
                        </h3>
                    </div>
                    <div class="parallax">
                        <img src={pic5} />
                    </div>

                    <div className="container">
                        <div class="row">
                            <div className="center">
                                <div class="col s12 m3">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src={cau} />
                                            <span class="card-title">VietNam</span>
                                            <Link to="" class="btn-floating activator halfway-fab waves-effect waves-light purple" ><i class="material-icons">add</i></Link>
                                        </div>
                                        <div class="card-content">
                                            <p>Golden Bridge is the name of a pedestrian bridge at Ba Na resort, Da Nang, Vietnam</p>
                                        </div>
                                        <div class="card-reveal">
                                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s12 m3">
                                    <div class="card">
                                        <div class="card-image">
                                            <img className="small" src={song} />
                                            <span class="card-title">India</span>
                                            <Link to="" class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                                        </div>
                                        <div class="card-content">
                                            <p>Tāj Mahal is a mausoleum located in Agra, India. Mughal Emperor Shah Jahan</p>
                                        </div>
                                        <div class="card-reveal">
                                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                            <p>Tāj Mahal is a mausoleum located in Agra, India. Mughal Emperor Shah Jahan.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s12 m3">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src={baibien} />
                                            <span class="card-title">Costa Rica</span>
                                            <Link to="" class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                                        </div>
                                        <div class="card-content">
                                            <p>Jacó has a 4 km long black sand beach and is very popular among surfers</p>
                                        </div>
                                        <div class="card-reveal">
                                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                            <p>TJacó has a 4 km long black sand beach and is very popular among surfers.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col s12 m3">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src={nui} />
                                            <span class="card-title">Peru</span>
                                            <Link to="" class="btn-floating activator halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></Link>
                                        </div>
                                        <div class="card-content">
                                            <p>Machu Picchu was an ancient Inca city in the Eastern Mountains of southern Peru</p>
                                        </div>
                                        <div class="card-reveal">
                                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                            <p>Machu Picchu was an ancient Inca city in the Eastern Mountains of southern Peru.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Adventure
