import React, { Component } from 'react'
import pic1 from '../../Photo/photo1.jpeg'
import pic2 from '../../Photo/photo2.jpeg'
import pic3 from '../../Photo/photo3.jpeg'
import pic4 from '../../Photo/photo4.jpeg'
import Navbar from '../../Component/navbar/Navbar'
export class Banner extends Component {
    render() {
        return (
            <div class="slider">
            <Navbar/>
                <ul class="slides">                
                    <li>
                        <img src={pic1}/>
                        <div class ="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class ="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={pic2}/>
                        <div class ="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 class ="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={pic3}/> 
                        <div class ="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 class ="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={pic4}/> 
                        <div class ="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class ="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Banner
