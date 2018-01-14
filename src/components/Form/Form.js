import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.validateForm=this.validateForm.bind(this);
    }

     validateForm(event) {

        var commentForm = document.getElementById('commentForm');

         if (commentForm.comments.value === '') {
             window.alert('Please leave your comment!');
             commentForm.comments.focus() ;
             return false;
         }
     }


    render(){
        return(
            <form>
                <input type="text" placeholder="Adress"/>
                <input type="text" placeholder="Name"/>
                <select>
                    <option>Bar</option>
                    <option>Restaurant</option>
                    <option>Fast-Food</option>
                    <option>Disco</option>
                </select>
                <input type="text" placeholder="Name"/>
                <input id="commentForm" type="text" placeholder="Webside"/>
                <input type="submit" value="Add"/>
            </form>
        )
    }
}

export default Form;

/*
 import React, { Component } from 'react';
 import { beers } from '../../data/list';

 class List extends Component {

 constructor(props) {
 super(props);
 this.handleSubmit = this.handleSubmit.bind(this);
 this.handleChange = this.handleChange.bind(this);
 this.state = {
 name: '',
 desc: '',
 kind: '',
 vol: '',
 beers
 }
 }

 handleSubmit(event) {
 this.setState({
 beers: this.state.beers.concat({
 name: this.state.name,
 description: this.state.desc,
 kind: this.state.kind,
 voltage: this.state.voltage
 })
 });
 event.preventDefault();
 }

 handleChange(event) {
 let name = event.target.name;
 this.setState({
 [name]: event.target.value
 });
 }

 render() {
 return(
 <div>
 <form onSubmit={this.handleSubmit}>
 <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
 <input type="text" name="desc" placeholder="Description" onChange={this.handleChange} />
 <input type="text" name="kind" placeholder="Kind" onChange={this.handleChange} />
 <input type="text" name="vol" placeholder="Voltage" onChange={this.handleChange} />
 <input type="submit" value="Dodaj bro!" />
 </form>

 {this.state.beers.map((beer, index) => (
 <div key={index}>
 <h4>{beer.name}</h4>
 <p>{beer.description}</p>
 <p>Kind: {beer.kind}, vol: {beer.voltage}</p>
 <hr />
 </div>
 ))}
 </div>
 );
 }
 }

 export default List;





 export const beers = [{
 name: 'Perła',
 description: 'Piwo jasne lubelskie najlepsze na Świecie',
 kind: 'liht lager',
 voltage: '6.2%'
 }, {
 name: 'Perła Export',
 description: 'Piwo jasne lubelskie najlepsze na Świecie',
 kind: 'liht lager',
 voltage: '6.2%'
 }, {
 name: 'Perła Mocna',
 description: 'Piwo jasne lubelskie najlepsze na Świecie',
 kind: 'liht lager',
 voltage: '6.2%'
 }];




 import React, { Component } from 'react';
 import { BrowserRouter as Router, Route } from 'react-router-dom';

 import Header from './compnents/Header';
 import Footer from './compnents/Footer';
 import Sidebar from './compnents/Sidebar';
 import Dashboard from './compnents/Dashboard';
 import List from './compnents/List';

 import './App.css';

 class App extends Component {
 render() {
 return (
 <Router>
 <div>
 <Header />
 <Route exact path="/" component={Dashboard} />
 <Route path="/beers" component={List} />
 <Sidebar />
 <Footer />
 </div>
 </Router>
 );
 }
 }

 export default App;
 */