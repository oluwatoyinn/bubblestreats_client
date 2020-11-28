import React, { Component } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import AboutUs from './AboutUs'
import { Bubblestore } from './BubbleStore'

export default class Dashboard extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <AboutUs />
                <Bubblestore />
            </React.Fragment>
        )
    }
}
