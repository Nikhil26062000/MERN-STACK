import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Logout = () => {

    const {LogoutUser} = useAuth();
    useEffect(() => {
        // remove user session and redirect to login page
        LogoutUser();
    },[LogoutUser])
  return (
        <Navigate to="/login"/>
  )
}

export default Logout