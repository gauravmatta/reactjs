import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <p style={{ textAlign: 'center', margin: 0 }}>
            &copy; {new Date().getFullYear()} TrainingApp. All rights reserved.
          </p>
        </footer>
    </div>
  )
}

export default Footer