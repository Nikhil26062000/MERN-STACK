import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth' 
import {  toast } from 'react-toastify';


const AdminContact = () => {

  const [finalData , setFinalData] = useState();

  const {token} = useAuth();

  const getAllContactData = async() => {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/contact`,{
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      const data = await response.json(); 
     console.log(data.message);
      // if(response.status===400){
      //   getAllContactData();
      //   return;
      // }
      if(response.ok){
       if(data.message.length>0){
        setFinalData(data.message);
       }else{
        setFinalData([]);
       }
      
         // console.log(finalData);
          
      }
      } catch (error) {
        toast.error("No data found");
      }
  }

  const deleteMessage =async (id) => {
     try {
      console.log(id);
      const response = await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`,{
        method: 'DELETE',
        headers:{
          Authorization:`Bearer ${token}`,
        }
        
      })
      console.log(response);
      const data = await response.json();

     
    
      
      if(response.ok){
        
            toast.success("Deleted Successfully");
            getAllContactData();
      }else{
        toast.error("Something went wrong");
      
      }
     } catch (error) {
        toast.error(error.message);
        
     }
  }

  useEffect(()=>{
    getAllContactData();
  },[])
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1">
    

      {finalData &&
        finalData.map((item,index) => (
          <div key={index} className="flex flex-col flex-wrap mb-5 rounded-md shadow-md bg-gray-100 px-2 py-2">
          <div className=" p-2"><span className="font-bold text-blue-500 text-sm px-2">id: </span>{item._id}</div>
            <div className=" p-2"><span className="font-bold text-blue-500 text-sm px-2">name : </span>{item.username}</div>
            <div className="  p-2 flex"><span className="font-bold text-blue-500 text-sm px-2">email : </span>{item.email}</div>
            <div className="  p-2 flex"><span className="font-bold text-blue-500 text-sm px-2">message : </span>{item.message}</div>
           
           <button className='w-16 bg-red-400 px-2 py-2 ml-4 rounded-md shadow-lg' onClick={()=>{deleteMessage(item._id)}}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default AdminContact