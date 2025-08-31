import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Landing from './core/components/layouts/Landing'
import AuthRouter from './auth/router/Index'

// routers are responsible for handling the application's routing business logic.
const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        {/* Add other routes here as needed */}
      </Routes>
    </>
  )
}

export default RootRouter