import React, { Component } from 'react'
import '../../CSS/Explore.css'

export class Explore extends Component {
    render() {
        return (
            <section id = "Explore" className="category-icons">
                <div className="yellow-content">
                    <div className="container">
                        <div class="row">
                            <div className="center">
                                <div class="col s6 m3">
                                    {/* <div class="card-panel"> */}
                                    <i class="medium material-icons purple-text">hotel</i>
                                    <h4 id="auto-size-text">Hotel</h4> {/*thay đổi kích thước chữ khi thay đổi kích thước browser explore.css*/}
                                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                                    {/* </div> */}
                                </div>

                                <div class="col s6 m3">
                                    {/* <div class="card-panel"> */}
                                    <i class="medium material-icons purple-text">restaurant</i>
                                    <h4 id="auto-size-text">Restaurant</h4>
                                    <p>I am convenient because I require little markup to use effectively.</p>
                                    {/* </div> */}
                                </div>

                                <div class="col s6 m3">
                                    {/* <div class="card-panel"> */}
                                    <i class="medium material-icons purple-text">local_cafe</i>
                                    <h4 id="auto-size-text">Food</h4>
                                    <p>I am a very simple card. I require little markup to use effectively.</p>
                                    {/* </div> */}
                                </div>

                                <div class="col s6 m3">
                                    {/* <div class="card-panel"> */}
                                    <i class="medium material-icons purple-text">shopping_cart</i>
                                    <h4 id="auto-size-text">Shopping</h4>
                                    <p>I require little markup to use effectively.</p>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Explore
