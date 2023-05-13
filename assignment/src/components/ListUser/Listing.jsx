import React from "react";
import {useState} from 'react';
const Listing = ({users,domain,available,male,female}) => {
    console.log(domain)
    if(available){
        users = users.filter((user)=>{
            return(user.available);
        })
    }
    if(male){
        users = users.filter((user)=>{
            return(user.gender.toLowerCase()=="male");
        })
    }
    if(female){
        users = users.filter((user)=>{
            return(user.gender.toLowerCase()=="female");
        })
    }
    if(domain){
        users = users.filter((user)=>{
            return(user.domain==domain);
        })
    }
    return(<div >
        <div className="row g-3">
    {
        users.length?
        users.map((user)=>{
            return(
                <div className="col-lg-3 col-md-6 col-sm-12 col-12" key={user.id}>
                <div className="card" style={{height:'450px'}}>
                <img className="card-img-top" style={{height:'200px'}} src={user.avatar} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">{user.first_name} {user.last_name}</h4>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Domain: {user.domain}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                    {
                    user.available?
                        <p className="card-text">Available: <span className=" text-success fw-bolder"> Yes</span></p>
                        :    
                        <p className="card-text">Available: <span className=" text-danger fw-bolder">No</span></p>
                    }   
                </div>
                </div>
            </div>
            )
        })
        :<p className="text-danger">Not found...!</p>
            
    }
        </div>
    </div>)
}

export default Listing;