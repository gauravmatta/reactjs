import React from 'react'

const Footer = ({appName}) => {
  return (
    <div>
        <footer>
            <p className='footer'>
            &copy; {new Date().getFullYear()} {appName}. All rights reserved.
          </p>
        </footer>
    </div>
  )
}

export default Footer