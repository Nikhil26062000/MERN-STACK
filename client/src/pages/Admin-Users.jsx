import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
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
    useEffect(()=>{
        getAllUsers();
    },[])
  return (
    <div className="w-[80%] mx-auto grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-10">
    

      {users &&
        users.map((item) => (
          <div key={item.id} className="flex flex-col flex-wrap mb-5 shadow-lg">
            <div className=" p-2"><span className="font-bold text-blue-500 text-sm px-2">NAME : </span>{item.username}</div>
            <div className="  p-2 flex"><span className="font-bold text-blue-500 text-sm px-2">EMAIL : </span>{item.email}</div>
            <div className="  p-2 flex"><span className="font-bold text-blue-500 text-sm px-2">PHONE : </span>{item.phone}</div>
            <div className=" p-2"><span className="font-bold text-blue-500 text-sm px-2">ADMIN : </span> {item.isAdmin ? 'YES' : 'NO'}</div>
          </div>
        ))}
    </div>
  
  )
}

export default AdminUsers