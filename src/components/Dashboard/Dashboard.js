import React, {Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <h1>PubFinder</h1>
                <h2>Wyszukiwarka najlepszych lokali w Twojej okolicy</h2>
                <h3>Uruchom aplikację i wyszukaj lokal idealny dla Ciebie! </h3>
                <button>Start</button>
            </div>
        )
    }
}

export default Dashboard;



const buttonStyle = {
    backgroundColor: 'green',
    color: 'yellow',
    fontSize: 20

};
