import React, { Component } from 'react';
class MesEvent extends Component{
    //definition de la fonction de controle de mon event 
    myFuncover(){
        alert('Stop it. Stoe hovering');
    }
    render(){
        return(
            <div>
                <h1>
                    <p onHover={this.myFuncover}>
                        Mon texte on hover
                    </p>
                </h1>
            </div>

        );
    }
}
export default MesEvent