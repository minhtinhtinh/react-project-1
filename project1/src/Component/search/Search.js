import React, { Component } from 'react'
import '../../CSS/Search.css'
export class Search extends Component {

    submit = () => alert('Thank you for book!')

    render() {
        return (
            <section id = "Search">
                <div className="searchcss" >
                    <div className="center">
                        <button class="btn purple waves-effect waves-light" type="submit" name="action" onClick={this.submit}>
                            Book Now
                            <i class="material-icons right yellow-text">add_location</i>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Search
