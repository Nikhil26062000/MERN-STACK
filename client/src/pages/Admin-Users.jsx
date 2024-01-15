import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminUsers = () => {

    const {token} = useAuth();
    const [users,setUsers] = useState();


    const getAllUsers = async() =>{
       try {
        const response = await fetch('http://localhost:5000/api/admin/user',{
            method: 'GET',
            headers: { Authorization: `Bearer ${token}`}
        })

        const data = await response.json();
        console.log(data);
        setUsers(data);

       } catch (error) {
        console.log(error);
       }
    }

    const deleteUser =async (id) => {
      console.log(id);
      try {
        const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`,{
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}`}
        })

        const data = await response.json();
        console.log(response);
        if(response.ok)
        {
          toast.success("User deleted successfully");
          getAllUsers();
        }else{
          toast.error("Something went wrong");
        }
       
      

       } catch (error) {
        console.log(error);
       }
    }
    

    useEffect(()=>{
        getAllUsers();
    },[])
    return (
    <div className="w-[80%] mx-auto grid grid-cols-1 ">
    

      {users &&
        users.map((item) => (
          <div key={item.id} className="flex flex-col flex-wrap mb-5 rounded-md shadow-md bg-gray-100 px-2 py-2">
            <div className=" p-2"><span className="font-bold text-blue-500 text-sm px-2">NAME : </span>{item.username}</div>
            <div className="  p-2 flex"><span className="font-bold text-blue-500 text-sm px-2">EMAIL : </span>{item.email}</div>
            <div className="  p-2 flex"><span className="font-bold text-blue-500 text-sm px-2">PHONE : </span>{item.phone}</div>
            <div className=" p-2"><span className="font-bold text-blue-500 text-sm px-2">ADMIN : </span> {item.isAdmin ? 'YES' : 'NO'}</div>
            <div className="flex mx-3 mb-2 gap-2">
              <button className=" bg-green-300 text-white px-5 py-2 rounded-md hover:bg-green-600"><Link to={`/admin/users/${item._id}/edit`}>Edit</Link></button>
              <button className=" bg-red-300 text-white px-5 py-2 rounded-md  hover:bg-red-600" onClick={() =>deleteUser(item._id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  
  )
}

export default AdminUsers