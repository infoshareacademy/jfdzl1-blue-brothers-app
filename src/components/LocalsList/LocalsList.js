import React, {Component} from 'react';
import {database} from '../../firebase'


class LocalsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locals: null
        }
    }

    componentDidMount() {
       database.ref('/locals')
           .on('value', snapshot => {
               this.setState({
                   locals: snapshot.val()
               })
           })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LocalsList;
