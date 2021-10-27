import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthProvider from '../../Context/AuthProvider';
import { Card, Button, Modal } from 'react-bootstrap';

const Added = () => {
    const [added,setAdded] = useState([])
    const [smShow, setSmShow] = useState(false);
    const {user} = AuthProvider()
    useEffect(()=>{
    axios(`https://morning-woodland-56995.herokuapp.com/added/${user?.email}`)
    .then(res=>{
        setAdded(res.data)
    })
    },[user?.email])

    const handleDelete= (id) => {
        const checker = window.confirm('Are you sure you want to delete?');
        if(checker){
        // console.log(id);
        axios.delete(`https://morning-woodland-56995.herokuapp.com/delete/${id}`)
        .then(backend=>{
           if(backend.data){
               setSmShow(true)
               const rest = added.filter(item=>item._id !== id);
               setAdded(rest)
           }
        })}
    }
    // console.log(added);
    return (
        <div>
               <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                       Delete successful
                    </Modal.Title>
                    </Modal.Header>
                   
                </Modal>

           <div className="w-75 bg-light mx-auto mt-5">
               <div className="row p-5 g-3">
                  
                   {added.map((it,index)=>{return(
                       <div key={index} className="px-2 col-12 col-lg-6 ">
                       <Card className=" p-2 border-0 shadow-lg">
                           <div className="row">
                                <div className="col-4">
                                    <Card.Img className="img-fluid" variant="top" src={it?.img} />
                                </div>
                                <div className="col-8">
                                    <Card.Body>
                                        <Card.Title>{it?.category}</Card.Title>
                                        <Card.Text>
                                        {it?.description}
                                        </Card.Text>
                                        <Button onClick={()=>handleDelete(it._id)} variant="primary">cancel</Button>
                                    </Card.Body>
                                </div>
                           </div>
                       </Card>
                       </div>
                   )})}
               </div>

           </div>
        </div>
    );
};

export default Added;