import React from 'react';


class Patient extends React.Component{

    state={
        name:"",
        phoneNumber:"",
        diseaseType:"",
        validated: null
    };

    handleNameInput = (e) => {
        e.preventDefault();
        this.setState({
            name:e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);

    }


    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="text-center">Patient Input Form</h1>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        
                            <form id="patient-form" className="w-50 mx-auto">
                                <div className="form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter patient name"
                                    onChange={this.handleNameInput}
                                    value={this.state.name}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone-number">Phone number: </label>
                                    <input type="text" name="phone-number" className="form-control" placeholder="Enter patient phone number"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="disease-type">Type of diseases: </label>
                                    <input type="text" name="disease-type" className="form-control" placeholder="Enter disease type like: stomach pain, fever"></input>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary mx-2" onClick={this.onSubmit}>Register</button>
                                    <button className="btn btn-danger mx-2">Cancel</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
    
}


export default Patient