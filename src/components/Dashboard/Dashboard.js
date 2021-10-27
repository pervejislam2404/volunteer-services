import React, { useEffect, useState } from 'react';
import axios from 'axios';
import deleteImg from './delete.png'
import { Modal } from 'react-bootstrap';

const Dashboard = () => {
    const [users,setUsers] = useState([]);
    const [smShow, setSmShow] = useState(false);

    useEffect(() => {
        axios('https://morning-woodland-56995.herokuapp.com/allAdded')
        .then(res=>{
            // const unique = [...new Set(res.data.map(it=>it.email))];
           setUsers(res.data)
        })
    },[])

    const handleDelete= (id) => {
        const checker= window.confirm('Are you sure to delete?')
        if(checker){
            // console.log(id);
            axios.delete(`https://morning-woodland-56995.herokuapp.com/delete/${id}`)
            .then(backend=>{
               if(backend.data){
                   setSmShow(true)
                   const rest = users.filter(item=>item._id !== id);
                   setUsers(rest)
               }
            })}
    }
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



            <div className="container bg-light mx-auto rounded mt-5 py-3">
               <div className="row rounded fw-bold mx-2 bg-danger text-white">
                   <h5 className="col-12 col-lg-3 p-2">Name</h5>
                   <h5 className="col-12 col-lg-3 p-2">Email ID</h5>
                   <h5 className="col-12 col-lg-3 p-2">Registating date</h5>
                   <h5 className="col-12 col-lg-3 p-2">Action</h5>
               </div>
               {users.map((item,index)=>{return(
                   <div key={index} className="row rounded fw-bold fs-6 bg-warning my-3 mx-2 shadow">
                       <p className="col-12 col-lg-3 pt-3">{item.name}</p>
                       <p className="col-12 col-lg-3 pt-3">{item.email}</p>
                       <p className="col-12 col-lg-3 pt-3">{item.date}</p>
                       <p className="col-12 col-lg-3 pt-3"><img onClick={()=>handleDelete(item._id)} height="30" width="30" src={deleteImg} alt="" /></p>
                   </div>
               )})}
            </div>
        </div>
    );
};

export default Dashboard;