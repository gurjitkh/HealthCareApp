import React from 'react';
import Patient from './Patient';
import PatientList from './PatientList';
import PatientProfile from './PateintProfile';
import Navbar from './Navbar'
import { BrowserRouter, Route, Link }from 'react-router-dom';
import './main.css';

class App extends React.Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Navbar/>
                   
                    <Route exact path="/patient/register" component={Patient}></Route>
                    <Route exact path="/patient-list" component={PatientList}></Route>
                   
                </BrowserRouter>
                {/* <div className="row">
                     <div className="col-sm"><Patient /></div>
                     <div className="col-sm"><PatientList /></div>
                     
                </div>
                <div className="row">
                    <div className="col-sm"><PatientProfile/></div>
                </div> */}
            </div>  
            );
    }
}

export default App