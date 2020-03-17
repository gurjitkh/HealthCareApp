import React from 'react';
import Patient from './Patient';
import './main.css';

class App extends React.Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount(){

    }

    render(){
        return (
            <div id="main-container">
                <Patient />
            </div>
                
            );
    }
}


export default App