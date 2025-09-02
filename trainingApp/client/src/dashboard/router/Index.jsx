import React from 'react'
import { Routes, Route } from 'react-router-dom'
const DashboardRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default DashboardRouter