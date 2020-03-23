import React from "react";
import api from './api/data_api';

class Patient extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            phoneNumber: "",
            diseaseType: "",
            alertMessage: ""
          };
        
        this.alertRef = React.createRef();
    }

    showAlert = (message) => {
        this.setState({alertMessage: message});
        this.alertRef.current.style.display = "block";
        setTimeout(() => {
            this.alertRef.current.style.display="none";
        },5000);
        
    }

    handleNameInput = e => {
        e.preventDefault();
        this.setState({
        name: e.target.value
    });
  };

  handlePhoneNumberInput = e =>{
    e.preventDefault();
    this.setState({
      phoneNumber: e.target.value
    });
  }

  handleDiseaseTypeInput = e =>{
    e.preventDefault();
    this.setState({
      diseaseType: e.target.value
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    let data = [this.state.name,this.state.phoneNumber,this.state.diseaseType];
    const response = await api.post('/patient',{ data })
    .then(result => {
        if(!result.data.error){
            this.showAlert(result.data.message);
            console.log(result);
        }
    })
    .catch(err => console.log(err));
  }

  render() {  
    return (
      <div className="container">
        <div className="alert alert-success" ref={this.alertRef}>{this.state.alertMessage}</div>
        <div className="row">
          <div className="col-sm">
            <div className="card my-4 w-75 mx-auto shadow p-3 mb-5 bg-white rounded">  
              <div className="card-body">
              <h1 className="card-title text-center">Patient Input Form</h1>
                <form id="patient-form" className="w-75 mx-auto">
                  <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter patient name"
                      onChange={this.handleNameInput}
                      value={this.state.name}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-number">Phone number: </label>
                    <input
                      type="text"
                      name="phone-number"
                      className="form-control"
                      placeholder="Enter patient phone number"
                      onChange={this.handlePhoneNumberInput}
                      value={this.state.phoneNumber}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="disease-type">Type of diseases: </label>
                    <input
                      type="text"
                      name="disease-type"
                      className="form-control"
                      placeholder="Enter disease type like: stomach pain, fever"
                      onChange={this.handleDiseaseTypeInput}
                      value={this.state.diseaseType}
                    ></input>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary mx-2"
                      onClick={this.onSubmit}
                    >
                      Register
                    </button>
                    <button className="btn btn-danger mx-2">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
