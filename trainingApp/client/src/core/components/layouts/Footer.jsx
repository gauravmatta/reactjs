import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <p className='footer'>
            &copy; {new Date().getFullYear()} TrainingApp. All rights reserved.
          </p>
        </footer>
    </div>
  )
}

export default Footer