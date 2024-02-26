import React, { Component } from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';

class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <Menu/>
                    <About/>
                    <Contact/>
                </div>
                
            </div>
        );
    }
}

export default Home;