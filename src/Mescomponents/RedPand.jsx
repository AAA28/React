import React, { Component } from 'react';
import './App.css';
//ici on definit un objet js 
const owl = {
    title: 'Excellent Owl',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
  };
    
class RedPand extends Component{
    render(){
        return(
            <div>
                <h1> {owl.title}  </h1>
                <img  className="App-logo" 
                src={owl.src}
                alt={owl.title}/>
               
            </div>

        );
    }
}
export default RedPand