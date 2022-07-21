import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='container'>
      <div className="p-5 my-4 border rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Something's wrong here...</h1>
          <p className="col-md-8 fs-4">We can't find the page you're looking for. <br /> Head back to home.</p>
          <p className="col-md-8 fs-4">Error - 404</p>
          <Link className="btn btn-primary" to="/">Back to home</Link>
        </div>
      </div>      
    </div>
  )
}

export default NotFoundPage