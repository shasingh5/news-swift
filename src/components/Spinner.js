import React from 'react'
import styled from "styled-components";

const SpinnerBox = styled.div`
  .spinner-border {
    &.text-orange {
      color: #f94144;
    }
  }
  
`

const Spinner = () => {
  return (
    <SpinnerBox className="text-center py-4">
      <div className="spinner-border text-orange" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </SpinnerBox>
  )
}

export default Spinner