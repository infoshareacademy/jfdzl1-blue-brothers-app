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


