import React, {Component} from 'react';

class Form extends Component{
    render(){
        return(
            <form>

                <select>
                    <option>Bary</option>
                    <option>Restauracje</option>
                    <option>Fast-Food</option>
                    <option>Dyskoteki</option>
                </select>
                <input type="text" placeholder="Nazwa lokalu"/>
                <input type="text" placeholder="Adres"/>
                <input type="text" placeholder="Strona Internetowa"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Telefon"/>
                <input type="submit" value="Dodaj"/>
            </form>
        )
    }
}

export default Form;