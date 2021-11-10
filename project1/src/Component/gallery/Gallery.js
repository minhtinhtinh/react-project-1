import React, { Component } from 'react'
import '../../CSS/gallary.css'
// import wallpaper from  '../../Photo/arindam-unsplash.jpg'
import wallpaper from '../../Photo/yellow-bg.png'
import Search from '../search/Search';
export class Gallery extends Component {

    constructor() {
        super();
        this.state = {
            Photos: [
                {
                    id: 1,
                    src: "https://source.unsplash.com/random/1",
                    cation: "caption 1",
                },
                {
                    id: 2,
                    src: "https://source.unsplash.com/random/2",
                    cation: "cation 2",
                },
                {
                    id: 3,
                    src: "https://source.unsplash.com/random/3",
                    cation: "caption 3",
                },
                {
                    id: 4,
                    src: "https://source.unsplash.com/random/4",
                    cation: "caption 4",
                },
                {
                    id: 5,
                    src: "https://source.unsplash.com/random/5",
                    cation: "caption 5",
                },
                {
                    id: 6,
                    src: "https://source.unsplash.com/random/6",
                    cation: "caption 6",
                },

                {
                    id: 1,
                    src: "https://source.unsplash.com/random/7",
                    cation: "caption 7",
                },
                {
                    id: 2,
                    src: "https://source.unsplash.com/random/8",
                    cation: "cation 8",
                },
                {
                    id: 3,
                    src: "https://source.unsplash.com/random/9",
                    cation: "caption 9",
                },
                {
                    id: 4,
                    src: "https://source.unsplash.com/random/10",
                    cation: "caption 10",
                },
                {
                    id: 5,
                    src: "https://source.unsplash.com/random/11",
                    cation: "caption 11",
                },
                {
                    id: 6,
                    src: "https://source.unsplash.com/random/12",
                    cation: "caption 12",
                },
            ]
        }
    }

    renderPhoto = () => {
        return (
            this.state.Photos.map(photo =>
                <div class="col s12 m2">
                    <div class="card">
                        <div class="card-image">
                            <img class="materialboxed" data-caption={photo.cation} src={photo.src} />
                        </div>
                    </div>
                </div>
            )
        )
    }

    render() {
        return (
            <section id = "Gallery" className="gallery">
                <Search />
                <div className="container">
                    <div className="row">
                        <div className="center">
                            {this.renderPhoto()}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery