import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    
  const { userInfo } = useSelector((state) => state.auth);
  // console.log(userInfo);
  return (userInfo !== null ? <Outlet /> : <Navigate to={'/login'} replace />)
}

export default PrivateRoute