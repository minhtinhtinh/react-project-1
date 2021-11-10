import React, { Component } from 'react'
import '../../CSS/Contact.css'

export class Contact extends Component {
    render() {
        return (
            <section id = "Contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="center">
                            <div class="col s12 m12">
                                <i class="large material-icons purple-text">mail_outline</i>
                                <h5>MTravel Address</h5>
                                <p>MTravel provide European-standard travel and resort services.
                                    At the same time, there are many attractive promotions to help you enjoy better service. Are you ready?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div class="col s12 m8">
                            <div class="card-panel white lighten-4">
                                <h5>Please Fill Out This Form</h5>
                                <form>
                                    <div class="input-field">
                                        <i class="material-icons prefix">group</i>
                                        <input type="text" id="autocomplete-input" class="autocomplete" />
                                        <label for="autocomplete-input">Name</label>
                                    </div>
                                    <div class="input-field">
                                        <i class="material-icons prefix">email</i>
                                        <input type="text" id="autocomplete-input" class="autocomplete" />
                                        <label for="autocomplete-input">Email</label>
                                    </div>
                                    <div class="input-field">
                                        <i class="material-icons prefix">call_end</i>
                                        <input type="text" id="autocomplete-input" class="autocomplete" />
                                        <label for="autocomplete-input">Phone</label>
                                    </div>
                                    <div class="input-field">
                                        <i class="material-icons prefix">textsms</i>
                                        <input type="text" id="autocomplete-input" class="autocomplete" />
                                        <label for="autocomplete-input">Message</label>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <ul class="collection with-header">
                                <li class="collection-header"><h5>Main Office</h5></li>
                                <li class="collection-item">MTravel Booking</li>
                                <li class="collection-item"><i class="material-icons tiny">location_searching</i> 123 Checkout rd, California, US</li>
                                <li class="collection-item"> <i class="material-icons tiny">phone_in_talk</i> (800) 123-456</li>
                                <li class="collection-item"> <i class="material-icons tiny">mail</i> booking@mtravel.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact
