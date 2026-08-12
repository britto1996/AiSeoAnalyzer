"use client";

import { useApp } from '../context/AppContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const {token, loading} = useApp();

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-green-700 to-blue-900">
            <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
    )
  }

  if (!token) {
    return <Navigate to="/login" replace />
  }
  return (
    <Outlet />
  )
}

export default ProtectedRoute