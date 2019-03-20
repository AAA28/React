import React, { Component } from 'react';

const cal = Math.random() < 0.5;


class Conditionif extends Component{
    render(){
        //partie sur les conditions
        let msg;
        if(cal){
            msg="OUT WOOO"
        }else{
            msg ="BED WOOO"
        }
        return <h1> Tonight i'm going to {msg}</h1>;
    }
}
export default Conditionif