import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AuthProvider from '../../Context/AuthProvider';

const Register = () => {
    const [member,setMember] = useState({});
    const {user} = AuthProvider()
    const {id} = useParams();
    // const [photo,setPhoto] = useState('')

    useEffect(() =>{
     axios(`https://morning-woodland-56995.herokuapp.com/service/${id}`)
     .then(res=>setMember(res.data))
    },[])
    // console.log(member)

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       axios.post('https://morning-woodland-56995.herokuapp.com/added',data)
       .then(res=>{
           if(res){
               alert('added successful')
               reset()
           }
       })
    //    setPhoto(data.photo[0].name);
    //   console.log(data.photo[0].name);

    };
    return (
        <div className="mt-5">

             



             <form className="d-flex flex-column w-25 border p-4 column-gap-2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="my-2 p-2 fs-5 lightColor" {...register("name")} defaultValue={user.displayName}  placeholder="FullName" readOnly/>

                <input className="my-2 p-2 fs-5 lightColor" type="email" {...register("email")} defaultValue={user.email} placeholder="Email" readOnly/>

                <input className="my-2 p-2 fs-5" type="date" {...register("date")} />

                <input className="my-2 p-2 fs-5" {...register("img")} defaultValue={member?.img}  placeholder="photo"/>

                {/* <input className="my-2 p-2 fs-5" {...register("photo")} type="file"  placeholder="photo"/> */}


                <input className="my-2 p-2 fs-5" {...register("description")} placeholder="Description"/>

                <input className="my-2 p-2 fs-5" {...register("category")} defaultValue={member?.category} placeholder="Title"/>

                <input className="my-2 p-2 fs-5 bg-danger text-white border-0" type="submit" />
             </form>
             {/* <h1>this is img</h1>
             <img src={photo} alt="" /> */}
        </div>
    );
};

export default Register;