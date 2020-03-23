import React from 'react'


class PatientProfile extends React.Component{

    render(){
        return (
            <div className="container mx-auto my-2">
                    <div className="card my-4 w-75 mx-auto shadow p-3 mb-5 bg-white rounded">
                        <div className="row">
                            <div className="col-sm">
                                <h1>Kawalpreet singh</h1>
                                <p>Patient Id: </p>
                                <p>Symptoms: </p>
                                <p>Doctor assigned:</p>
                            </div>
                            <div className="col-sm text-center">
                                <img className="img-thumbnail" src="https://pixabay.com/get/57e5d2444352a514f6da8c7dda6d49214b6ac3e456597541762c7ddc97/avatar-1577909_1280.png" alt="profile-photo"></img>
                            </div>
                        </div>
                        <hr/>
                        <div className="row mt-3">
                            <div className="col-sm text-center">
                                <button className="btn btn-warning btn-lg">Edit</button>
                            </div>
                            <div className="col-sm text-center">
                                <button className="btn btn-danger btn-lg">Delete</button>
                            </div>
                
                        </div>

                    </div>
            </div>
        );
    }



} 

export default PatientProfile;