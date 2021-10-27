import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

const Home = () => {
    const [services,setServices]=useState([])
    const history = useHistory()

    const colors = ['danger','primary','warning','success','info'];
   
 
    
    useEffect(() =>{
        axios('https://morning-woodland-56995.herokuapp.com/services')
        .then(res=> setServices(res.data))
    },[])


    const handleAdded =(id)=>{
        history.push(`register/${id}`)
    }
    return (
        <div className="w-75 mx-auto row">
            {services.length?services.map((pd,index)=>{return(
               <div key={index} className="col-12 col-md-4 col-lg-3 p-3">
               <Card bg={colors[Math.ceil(Math.random()*4)]} className="shadow-lg border-0" onClick={()=>handleAdded(pd._id)}>
                <Card.Img height="200" variant="top" src={pd.img} />
                <Card.Body className="text-white text-center">
                    <Card.Title>{pd.category}</Card.Title>
                    
                    <Button variant={colors[Math.ceil(Math.random()*4)]}>Add</Button>
                </Card.Body>
                </Card>
               </div>

            )}):
            <Spinner className="text-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
        </div>
    );
};

export default Home;