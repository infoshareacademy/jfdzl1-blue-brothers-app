import React, {Component} from 'react';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            type: '',
            name: '',
            weebside: '',
            address: '',
            locals: [{
                uid: 'U Szewca',
                type: 'restaurant',
                name: 'Pub u Szewca',
                weebside: 'http://www.uszewca.pl/',
                address: 'Grodzka 18, 20-112 Lublin'
            }, {
                uid: 'Dziki Wschód',
                type: 'bar',
                name: 'Dziki Wschód',
                weebside: 'http://www.uszewca.pl/',
                address: 'Jasna 7, 20-077 Lublin'
            }, {
                uid: 'Trybunalska',
                type: 'restauracja',
                name: 'Trybunalska Lublin City Pub',
                weebside: 'http://www.trybunalska.pl/',
                address: 'Rynek 4, 20-001 Lublin'
            }, {
                uid: 'Mandragora',
                type: 'restauracja',
                name: 'Żydowska Restauracja Mandragoran',
                weebside: 'http://www.mandragora.lublin.pl/en',
                address: 'Rynek 9, 20-400 Lublin'
            }]
        }
    }

    render() {
        return (
            <div>
                {this.state.locals.map((local, index) => (
                    <div key={index}>
                        <h3>{uid, type, name, weebside, address}</h3>
                        <hr/>
                    </div>
                ))}
            </div>
        );
    }
}

export default List;
