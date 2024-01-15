import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



const AdminEditUserForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    phone: '',
  });

  const {id} = useParams();
  const {token} = useAuth();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here (e.g., send it to a server)
    console.log('Form Data:', formData);
    // Reset the form after submission
    setFormData({
      email: '',
      username: '',
      phone: '',
    });
  };

  const getCurrentUserData = async () =>{
        const response = await fetch(`http://localhost:5000/api/admin/user/${id}`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        const dataToBeEdited = await response.json();
        if(response.ok){
            console.log(dataToBeEdited);

            setFormData({
                email: dataToBeEdited.email,
                username: dataToBeEdited.username,
                phone:dataToBeEdited.phone,
              });

        }
  }


  const submitFinalData = async() => {
       try {
        const response = await fetch(`http://localhost:5000/api/admin/user/update/${id}`,{
            method: 'PATCH',
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if(response.ok){
            toast.success("Data Updated Successfully");
        }else{
            toast.error("Something went wrong");
        }
       } catch (error) {
        toast.error(error);
       }
  }


  useEffect(()=>{
    getCurrentUserData();
  },[])

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Form</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className='w-full px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white border border-gray-300'
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className='w-full px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white border border-gray-300'
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className='w-full px-3 py-2 bg-gray-200 rounded-md focus:outline-none focus:bg-white border border-gray-300'
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-700"
        onClick={submitFinalData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminEditUserForm;
