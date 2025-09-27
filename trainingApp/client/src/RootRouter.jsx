import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Landing from './core/components/layouts/Landing'
import AuthRouter from './auth/router/Index'
import DashboardRouter from './dashboard/router/Index'
import ProfileRouter from './profile/router/ProfileRouter'

// routers are responsible for handling the application's routing business logic.
const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
        <Route path="/profile/*" element={<ProfileRouter />} />
        {/* Add other routes here as needed */}
      </Routes>
    </>
  )
}

export default RootRouter