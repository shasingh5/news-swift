import React from 'react'
import { Link } from 'react-router-dom'

const NoSearchResults = ({text}) => {
  return (
    <div className='container'>
      <div className="p-5 my-4 border rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">No results for "{text}"</h1>
          <ul>
            <li>Check your search for typos</li>
            <li>Use more generic search terms</li>
            <li>The news you'are searching for may be discontinued or not yet on our site</li>
          </ul>
          <Link className="btn btn-primary" to="/">Back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default NoSearchResults