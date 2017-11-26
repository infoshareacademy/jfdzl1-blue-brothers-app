import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (


        <div>

            <Router>

                <div>
                    <Appbar/>
                    <Sidebar/>
                    <Route path='/' component ={Dashboard}/>
                    <Route path='/' component ={List}/>
                    <Route path='/' component ={Form}/>
                    <Footer/>

                </div>
            </Router>
        </div>
    );
  }
}

export default App;
