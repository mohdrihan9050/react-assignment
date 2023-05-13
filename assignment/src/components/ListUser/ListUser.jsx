import React from "react";
import {useState} from 'react';
import Listing from './Listing';
const ListUser = ({users,domains}) => {
    const [searchParam,setSearchParam] = useState("");
    const [searchData,setSearchData] = useState("");
    const [domain,setDomain] = useState("");
    const [available,setAvailable] = useState(false);
    const [male,setMale] = useState(false);
    const [female,setFemale] = useState(false);
    function searchHandler(key){
        setSearchParam(key);
        let data=null;
        if (searchParam!==""){
            data = users.filter((user)=>{
                return (user.first_name.toLowerCase().includes(searchParam.toLowerCase())||user.last_name.toLowerCase().includes(searchParam.toLowerCase()))
            });
            setSearchData(data)
        }else{
            setSearchData(users);
        }
    }
    return(<div className="my-5">
    <div className="container">
        <div className="mb-5">
            <div className="row gy-2">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <input type="search" value={searchParam} onChange={(e)=>{searchHandler(e.target.value)}} className="form-control" placeholder="search here.."/>
            {/* <button type="submit" onClick={()=>{searchHandler()}} className="btn btn-primary py-2">Search</button> */}
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 col-12">
                    <div className="form-check p-0">
                        <select className="form-select" value={domain} onChange={(e)=>setDomain(e.target.value)}>
                            <option>Select Domain</option>
                            {domains.map((dom,i)=>{
                                return(
                                    <option key={i}>{dom}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={available} onChange={(e)=>{setAvailable(e.target.checked)}}/>
                        <label className="form-check-label">Available</label>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={male} onChange={(e)=>{setMale(e.target.checked)}}/>
                        <label className="form-check-label">Male</label>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-12">
                <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={female} onChange={(e)=>{setFemale(e.target.checked)}}/>
                        <label className="form-check-label">Female</label>
                    </div>
                </div>
            </div>

        </div>
            <Listing users={searchParam?searchData:users} available={available} domain={domain} male={male} female={female}/>
        </div>
            
    </div>)
}

export default ListUser;