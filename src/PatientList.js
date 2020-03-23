import React from 'react'
import api from './api/data_api';

class PatientList extends React.Component {

    constructor (props){
        super (props);
        this.state = {
            patientList: []
        }

    }

    componentDidMount(){
        this.getData();
        
    }

    getData = async () => {
        const response = await api.get('/patients')
        .then(result => {

            console.log(result.data.data);
            this.setState({
                patientList: result.data.data
            });
        })
        .catch(err => console.log(err));

    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.props);
        console.log(e.target);
    }

    renderPatientList(){
        return this.state.patientList.map(patient => {
            return <div className="list-group-item" key={patient.id}>{patient.id}: {patient.name}</div>;
        });

    }

    render(){
        return(
            <div className="container">
                <div className="card-body">
                    <h1 className="card-title text-center">Patient List</h1>
                    <div className="row">
                        <div className="col">
                            <div className="list-group" onClick={this.handleClick}> 
                                {this.renderPatientList()}
                            </div>
                        </div> 
                    </div>
                </div>    
            </div>
        );
    }
}
export default PatientList;
